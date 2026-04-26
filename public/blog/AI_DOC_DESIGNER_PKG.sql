create or replace package ai_doc_designer_pkg as 
    function describe_query_json( 
        p_sql in clob 
    ) return clob; 
 
    function query_data_json( 
        p_sql in clob, 
        p_max_rows in number default 200 
    ) return clob; 
 
    function validate_report_html( 
        p_html in clob 
    ) return varchar2; 
 
    function generate_report_html( 
        p_sql in clob, 
        p_question in varchar2, 
        p_max_rows in number default 200, 
        p_provider in varchar2 default 'GROQ', 
        p_model in varchar2 default null, 
        p_api_key in varchar2 default null 
    ) return clob; 
end ai_doc_designer_pkg;
/


create or replace package body ai_doc_designer_pkg as 
 
    procedure append_vc( 
        p_clob in out nocopy clob, 
        p_text in varchar2 
    ) is 
    begin 
        if p_text is not null then 
            dbms_lob.writeappend(p_clob, length(p_text), p_text); 
        end if; 
    end append_vc; 
 
    function json_escape( 
        p_text in varchar2 
    ) return varchar2 is 
        l_text varchar2(32767) := p_text; 
    begin 
        if l_text is null then 
            return null; 
        end if; 
 
        l_text := replace(l_text, '\', '\\'); 
        l_text := replace(l_text, '"', '\"'); 
        l_text := replace(l_text, chr(8), ''); 
        l_text := replace(l_text, chr(9), '\t'); 
        l_text := replace(l_text, chr(10), '\n'); 
        l_text := replace(l_text, chr(12), ''); 
        l_text := replace(l_text, chr(13), '\r'); 
 
        return l_text; 
    end json_escape; 
 
    function normalize_sql( 
        p_sql in clob 
    ) return varchar2 is 
        l_sql varchar2(32767); 
    begin 
        if p_sql is null then 
            raise_application_error(-20001, 'SQL query is required.'); 
        end if; 
 
        if dbms_lob.getlength(p_sql) > 32000 then 
            raise_application_error(-20002, 'SQL query is too long.'); 
        end if; 
 
        l_sql := trim(dbms_lob.substr(p_sql, 32000, 1)); 
        l_sql := regexp_replace(l_sql, ';[[:space:]]*$', ''); 
 
        if not regexp_like(l_sql, '^[[:space:]]*select[[:space:]]+', 'i') then 
            raise_application_error(-20003, 'Only SELECT statements are allowed.'); 
        end if; 
 
        if instr(l_sql, ';') > 0 then 
            raise_application_error(-20004, 'Multiple SQL statements are not allowed.'); 
        end if; 
 
        if regexp_like(l_sql, '(/\*|\*/|--)', 'i') then 
            raise_application_error(-20005, 'SQL comments are not allowed.'); 
        end if; 
 
        if regexp_like( 
            upper(l_sql), 
            '(^|[^A-Z0-9_])(INSERT|UPDATE|DELETE|MERGE|DROP|ALTER|TRUNCATE|CREATE|GRANT|REVOKE|COMMIT|ROLLBACK|EXECUTE|BEGIN|DECLARE|CALL)([^A-Z0-9_]|$)' 
        ) then 
            raise_application_error(-20006, 'Unsafe SQL keyword detected.'); 
        end if; 
 
        return l_sql; 
    end normalize_sql; 
 
    function data_type_name( 
        p_type_code in number 
    ) return varchar2 is 
    begin 
        return case p_type_code 
            when 1 then 'VARCHAR2' 
            when 2 then 'NUMBER' 
            when 8 then 'LONG' 
            when 12 then 'DATE' 
            when 23 then 'RAW' 
            when 96 then 'CHAR' 
            when 100 then 'BINARY_FLOAT' 
            when 101 then 'BINARY_DOUBLE' 
            when 112 then 'CLOB' 
            when 113 then 'BLOB' 
            when 180 then 'TIMESTAMP' 
            when 181 then 'TIMESTAMP WITH TIME ZONE' 
            when 231 then 'TIMESTAMP WITH LOCAL TIME ZONE' 
            else 'TYPE_' || p_type_code 
        end; 
    end data_type_name; 
 
    function strip_html_fence( 
        p_text in clob 
    ) return clob is 
        l_text clob := p_text; 
    begin 
        l_text := replace(l_text, '```html', ''); 
        l_text := replace(l_text, '```HTML', ''); 
        l_text := replace(l_text, '```', ''); 
        return trim(l_text); 
    end strip_html_fence; 
 
    function normalize_provider( 
        p_provider in varchar2 
    ) return varchar2 is 
        l_provider varchar2(30); 
    begin 
        l_provider := upper(trim(nvl(p_provider, 'GROQ'))); 
 
        if l_provider not in ('GROQ', 'OPENAI', 'ANTHROPIC', 'GOOGLE') then 
            raise_application_error( 
                -20070, 
                'Unsupported provider. Allowed providers: GROQ, OPENAI, ANTHROPIC, GOOGLE.' 
            ); 
        end if; 
 
        return l_provider; 
    end normalize_provider; 
 
    function normalize_model( 
        p_provider in varchar2, 
        p_model in varchar2 
    ) return varchar2 is 
        l_model varchar2(4000); 
    begin 
        l_model := trim(p_model); 
 
        if l_model is null then 
            if p_provider = 'GROQ' then 
                l_model := 'openai/gpt-oss-120b'; 
            elsif p_provider = 'OPENAI' then 
                l_model := 'gpt-4.1'; 
            elsif p_provider = 'ANTHROPIC' then 
                l_model := 'claude-sonnet-4-5'; 
            elsif p_provider = 'GOOGLE' then 
                l_model := 'gemini-2.5-flash'; 
            end if; 
        end if; 
 
        if length(l_model) > 300 then 
            raise_application_error(-20071, 'Model name is too long.'); 
        end if; 
 
        if not regexp_like(l_model, '^[A-Za-z0-9._:/-]+$') then 
            raise_application_error(-20072, 'Model name contains unsupported characters.'); 
        end if; 
 
        return l_model; 
    end normalize_model; 
 
    function provider_endpoint( 
        p_provider in varchar2, 
        p_model in varchar2 
    ) return varchar2 is 
        l_model varchar2(4000); 
    begin 
        if p_provider = 'GROQ' then 
            return 'https://api.groq.com/openai/v1/chat/completions'; 
        elsif p_provider = 'OPENAI' then 
            return 'https://api.openai.com/v1/chat/completions'; 
        elsif p_provider = 'ANTHROPIC' then 
            return 'https://api.anthropic.com/v1/messages'; 
        elsif p_provider = 'GOOGLE' then 
            l_model := p_model; 
 
            if lower(substr(l_model, 1, 7)) = 'models/' then 
                l_model := substr(l_model, 8); 
            end if; 
 
            return 'https://generativelanguage.googleapis.com/v1beta/models/' || l_model || ':generateContent'; 
        end if; 
 
        raise_application_error(-20073, 'Unsupported provider endpoint.'); 
    end provider_endpoint; 
 
    procedure describe_query( 
        p_sql in varchar2, 
        p_cols out integer, 
        p_desc out dbms_sql.desc_tab2 
    ) is 
        l_cursor integer; 
    begin 
        l_cursor := dbms_sql.open_cursor; 
 
        dbms_sql.parse( 
            l_cursor, 
            'select * from (' || p_sql || ') where 1 = 0', 
            dbms_sql.native 
        ); 
 
        dbms_sql.describe_columns2(l_cursor, p_cols, p_desc); 
        dbms_sql.close_cursor(l_cursor); 
    exception 
        when others then 
            if dbms_sql.is_open(l_cursor) then 
                dbms_sql.close_cursor(l_cursor); 
            end if; 
 
            raise; 
    end describe_query; 
 
    procedure assert_supported_columns( 
        p_sql in varchar2 
    ) is 
        l_cols integer; 
        l_desc dbms_sql.desc_tab2; 
    begin 
        describe_query(p_sql, l_cols, l_desc); 
 
        for i in 1 .. l_cols loop 
            if l_desc(i).col_type in (8, 112, 113) then 
                raise_application_error( 
                    -20008, 
                    'Unsupported column type for column ' || 
                    l_desc(i).col_name || 
                    ': ' || 
                    data_type_name(l_desc(i).col_type) 
                ); 
            end if; 
        end loop; 
    end assert_supported_columns; 
 
    function describe_query_json( 
        p_sql in clob 
    ) return clob is 
        l_sql varchar2(32767); 
        l_cols integer; 
        l_desc dbms_sql.desc_tab2; 
        l_json clob; 
    begin 
        l_sql := normalize_sql(p_sql); 
        assert_supported_columns(l_sql); 
        describe_query(l_sql, l_cols, l_desc); 
 
        apex_json.initialize_clob_output; 
        apex_json.open_object; 
        apex_json.open_array('columns'); 
 
        for i in 1 .. l_cols loop 
            apex_json.open_object; 
            apex_json.write('ordinal', i); 
            apex_json.write('name', l_desc(i).col_name); 
            apex_json.write('data_type_code', l_desc(i).col_type); 
            apex_json.write('data_type', data_type_name(l_desc(i).col_type)); 
            apex_json.write('precision', l_desc(i).col_precision); 
            apex_json.write('scale', l_desc(i).col_scale); 
            apex_json.close_object; 
        end loop; 
 
        apex_json.close_array; 
        apex_json.close_object; 
 
        l_json := apex_json.get_clob_output; 
        apex_json.free_output; 
 
        return l_json; 
    end describe_query_json; 
 
    function query_data_json( 
        p_sql in clob, 
        p_max_rows in number 
    ) return clob is 
        l_sql varchar2(32767); 
        l_cols integer; 
        l_desc dbms_sql.desc_tab2; 
        l_cursor integer; 
        l_status integer; 
        l_value varchar2(4000); 
        l_json clob; 
        l_row_count number := 0; 
        l_limit number := least(greatest(nvl(p_max_rows, 200), 1), 500); 
        l_first_row boolean := true; 
    begin 
        l_sql := normalize_sql(p_sql); 
        assert_supported_columns(l_sql); 
        describe_query(l_sql, l_cols, l_desc); 
 
        dbms_lob.createtemporary(l_json, true); 
 
        append_vc(l_json, '{'); 
        append_vc(l_json, '"max_rows":' || l_limit || ','); 
        append_vc(l_json, '"columns":['); 
 
        for i in 1 .. l_cols loop 
            if i > 1 then 
                append_vc(l_json, ','); 
            end if; 
 
            append_vc(l_json, '{'); 
            append_vc(l_json, '"ordinal":' || i || ','); 
            append_vc(l_json, '"name":"' || json_escape(l_desc(i).col_name) || '",'); 
            append_vc(l_json, '"data_type":"' || json_escape(data_type_name(l_desc(i).col_type)) || '"'); 
            append_vc(l_json, '}'); 
        end loop; 
 
        append_vc(l_json, '],'); 
        append_vc(l_json, '"rows":['); 
 
        l_cursor := dbms_sql.open_cursor; 
 
        dbms_sql.parse( 
            l_cursor, 
            'select * from (' || l_sql || ') where rownum <= :b_max_rows', 
            dbms_sql.native 
        ); 
 
        dbms_sql.bind_variable(l_cursor, ':b_max_rows', l_limit); 
        dbms_sql.describe_columns2(l_cursor, l_cols, l_desc); 
 
        for i in 1 .. l_cols loop 
            dbms_sql.define_column(l_cursor, i, l_value, 4000); 
        end loop; 
 
        l_status := dbms_sql.execute(l_cursor); 
 
        while dbms_sql.fetch_rows(l_cursor) > 0 loop 
            l_row_count := l_row_count + 1; 
 
            if l_first_row then 
                l_first_row := false; 
            else 
                append_vc(l_json, ','); 
            end if; 
 
            append_vc(l_json, '{'); 
 
            for i in 1 .. l_cols loop 
                if i > 1 then 
                    append_vc(l_json, ','); 
                end if; 
 
                dbms_sql.column_value(l_cursor, i, l_value); 
 
                append_vc(l_json, '"' || json_escape(l_desc(i).col_name) || '":'); 
 
                if l_value is null then 
                    append_vc(l_json, 'null'); 
                else 
                    append_vc(l_json, '"' || json_escape(substr(l_value, 1, 1000)) || '"'); 
                end if; 
            end loop; 
 
            append_vc(l_json, '}'); 
        end loop; 
 
        dbms_sql.close_cursor(l_cursor); 
 
        append_vc(l_json, '],'); 
        append_vc(l_json, '"row_count_returned":' || l_row_count); 
        append_vc(l_json, '}'); 
 
        return l_json; 
    exception 
        when others then 
            if dbms_sql.is_open(l_cursor) then 
                dbms_sql.close_cursor(l_cursor); 
            end if; 
 
            raise; 
    end query_data_json; 
 
    procedure build_design_prompt( 
        p_question in varchar2, 
        p_columns_json in clob, 
        p_data_json in clob, 
        p_system out varchar2, 
        p_user out clob 
    ) is 
    begin 
        p_system := 
            'You are a senior visual report designer and front-end document designer working inside Oracle APEX. ' || 
            'Your only task is to return one complete self-contained printable HTML report. ' || 
            'Return raw HTML only. Do not return JSON. Do not return markdown. Do not return code fences. Do not explain anything. ' || 
            'The output must start with <div id="ai-doc-report"> and end with </div>. ' || 
            'The output must include exactly one <style> tag inside #ai-doc-report. ' || 
            'This is a premium PDF report design task, not a database table export. ' || 
            'A plain flat table is not acceptable unless the dataset truly has no categories, no groups, no dates, and no numeric values. ' || 
            'Before designing, infer the best report structure from the user request, the column metadata, and the data rows. ' || 
            'Use the actual data values only. Do not invent values, totals, names, labels, categories, or insights. ' || 
            'Create a visually impressive A4 print-ready report using HTML and CSS only. ' || 
            'Use strong visual hierarchy, a premium cover/header, typography scale, spacing, color palette, cards, badges, dividers, grouped sections, and clean data presentation. ' || 
            'If the data contains categories or grouping fields, create grouped sections. ' || 
            'If the user asks for grouping, grouping is mandatory. ' || 
            'If the data contains employee/person/customer/product records, avoid a single flat table; use grouped sections, cards, or clean grouped detail tables. ' || 
            'If numeric values exist, create KPI cards and CSS-only visual bars or ranking blocks. ' || 
            'If date or time values exist, create a timeline or period-based visual section when useful. ' || 
            'For charts, use CSS-only div-based visuals such as horizontal bars, progress bars, ranking bars, comparison blocks, and KPI cards. ' || 
            'Do not use JavaScript, SVG, canvas, images, external fonts, external CSS, or external resources. ' || 
            'Allowed HTML tags include div, section, header, main, article, h1, h2, h3, h4, p, span, strong, small, table, thead, tbody, tr, th, td, ul, ol, li, style, br. ' || 
            'Do not use script, iframe, object, embed, form, input, button, link, meta, img, svg, canvas, video, or audio. ' || 
            'The report must be designed for A4 PDF export. Use print-friendly CSS, page-break rules where appropriate, and avoid layouts that depend on viewport-only behavior. ' || 
            'The final result must look like a professional document prepared by a high-end reporting team.'; 
 
        p_user := 
            'User request:' || chr(10) || 
            nvl(p_question, 'Create a premium PDF report from this data.') || chr(10) || chr(10) || 
            'Column metadata JSON:' || chr(10) || 
            p_columns_json || chr(10) || chr(10) || 
            'Data rows JSON:' || chr(10) || 
            p_data_json || chr(10) || chr(10) || 
            'Return the final raw HTML report only. No JSON. No markdown. No explanation.'; 
    end build_design_prompt; 
 
    function build_openai_compatible_payload( 
        p_model in varchar2, 
        p_system in varchar2, 
        p_user in clob 
    ) return clob is 
        l_payload clob; 
    begin 
        apex_json.initialize_clob_output; 
        apex_json.open_object; 
 
        apex_json.write('model', p_model); 
        apex_json.write('max_completion_tokens', 12000); 
 
        apex_json.open_array('messages'); 
 
        apex_json.open_object; 
        apex_json.write('role', 'system'); 
        apex_json.write('content', p_system); 
        apex_json.close_object; 
 
        apex_json.open_object; 
        apex_json.write('role', 'user'); 
        apex_json.write('content', p_user); 
        apex_json.close_object; 
 
        apex_json.close_array; 
        apex_json.close_object; 
 
        l_payload := apex_json.get_clob_output; 
        apex_json.free_output; 
 
        return l_payload; 
    end build_openai_compatible_payload; 
 
    function build_anthropic_payload( 
        p_model in varchar2, 
        p_system in varchar2, 
        p_user in clob 
    ) return clob is 
        l_payload clob; 
    begin 
        apex_json.initialize_clob_output; 
        apex_json.open_object; 
 
        apex_json.write('model', p_model); 
        apex_json.write('max_tokens', 12000); 
        apex_json.write('system', p_system); 
 
        apex_json.open_array('messages'); 
 
        apex_json.open_object; 
        apex_json.write('role', 'user'); 
        apex_json.write('content', p_user); 
        apex_json.close_object; 
 
        apex_json.close_array; 
        apex_json.close_object; 
 
        l_payload := apex_json.get_clob_output; 
        apex_json.free_output; 
 
        return l_payload; 
    end build_anthropic_payload; 
 
    function build_google_payload( 
        p_system in varchar2, 
        p_user in clob 
    ) return clob is 
        l_payload clob; 
    begin 
        apex_json.initialize_clob_output; 
        apex_json.open_object; 
 
        apex_json.open_object('systemInstruction'); 
        apex_json.open_array('parts'); 
        apex_json.open_object; 
        apex_json.write('text', p_system); 
        apex_json.close_object; 
        apex_json.close_array; 
        apex_json.close_object; 
 
        apex_json.open_array('contents'); 
        apex_json.open_object; 
        apex_json.write('role', 'user'); 
        apex_json.open_array('parts'); 
        apex_json.open_object; 
        apex_json.write('text', p_user); 
        apex_json.close_object; 
        apex_json.close_array; 
        apex_json.close_object; 
        apex_json.close_array; 
 
        apex_json.open_object('generationConfig'); 
        apex_json.write('maxOutputTokens', 12000); 
        apex_json.close_object; 
 
        apex_json.close_object; 
 
        l_payload := apex_json.get_clob_output; 
        apex_json.free_output; 
 
        return l_payload; 
    end build_google_payload; 
 
    function build_provider_payload( 
        p_provider in varchar2, 
        p_model in varchar2, 
        p_system in varchar2, 
        p_user in clob 
    ) return clob is 
    begin 
        if p_provider in ('GROQ', 'OPENAI') then 
            return build_openai_compatible_payload( 
                p_model => p_model, 
                p_system => p_system, 
                p_user => p_user 
            ); 
        elsif p_provider = 'ANTHROPIC' then 
            return build_anthropic_payload( 
                p_model => p_model, 
                p_system => p_system, 
                p_user => p_user 
            ); 
        elsif p_provider = 'GOOGLE' then 
            return build_google_payload( 
                p_system => p_system, 
                p_user => p_user 
            ); 
        end if; 
 
        raise_application_error(-20074, 'Unsupported provider payload.'); 
    end build_provider_payload; 
 
    procedure set_provider_headers( 
        p_provider in varchar2, 
        p_api_key in varchar2 
    ) is 
    begin 
        if trim(p_api_key) is null then 
            raise_application_error(-20064, 'API key is required.'); 
        end if; 
 
        apex_web_service.g_request_headers.delete; 
 
        apex_web_service.g_request_headers(1).name := 'Content-Type'; 
        apex_web_service.g_request_headers(1).value := 'application/json'; 
 
        if p_provider in ('GROQ', 'OPENAI') then 
            apex_web_service.g_request_headers(2).name := 'Authorization'; 
            apex_web_service.g_request_headers(2).value := 'Bearer ' || trim(p_api_key); 
        elsif p_provider = 'ANTHROPIC' then 
            apex_web_service.g_request_headers(2).name := 'x-api-key'; 
            apex_web_service.g_request_headers(2).value := trim(p_api_key); 
 
            apex_web_service.g_request_headers(3).name := 'anthropic-version'; 
            apex_web_service.g_request_headers(3).value := '2023-06-01'; 
        elsif p_provider = 'GOOGLE' then 
            apex_web_service.g_request_headers(2).name := 'x-goog-api-key'; 
            apex_web_service.g_request_headers(2).value := trim(p_api_key); 
        else 
            raise_application_error(-20075, 'Unsupported provider headers.'); 
        end if; 
    end set_provider_headers; 
 
    function extract_provider_text( 
        p_provider in varchar2, 
        p_response in clob 
    ) return clob is 
        l_text clob; 
    begin 
        apex_json.parse(p_response); 
 
        if p_provider in ('GROQ', 'OPENAI') then 
            l_text := apex_json.get_clob( 
                p_path => 'choices[%d].message.content', 
                p0 => 1 
            ); 
 
            if l_text is null then 
                l_text := apex_json.get_clob( 
                    p_path => 'choices[%d].message.content', 
                    p0 => 0 
                ); 
            end if; 
 
        elsif p_provider = 'ANTHROPIC' then 
            l_text := apex_json.get_clob( 
                p_path => 'content[%d].text', 
                p0 => 1 
            ); 
 
            if l_text is null then 
                l_text := apex_json.get_clob( 
                    p_path => 'content[%d].text', 
                    p0 => 0 
                ); 
            end if; 
 
        elsif p_provider = 'GOOGLE' then 
            l_text := apex_json.get_clob( 
                p_path => 'candidates[%d].content.parts[%d].text', 
                p0 => 1, 
                p1 => 1 
            ); 
 
            if l_text is null then 
                l_text := apex_json.get_clob( 
                    p_path => 'candidates[%d].content.parts[%d].text', 
                    p0 => 0, 
                    p1 => 0 
                ); 
            end if; 
        end if; 
 
        return l_text; 
    exception 
        when others then 
            raise_application_error( 
                -20076, 
                'Could not parse provider response. Raw response preview: ' || 
                dbms_lob.substr(p_response, 3000, 1) 
            ); 
    end extract_provider_text; 
 
    function validate_report_html( 
        p_html in clob 
    ) return varchar2 is 
        l_len number; 
        l_pos number := 1; 
        l_chunk varchar2(32767); 
        l_lower varchar2(32767); 
        l_first varchar2(32767); 
    begin 
        if p_html is null or dbms_lob.getlength(p_html) = 0 then 
            return 'HTML output is empty.'; 
        end if; 
 
        l_len := dbms_lob.getlength(p_html); 
 
        if l_len > 1000000 then 
            return 'HTML output is too large.'; 
        end if; 
 
        while l_pos <= l_len loop 
            l_chunk := dbms_lob.substr(p_html, 30000, l_pos); 
            l_lower := lower(l_chunk); 
 
            if instr(l_lower, '<script') > 0 or instr(l_lower, '</script') > 0 then 
                return 'Blocked unsafe HTML: script tag is not allowed.'; 
            elsif instr(l_lower, '<iframe') > 0 then 
                return 'Blocked unsafe HTML: iframe tag is not allowed.'; 
            elsif instr(l_lower, '<object') > 0 then 
                return 'Blocked unsafe HTML: object tag is not allowed.'; 
            elsif instr(l_lower, '<embed') > 0 then 
                return 'Blocked unsafe HTML: embed tag is not allowed.'; 
            elsif instr(l_lower, '<form') > 0 then 
                return 'Blocked unsafe HTML: form tag is not allowed.'; 
            elsif instr(l_lower, '<input') > 0 then 
                return 'Blocked unsafe HTML: input tag is not allowed.'; 
            elsif instr(l_lower, '<button') > 0 then 
                return 'Blocked unsafe HTML: button tag is not allowed.'; 
            elsif instr(l_lower, '<link') > 0 then 
                return 'Blocked unsafe HTML: link tag is not allowed.'; 
            elsif instr(l_lower, '<meta') > 0 then 
                return 'Blocked unsafe HTML: meta tag is not allowed.'; 
            elsif instr(l_lower, '<svg') > 0 then 
                return 'Blocked unsafe HTML: svg tag is not allowed.'; 
            elsif instr(l_lower, '<canvas') > 0 then 
                return 'Blocked unsafe HTML: canvas tag is not allowed.'; 
            elsif instr(l_lower, '<img') > 0 then 
                return 'Blocked unsafe HTML: img tag is not allowed.'; 
            elsif instr(l_lower, 'javascript:') > 0 then 
                return 'Blocked unsafe HTML: javascript URL is not allowed.'; 
            elsif regexp_like(l_lower, '[[:space:]]on[a-z0-9_:-]+[[:space:]]*=') then 
                return 'Blocked unsafe HTML: event handler attributes are not allowed.'; 
            elsif instr(l_lower, '@import') > 0 then 
                return 'Blocked unsafe CSS: import is not allowed.'; 
            elsif instr(l_lower, 'url(') > 0 then 
                return 'Blocked unsafe CSS: url() is not allowed.'; 
            elsif instr(l_lower, 'http://') > 0 or instr(l_lower, 'https://') > 0 then 
                return 'Blocked unsafe HTML: external resources are not allowed.'; 
            end if; 
 
            l_pos := l_pos + 30000; 
        end loop; 
 
        l_first := lower(dbms_lob.substr(p_html, 32767, 1)); 
 
        if instr(l_first, 'id="ai-doc-report"') = 0 and instr(l_first, 'id=''ai-doc-report''') = 0 then 
            return 'HTML output must include root element id="ai-doc-report".'; 
        end if; 
 
        if instr(l_first, '<style') = 0 then 
            return 'HTML output must include a style tag.'; 
        end if; 
 
        return null; 
    end validate_report_html; 
 
    function generate_report_html( 
        p_sql in clob, 
        p_question in varchar2, 
        p_max_rows in number, 
        p_provider in varchar2, 
        p_model in varchar2, 
        p_api_key in varchar2 
    ) return clob is 
        l_sql varchar2(32767); 
        l_provider varchar2(30); 
        l_model varchar2(4000); 
        l_endpoint varchar2(4000); 
        l_columns_json clob; 
        l_data_json clob; 
        l_system varchar2(32767); 
        l_user clob; 
        l_payload clob; 
        l_response clob; 
        l_html clob; 
        l_validation_error varchar2(4000); 
        l_error varchar2(4000); 
    begin 
        l_sql := normalize_sql(p_sql); 
        assert_supported_columns(l_sql); 
 
        l_provider := normalize_provider(p_provider); 
        l_model := normalize_model(l_provider, p_model); 
        l_endpoint := provider_endpoint(l_provider, l_model); 
 
        l_columns_json := describe_query_json(l_sql); 
        l_data_json := query_data_json(l_sql, p_max_rows); 
 
        build_design_prompt( 
            p_question => p_question, 
            p_columns_json => l_columns_json, 
            p_data_json => l_data_json, 
            p_system => l_system, 
            p_user => l_user 
        ); 
 
        l_payload := build_provider_payload( 
            p_provider => l_provider, 
            p_model => l_model, 
            p_system => l_system, 
            p_user => l_user 
        ); 
 
        set_provider_headers( 
            p_provider => l_provider, 
            p_api_key => p_api_key 
        ); 
 
        l_response := apex_web_service.make_rest_request( 
            p_url => l_endpoint, 
            p_http_method => 'POST', 
            p_body => l_payload 
        ); 
 
        l_html := extract_provider_text( 
            p_provider => l_provider, 
            p_response => l_response 
        ); 
 
        if l_html is null then 
            raise_application_error( 
                -20052, 
                'AI response did not include expected text content. Raw response preview: ' || 
                dbms_lob.substr(l_response, 3000, 1) 
            ); 
        end if; 
 
        l_html := strip_html_fence(l_html); 
 
        l_validation_error := validate_report_html(l_html); 
 
        if l_validation_error is not null then 
            raise_application_error(-20050, l_validation_error); 
        end if; 
 
        return l_html; 
    exception 
        when others then 
            l_error := substr(sqlerrm, 1, 4000); 
            raise_application_error( 
                -20099, 
                'AI report generation failed. No fallback report was generated. Details: ' || l_error 
            ); 
    end generate_report_html; 
 
end ai_doc_designer_pkg;
/