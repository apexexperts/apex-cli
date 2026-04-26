type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "image"; src: string; caption: string }
  | { type: "code"; code: string; language: string }
  | { type: "ul"; items: string[] };

type Author = {
  name: string;
  role: string;
  image: string;
};

export interface Post {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  synopsis?: string;
  mainImage: string;
  author: Author;
  categories: string[];
  body: BlogBlock[];
}

export const AUTHORS = {
  ahmed: {
    name: "Ahmed Al-Saied",
    role: "Founder & CEO",
    image: "/images/avatars/ahmed.png",
  },
  amr: {
    name: "Amr Mohamed",
    role: "Team Leader",
    image: "/images/avatars/Amr.png",
  },
  asma: {
    name: "Asma Ali",
    role: "Marketing Manager",
    image: "/images/avatars/asma.png",
  },
  hesham: {
    name: "Hesham Abdelwahed",
    role: "Sales Manager",
    image: "/images/avatars/hesham.png",
  },
  micheal: {
    name: "Micheal Magdy",
    role: "Sr. Software Engineer",
    image: "/images/avatars/mich.png",
  },
  abdelrahman: {
    name: "Abdelrahman Ibrahim",
    role: "Sr. Software Engineer",
    image: "/images/avatars/abd.png",
  },
  mario: {
    name: "Mario Milad",
    role: "Product Designer",
    image: "/images/avatars/mario.png",
  },
  reham: {
    name: "Reham Samer",
    role: "Quality Engineering",
    image: "/images/avatars/reham.png",
  },
  maha: {
    name: "Maha Salam",
    role: "System Admin",
    image: "/images/avatars/maha.png",
  },
} satisfies Record<string, Author>;

export const BLOG_POSTS: Post[] = [
  {
    id: "post-51",
    title: "Building an AI-Powered PDF Report Designer in Oracle APEX",
    slug: "building-ai-powered-pdf-report-designer-oracle-apex",
    publishedAt: "2026-04-26T21:24:00Z",
    excerpt: "A practical technical walkthrough of building an Oracle APEX prototype that lets users generate AI-designed PDF reports from SQL queries using Groq, OpenAI, Anthropic, or Google Gemini.",
    synopsis: "Let the user stay inside Oracle APEX, write a SQL query, describe the report they want, and generate a beautifully designed PDF report from live database data.",
    mainImage: "/images/apex-smart-docs.png",
    author: AUTHORS.ahmed,
    categories: ["ORACLE APEX", "AI AUTOMATION", "LLM INTEGRATION", "PDF GENERATION"],
    body: [
      {
        type: "p",
        text: "Oracle APEX is very good at building data applications quickly."
      },
      {
        type: "p",
        text: "You can create forms, dashboards, interactive reports, charts, and business workflows without writing a full application from scratch."
      },
      {
        type: "p",
        text: "But there is still one area where users often leave the application:"
      },
      {
        type: "p",
        text: "**beautiful PDF reports.**"
      },
      {
        type: "p",
        text: "A business user can usually see the data inside APEX, but when they want a polished report for management, they often end up doing this:"
      },
      {
        type: "ul",
        items: [
          "1. Export data to Excel.",
          "2. Format it manually.",
          "3. Copy parts into PowerPoint.",
          "4. Ask someone to make it look better.",
          "5. Or paste data into an external AI tool and ask it to design a report."
        ]
      },
      {
        type: "p",
        text: "That last step is exactly what I wanted to avoid."
      },
      {
        type: "p",
        text: "The goal of this prototype is simple:"
      },
      {
        type: "p",
        text: "Let the user stay inside Oracle APEX, write a SQL query, describe the report they want, and generate a beautifully designed PDF report from live database data."
      },
      {
        type: "p",
        text: "No manual formatting."
      },
      {
        type: "p",
        text: "No external file upload."
      },
      {
        type: "p",
        text: "No fixed report template."
      },
      {
        type: "p",
        text: "No table-only export."
      },
      { type: "h2", text: "What We Are Building" },
      {
        type: "p",
        text: "The prototype allows the user to:"
      },
      {
        type: "ul",
        items: [
          "1. Write a SQL query.",
          "2. Choose an AI provider.",
          "3. Enter a model name.",
          "4. Enter an API key.",
          "5. Describe the report in natural language.",
          "6. Generate an AI-designed HTML report.",
          "7. Preview the report inside APEX.",
          "8. Download it as PDF."
        ]
      },
      {
        type: "p",
        text: "The flow looks like this:"
      },
      {
        type: "code",
        language: "text",
        code: `User SQL + report request\n        ↓\nSQL validation\n        ↓\nColumn metadata extraction\n        ↓\nLimited row sample extraction\n        ↓\nProvider-specific AI request\n        ↓\nAI returns printable HTML/CSS\n        ↓\nAPEX displays the report\n        ↓\nBrowser exports it to PDF`
      },
      {
        type: "image",
        src: "/images/blog/ai-report-designer.png",
        caption: "Figure 1: The AI-powered report design workflow inside Oracle APEX."
      },
      {
        type: "p",
        text: "The important idea is this:"
      },
      {
        type: "p",
        text: "The AI does not just choose a predefined component."
      },
      {
        type: "p",
        text: "The AI designs the report layout itself."
      },
      {
        type: "p",
        text: "That means the report can be grouped, visual, card-based, sectioned, or structured differently depending on the data and the user request."
      },
      { type: "h2", text: "Supported AI Providers" },
      {
        type: "p",
        text: "For this version, I decided to support four providers only:"
      },
      {
        type: "ul",
        items: [
          "Groq",
          "OpenAI",
          "Anthropic",
          "Google Gemini"
        ]
      },
      {
        type: "p",
        text: "I intentionally removed the idea of a fully custom endpoint."
      },
      {
        type: "p",
        text: "At first, a custom endpoint sounds flexible. But in practice, every provider has different payloads, headers, token parameters, and response structures."
      },
      {
        type: "p",
        text: "So this prototype supports four providers properly instead of pretending that every API works the same way."
      },
      {
        type: "p",
        text: "The frontend only asks for:"
      },
      {
        type: "ul",
        items: [
          "Provider",
          "Model",
          "API Key"
        ]
      },
      {
        type: "p",
        text: "The backend handles the endpoint, headers, payload, and response parsing internally."
      },
      { type: "h2", text: "Provider Handling" },
      {
        type: "p",
        text: "The PL/SQL package switches behavior based on the selected provider."
      },
      { type: "h2", text: "Groq" },
      {
        type: "ul",
        items: [
          "Endpoint: https://api.groq.com/openai/v1/chat/completions",
          "Authentication: Authorization: Bearer <API_KEY>",
          "Response: choices[].message.content"
        ]
      },
      { type: "h2", text: "OpenAI" },
      {
        type: "ul",
        items: [
          "Endpoint: https://api.openai.com/v1/chat/completions",
          "Authentication: Authorization: Bearer <API_KEY>",
          "Response: choices[].message.content"
        ]
      },
      { type: "h2", text: "Anthropic" },
      {
        type: "ul",
        items: [
          "Endpoint: https://api.anthropic.com/v1/messages",
          "Authentication: x-api-key: <API_KEY>, anthropic-version: 2023-06-01",
          "Response: content[].text"
        ]
      },
      { type: "h2", text: "Google Gemini" },
      {
        type: "ul",
        items: [
          "Endpoint: https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent",
          "Authentication: x-goog-api-key: <API_KEY>",
          "Response: candidates[].content.parts[].text"
        ]
      },
      { type: "h2", text: "Why I Did Not Use Web Credentials" },
      {
        type: "p",
        text: "For this prototype, the API key is entered directly from the frontend."
      },
      {
        type: "p",
        text: "The key is not saved in a table."
      },
      {
        type: "p",
        text: "The key is not stored as a Web Credential."
      },
      {
        type: "p",
        text: "The key is sent only during the AJAX request that generates the report."
      },
      {
        type: "p",
        text: "This is useful for a demo or a 'bring your own key' workflow."
      },
      {
        type: "p",
        text: "The flow is:"
      },
      {
        type: "code",
        language: "text",
        code: `User enters API key\n        ↓\nJavaScript sends it to AJAX callback\n        ↓\nPL/SQL uses it in the provider request header\n        ↓\nNothing is inserted into a settings table`
      },
      {
        type: "p",
        text: "For a production version, I would still consider encrypted saved keys or APEX Web Credentials depending on the security model."
      },
      {
        type: "p",
        text: "But for this prototype, frontend AI settings make testing much easier."
      },
      { type: "h2", text: "The PL/SQL Package" },
      {
        type: "p",
        text: "The backend package is called: AI_DOC_DESIGNER_PKG"
      },
      {
        type: "p",
        text: "The package has four public functions:"
      },
      {
        type: "code",
        language: "sql",
        code: `function describe_query_json(\n    p_sql in clob\n) return clob;\n\nfunction query_data_json(\n    p_sql in clob,\n    p_max_rows in number default 200\n) return clob;\n\nfunction validate_report_html(\n    p_html in clob\n) return varchar2;\n\nfunction generate_report_html(\n    p_sql in clob,\n    p_question in varchar2,\n    p_max_rows in number default 200,\n    p_provider in varchar2 default 'GROQ',\n    p_model in varchar2 default null,\n    p_api_key in varchar2 default null\n) return clob;`
      },
      { type: "h2", text: "describe_query_json" },
      {
        type: "p",
        text: "This function validates the SQL and extracts column metadata using DBMS_SQL."
      },
      {
        type: "p",
        text: "It returns information such as:"
      },
      {
        type: "ul",
        items: [
          "Column name",
          "Column data type",
          "Precision",
          "Scale",
          "Column order"
        ]
      },
      {
        type: "p",
        text: "The AI receives this metadata so it can understand the shape of the result set."
      },
      { type: "h2", text: "query_data_json" },
      {
        type: "p",
        text: "This function runs the user query with a row limit."
      },
      {
        type: "p",
        text: "It does not send unlimited data to the AI provider."
      },
      {
        type: "p",
        text: "The maximum row count is controlled from the page using: P40_MAX_ROWS"
      },
      {
        type: "p",
        text: "This keeps the prototype safer and faster."
      },
      { type: "h2", text: "validate_report_html" },
      {
        type: "p",
        text: "This function checks the HTML returned by the AI."
      },
      {
        type: "p",
        text: "The report must include: <div id=\"ai-doc-report\"> and a <style> tag."
      },
      {
        type: "p",
        text: "The function blocks unsafe HTML such as:"
      },
      {
        type: "ul",
        items: [
          "script",
          "iframe",
          "object",
          "embed",
          "form",
          "input",
          "button",
          "link",
          "meta",
          "img",
          "svg",
          "canvas",
          "external URLs",
          "JavaScript URLs",
          "event handler attributes"
        ]
      },
      {
        type: "p",
        text: "This is not a full HTML sanitizer, but it gives the prototype a basic safety boundary."
      },
      { type: "h2", text: "generate_report_html" },
      {
        type: "p",
        text: "This is the main function."
      },
      {
        type: "p",
        text: "It performs the full AI generation flow: Validate SQL, Extract metadata, Extract limited data rows, Build the design prompt, Build provider-specific payload, Send REST request, Extract AI response text, Validate returned HTML, Return final report HTML."
      },
      {
        type: "p",
        text: "If the AI fails, the package raises an error. There is no fallback report. That was a deliberate design decision."
      },
      { type: "h2", text: "No Fallback Reports" },
      {
        type: "p",
        text: "I did not want the application to silently replace a failed AI design with a basic table."
      },
      {
        type: "p",
        text: "That would be misleading."
      },
      {
        type: "p",
        text: "The rule is simple: If the AI generates a valid report, show it. If the AI fails, show the real error. If the AI returns unsafe HTML, block it. Do not fake a report."
      },
      {
        type: "p",
        text: "This makes testing honest. It also makes it very clear what the AI provider can and cannot do."
      },
      { type: "h2", text: "The AI Prompt Strategy" },
      {
        type: "p",
        text: "The package asks the model to return raw HTML only."
      },
      {
        type: "p",
        text: "Not JSON. Not markdown. Not a code block."
      },
      {
        type: "p",
        text: "The output must start with: <div id=\"ai-doc-report\"> and it must include one <style> tag inside that root element."
      },
      {
        type: "p",
        text: "The system instruction tells the model to act as a visual report designer, not as a table exporter. The model is asked to create:"
      },
      {
        type: "ul",
        items: [
          "A premium cover/header",
          "Executive summary",
          "KPI cards",
          "Grouped sections",
          "CSS-only charts or visual bars",
          "Clean detail sections",
          "Print-friendly A4 layout"
        ]
      },
      {
        type: "p",
        text: "The AI is also told: Do not invent values. Use only the provided data. Do not output a flat table unless the dataset truly has no better structure."
      },
      { type: "h2", text: "Building the APEX Page" },
      {
        type: "p",
        text: "Create a new APEX page (Page 40: AI Document Designer). The page needs: AI Settings region, SQL/report request region, Progress and preview region, Generate button, Download PDF button, AJAX callbacks, JavaScript controller."
      },
      { type: "h2", text: "Page Items" },
      {
        type: "ul",
        items: [
          "AI Provider (P40_AI_PROVIDER): Select List (Groq, OpenAI, Anthropic, Google Gemini).",
          "AI Model (P40_AI_MODEL): Text Field with example defaults.",
          "API Key (P40_AI_API_KEY): Password (not saved in a table).",
          "SQL Query (P40_SQL_QUERY): Textarea.",
          "Report Request (P40_QUESTION): Textarea.",
          "Max Rows (P40_MAX_ROWS): Number Field (Default 50)."
        ]
      },
      { type: "h2", text: "Progress and Preview Region" },
      {
        type: "code",
        language: "html",
        code: `<div id="aiDocProgressBox" style="display:none; margin:16px 0; padding:16px; border:1px solid #dbeafe; border-radius:14px; background:#eff6ff; font-family:Inter,Arial,sans-serif;">\n  <div style="display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:10px;">\n    <strong id="aiDocProgressTitle" style="color:#0f172a;">Preparing report...</strong>\n    <span id="aiDocProgressPercent" style="color:#1d4ed8; font-weight:700;">0%</span>\n  </div>\n  <div style="height:12px; background:#dbeafe; border-radius:999px; overflow:hidden;">\n    <div id="aiDocProgressBar" style="height:12px; width:0%; background:linear-gradient(90deg,#2563eb,#16a34a); border-radius:999px; transition:width .35s ease;"></div>\n  </div>\n  <div id="aiDocProgressMessage" style="margin-top:10px; color:#334155; font-size:13px;">Waiting...</div>\n</div>\n<div id="aiDocPreview"></div>`
      },
      { type: "h2", text: "Progress CSS" },
      {
        type: "code",
        language: "css",
        code: `#aiDocProgressBox.is-indeterminate #aiDocProgressBar {\n    width: 35%;\n    animation: aiDocIndeterminate 1.2s ease-in-out infinite;\n}\n\n@keyframes aiDocIndeterminate {\n    0% { margin-left: -35%; }\n    50% { margin-left: 45%; }\n    100% { margin-left: 100%; }\n}`
      },
      { type: "h2", text: "AJAX Callbacks" },
      {
        type: "p",
        text: "AI_DOC_PRECHECK validates SQL and extracts metadata. AI_DOC_GENERATE_HTML calls the AI provider and returns the HTML report."
      },
      {
        type: "code",
        language: "sql",
        code: `declare\n    l_html clob;\nbegin\n    l_html := ai_doc_designer_pkg.generate_report_html(\n        p_sql       => :P40_SQL_QUERY,\n        p_question  => :P40_QUESTION,\n        p_max_rows  => nvl(to_number(:P40_MAX_ROWS), 50),\n        p_provider  => apex_application.g_x01,\n        p_model     => apex_application.g_x02,\n        p_api_key   => apex_application.g_x03\n    );\n    print_clob(l_html);\nend;`
      },
      { type: "h2", text: "JavaScript Controller" },
      {
        type: "p",
        text: "The JavaScript controller handles the flow: Reading settings, calling precheck, calling generate, and managing the UI states."
      },
      { type: "h2", text: "PDF Export" },
      {
        type: "p",
        text: "Uses html2canvas and jsPDF. Creates a temporary clone to safely render CSS gradients before conversion."
      },
      { type: "h2", text: "Example Prompt" },
      {
        type: "p",
        text: "A strong prompt produced a designed document: 'Create a premium board-level workforce and department PDF report from this data. Design the report as a polished HR and organization structure report grouped by department. Use KPI cards, CSS-only visual salary bars, and job badges.'"
      },
      { type: "h2", text: "What Worked Well" },
      {
        type: "p",
        text: "The best part of the prototype is that the report is not locked into one renderer. The AI can create a layout based on the actual data. That is much closer to a real business document than a normal table export."
      },
      { type: "h2", text: "What Still Needs Improvement" },
      {
        type: "ul",
        items: [
          "Server-side PDF export (Chromium)",
          "Better HTML sanitization",
          "Saved report designs & history",
          "More provider testing",
          "Better handling for very large datasets",
          "APEX plug-in packaging",
          "Optional encrypted API key storage"
        ]
      },
      { type: "h2", text: "Final Result" },
      {
        type: "p",
        text: "This experiment shows that Oracle APEX can be more than a place to build forms and reports. It can also become a workspace where users generate designed business documents from live data. The user stays inside APEX, uses their own query, chooses their AI provider, and gets a designed report from their database. That is the real value of this prototype."
      }
    ]
  },
];
