import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import { CodeBlock } from "../../../components/blog/CodeBlock";
import { AUTHORS } from "@/data/blog";

export const metadata = {
  title: "Building an AI-Powered PDF Report Designer in Oracle APEX",
  description:
    "A practical, step-by-step technical walkthrough for building an Oracle APEX prototype that generates AI-designed PDF reports from SQL queries.",
  alternates: {
    canonical: "https://apexexperts.net/blog/building-ai-powered-pdf-report-designer-oracle-apex",
  },
  openGraph: {
    title: "Building an AI-Powered PDF Report Designer in Oracle APEX",
    description:
      "How we built an Oracle APEX prototype that turns SQL queries and natural language requests into AI-designed PDF reports.",
    url: "https://apexexperts.net/blog/building-ai-powered-pdf-report-designer-oracle-apex",
    siteName: "APEX Experts AI Solutions",
    images: [
      {
        url: "https://apexexperts.net/images/apex-smart-docs.png",
        width: 1200,
        height: 630,
        alt: "AI PDF Designer in Oracle APEX",
      },
    ],
    type: "article",
    publishedTime: "2026-04-26T21:24:00Z",
    authors: ["Ahmed Alsaied"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building an AI-Powered PDF Report Designer in Oracle APEX",
    description: "How we built an Oracle APEX prototype that turns SQL queries into AI-designed PDF reports.",
    images: ["https://apexexperts.net/images/apex-smart-docs.png"],
  },
};

const demoLink = "https://oracleapex.com/ords/r/ai/apex-smartdocs/ai-document-designer";
const exportedAppLink = "/blog/f120879.sql";
const packageSourceLink = "/blog/AI_DOC_DESIGNER_PKG.sql";
const javascriptSourceLink = "#";

const demoCredentials = `Demo Login

URL: https://oracleapex.com/ords/r/ai/apex-smartdocs/ai-document-designer
Username: demo
Password: Demo@_123`;

const resultImages = [
  {
    src: "/blog/result1.png",
    alt: "AI-designed Oracle APEX PDF report result preview - first page",
    caption: "Generated report preview from the Oracle APEX AI document designer.",
  },
  {
    src: "/blog/result2.png",
    alt: "AI-designed Oracle APEX PDF report result preview - second page",
    caption: "A second generated result showing the report layout and visual sections.",
  },
];

const architectureFlow = [
  "User writes SQL and report request",
  "APEX validates the SQL",
  "Package extracts column metadata",
  "Package reads a limited row sample",
  "Provider-specific AI request is sent",
  "AI returns printable HTML and CSS",
  "APEX renders the generated document",
  "Browser exports the report to PDF",
];

const pageItems = [
  {
    name: "P40_AI_PROVIDER",
    type: "Select List",
    settings: "Static LOV: Groq;GROQ, OpenAI;OPENAI, Anthropic;ANTHROPIC, Google Gemini;GOOGLE",
    purpose: "The user chooses the provider. The backend decides the endpoint and payload shape.",
  },
  {
    name: "P40_AI_MODEL",
    type: "Text Field",
    settings: "Example: openai/gpt-oss-120b, gpt-4.1, claude-sonnet-4-5, gemini-2.5-flash",
    purpose: "The user can test different models without changing the package.",
  },
  {
    name: "P40_AI_API_KEY",
    type: "Password",
    settings: "Do not save this value in a table for the prototype flow.",
    purpose: "The key is sent only with the AJAX generation request.",
  },
  {
    name: "P40_SQL_QUERY",
    type: "Textarea",
    settings: "Use a large textarea. Disable automatic submit behavior.",
    purpose: "The SELECT query that returns the report data.",
  },
  {
    name: "P40_QUESTION",
    type: "Textarea",
    settings: "Use a large textarea so users can describe layout, grouping, and report style.",
    purpose: "The natural-language instruction for the AI report designer.",
  },
  {
    name: "P40_MAX_ROWS",
    type: "Number Field",
    settings: "Default: 50. Keep the value controlled for demos.",
    purpose: "Limits the amount of data sent to the AI provider.",
  },
];

const packageFunctions = [
  {
    name: "describe_query_json",
    explanation:
      "This function validates the query and describes the result columns with DBMS_SQL. It gives the AI column names, order, data types, precision, and scale before any report design happens.",
  },
  {
    name: "query_data_json",
    explanation:
      "This function runs the query with a row limit and converts the returned rows into compact JSON. The goal is to give the model enough data context without sending the entire dataset.",
  },
  {
    name: "validate_report_html",
    explanation:
      "This function checks the HTML returned by the AI before rendering it. It requires the root element id=\"ai-doc-report\" and blocks unsafe tags, event handlers, JavaScript URLs, and external resources.",
  },
  {
    name: "generate_report_html",
    explanation:
      "This is the main function. It validates the SQL, prepares metadata and sample data, builds the prompt, sends the request to the selected provider, extracts the provider response, validates the HTML, and returns the final report.",
  },
];

const providers = [
  {
    provider: "Groq",
    endpoint: "https://api.groq.com/openai/v1/chat/completions",
    auth: "Authorization: Bearer <API_KEY>",
    response: "choices[].message.content",
    payload: "OpenAI-compatible chat completions payload",
  },
  {
    provider: "OpenAI",
    endpoint: "https://api.openai.com/v1/chat/completions",
    auth: "Authorization: Bearer <API_KEY>",
    response: "choices[].message.content",
    payload: "Chat completions payload",
  },
  {
    provider: "Anthropic",
    endpoint: "https://api.anthropic.com/v1/messages",
    auth: "x-api-key + anthropic-version",
    response: "content[].text",
    payload: "Messages API payload",
  },
  {
    provider: "Google Gemini",
    endpoint: "https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent",
    auth: "x-goog-api-key",
    response: "candidates[].content.parts[].text",
    payload: "generateContent payload",
  },
];

const sampleQuery = `select
    d.deptno,
    d.dname,
    d.loc,
    e.empno,
    e.ename,
    e.job,
    e.mgr,
    e.hiredate,
    e.sal,
    e.comm
from dept d
left join emp e
    on e.deptno = d.deptno
order by
    d.deptno,
    e.job,
    e.sal desc nulls last,
    e.ename`;

const samplePrompt = `Create a premium board-level workforce and department PDF report from this data.

This report must combine departments and employees into one executive document. Do not create a flat database table.

Design the report as a polished HR and organization structure report grouped by department.

Mandatory structure:
1. Premium executive cover/header.
2. Executive summary based only on the provided data.
3. KPI cards for total departments, total employees, total salary, average salary, and number of jobs.
4. Department sections grouped by DNAME.
5. Each department section must show department name, department number, location, employee count, total salary, average salary, and jobs represented in that department.
6. Under each department, show employee details including employee name, job, hire date, manager number, salary, and commission if available.
7. Add CSS-only visual salary bars comparing departments.
8. Add CSS-only job distribution or job badges inside each department.
9. Use cards, badges, visual hierarchy, spacing, section dividers, and strong colors.
10. Make it A4 print-ready and suitable for PDF export.

Important rules:
- Use only the provided data.
- Do not invent values.
- Do not output a simple flat table.
- Do not group by JOB first. The primary grouping must be by department.
- If a department has no employees, still show the department section and clearly indicate that no employees are assigned.
- Make the final result look like a professionally designed board-level HR report, not a SQL query export.`;

const progressRegionHtml = `<div id="aiDocProgressBox" style="display:none; margin:16px 0; padding:16px; border:1px solid #dbeafe; border-radius:14px; background:#eff6ff; font-family:Inter,Arial,sans-serif;">
  <div style="display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:10px;">
    <strong id="aiDocProgressTitle" style="color:#0f172a;">Preparing report...</strong>
    <span id="aiDocProgressPercent" style="color:#1d4ed8; font-weight:700;">0%</span>
  </div>

  <div style="height:12px; background:#dbeafe; border-radius:999px; overflow:hidden;">
    <div id="aiDocProgressBar" style="height:12px; width:0%; background:linear-gradient(90deg,#2563eb,#16a34a); border-radius:999px; transition:width .35s ease;"></div>
  </div>

  <div id="aiDocProgressMessage" style="margin-top:10px; color:#334155; font-size:13px;">Waiting...</div>
</div>

<div id="aiDocPreview"></div>`;

const progressCss = `#aiDocProgressBox.is-indeterminate #aiDocProgressBar {
    width: 35%;
    animation: aiDocIndeterminate 1.2s ease-in-out infinite;
}

@keyframes aiDocIndeterminate {
    0% { margin-left: -35%; }
    50% { margin-left: 45%; }
    100% { margin-left: 100%; }
}`;

const packageInterface = `function describe_query_json(p_sql in clob) return clob;

function query_data_json(
    p_sql in clob,
    p_max_rows in number default 200
) return clob;

function validate_report_html(p_html in clob) return varchar2;

function generate_report_html(
    p_sql in clob,
    p_question in varchar2,
    p_max_rows in number default 200,
    p_provider in varchar2 default 'GROQ',
    p_model in varchar2 default null,
    p_api_key in varchar2 default null
) return clob;`;

const precheckCallback = `declare
    l_metadata clob;
    l_sample   clob;
    l_json     clob;

    procedure print_clob(
        p_clob in clob
    ) is
        l_pos   number := 1;
        l_len   number;
        l_chunk varchar2(32767);
    begin
        if p_clob is null then
            return;
        end if;

        l_len := dbms_lob.getlength(p_clob);

        while l_pos <= l_len loop
            l_chunk := dbms_lob.substr(p_clob, 32767, l_pos);
            htp.prn(l_chunk);
            l_pos := l_pos + 32767;
        end loop;
    end;
begin
    l_metadata := ai_doc_designer_pkg.describe_query_json(
        p_sql => :P40_SQL_QUERY
    );

    l_sample := ai_doc_designer_pkg.query_data_json(
        p_sql      => :P40_SQL_QUERY,
        p_max_rows => 5
    );

    apex_json.initialize_clob_output;
    apex_json.open_object;
    apex_json.write('success', true);
    apex_json.write('message', 'SQL validated and sample data prepared.');
    apex_json.close_object;

    l_json := apex_json.get_clob_output;
    apex_json.free_output;

    print_clob(l_json);
exception
    when others then
        apex_json.initialize_clob_output;
        apex_json.open_object;
        apex_json.write('success', false);
        apex_json.write('error', sqlerrm);
        apex_json.close_object;

        l_json := apex_json.get_clob_output;
        apex_json.free_output;

        print_clob(l_json);
end;`;

const generateCallback = `declare
    l_html clob;

    procedure print_clob(
        p_clob in clob
    ) is
        l_pos   number := 1;
        l_len   number;
        l_chunk varchar2(32767);
    begin
        if p_clob is null then
            return;
        end if;

        l_len := dbms_lob.getlength(p_clob);

        while l_pos <= l_len loop
            l_chunk := dbms_lob.substr(p_clob, 32767, l_pos);
            htp.prn(l_chunk);
            l_pos := l_pos + 32767;
        end loop;
    end;
begin
    l_html := ai_doc_designer_pkg.generate_report_html(
        p_sql       => :P40_SQL_QUERY,
        p_question  => :P40_QUESTION,
        p_max_rows  => nvl(to_number(:P40_MAX_ROWS), 50),
        p_provider  => apex_application.g_x01,
        p_model     => apex_application.g_x02,
        p_api_key   => apex_application.g_x03
    );

    print_clob(l_html);
end;`;

const pdfLibraries = `https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js
https://cdnjs.cloudflare.com/ajax/libs/jspdf/3.0.3/jspdf.umd.min.js`;

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="text-xl font-bold text-white uppercase mt-12 mb-4 tracking-tight flex items-center gap-3">
      <span className="text-sinai-glow-orange/30 font-mono text-sm">{number}</span>
      {title}
    </h2>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-sinai-glow-orange bg-white/5 px-1.5 py-0.5 rounded font-mono text-xs">
      {children}
    </code>
  );
}

function ArchitectureFlow() {
  return (
    <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5 md:p-6">
      <div className="space-y-3">
        {architectureFlow.map((step, index) => (
          <div key={step}>
            <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-zinc-950/60 px-4 py-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sinai-glow-orange/10 text-[10px] font-mono font-bold text-sinai-glow-orange">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="text-sm leading-6 text-zinc-300">{step}</div>
            </div>
            {index < architectureFlow.length - 1 ? (
              <div className="ml-[26px] h-5 w-px bg-white/10" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function PageItemsTable() {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/10">
      <div className="grid grid-cols-[1.1fr_0.8fr_1.8fr_2fr] border-b border-white/10 bg-white/[0.04] text-[10px] font-mono uppercase tracking-widest text-zinc-500 max-md:hidden">
        <div className="px-4 py-3">Item</div>
        <div className="px-4 py-3">Type</div>
        <div className="px-4 py-3">Setup</div>
        <div className="px-4 py-3">Why it exists</div>
      </div>
      {pageItems.map((item) => (
        <div key={item.name} className="grid grid-cols-[1.1fr_0.8fr_1.8fr_2fr] border-b border-white/5 last:border-b-0 max-md:block">
          <div className="px-4 py-4 font-mono text-xs text-sinai-glow-orange">{item.name}</div>
          <div className="px-4 py-4 text-sm text-zinc-300">{item.type}</div>
          <div className="px-4 py-4 text-sm leading-6 text-zinc-400">{item.settings}</div>
          <div className="px-4 py-4 text-sm leading-6 text-zinc-400">{item.purpose}</div>
        </div>
      ))}
    </div>
  );
}

function FunctionList() {
  return (
    <div className="my-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.02]">
      {packageFunctions.map((fn) => (
        <div key={fn.name} className="grid grid-cols-[220px_1fr] gap-4 px-5 py-5 max-md:block">
          <div className="font-mono text-xs text-sinai-glow-orange max-md:mb-2">{fn.name}</div>
          <p className="text-sm leading-7 text-zinc-400">{fn.explanation}</p>
        </div>
      ))}
    </div>
  );
}

function ProvidersTable() {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/10">
      <div className="grid grid-cols-[0.8fr_1.6fr_1.1fr_1.1fr_1.1fr] border-b border-white/10 bg-white/[0.04] text-[10px] font-mono uppercase tracking-widest text-zinc-500 max-lg:hidden">
        <div className="px-4 py-3">Provider</div>
        <div className="px-4 py-3">Endpoint</div>
        <div className="px-4 py-3">Auth</div>
        <div className="px-4 py-3">Payload</div>
        <div className="px-4 py-3">Response text</div>
      </div>
      {providers.map((provider) => (
        <div key={provider.provider} className="grid grid-cols-[0.8fr_1.6fr_1.1fr_1.1fr_1.1fr] border-b border-white/5 last:border-b-0 max-lg:block">
          <div className="px-4 py-4 text-sm font-bold uppercase text-white">{provider.provider}</div>
          <div className="break-all px-4 py-4 font-mono text-[10px] leading-5 text-zinc-500">{provider.endpoint}</div>
          <div className="px-4 py-4 font-mono text-[10px] leading-5 text-sinai-glow-orange/80">{provider.auth}</div>
          <div className="px-4 py-4 text-sm leading-6 text-zinc-400">{provider.payload}</div>
          <div className="px-4 py-4 font-mono text-[10px] leading-5 text-zinc-500">{provider.response}</div>
        </div>
      ))}
    </div>
  );
}

function InstructionSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="my-6 space-y-3">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
          <span className="font-mono text-xs text-sinai-glow-orange">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-sm leading-6 text-zinc-400">{step}</span>
        </li>
      ))}
    </ol>
  );
}

function ResultGallery() {
  return (
    <div className="my-8 space-y-8">
      {resultImages.map((image, index) => (
        <figure key={image.src} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70">
          <div className="border-b border-white/5 bg-white/[0.03] px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <figcaption className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                Result preview {String(index + 1).padStart(2, "0")}
              </figcaption>
              <span className="rounded-full border border-sinai-glow-orange/20 bg-sinai-glow-orange/10 px-2 py-1 text-[9px] font-mono uppercase tracking-widest text-sinai-glow-orange">
                AI output
              </span>
            </div>
          </div>
          <div className="relative aspect-[16/10] bg-[#05070a]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-contain"
            />
          </div>
          <div className="border-t border-white/5 px-4 py-3 text-xs leading-6 text-zinc-500">
            {image.caption}
          </div>
        </figure>
      ))}
    </div>
  );
}

export default function AIReportDesignerPage() {
  return (
    <article className="min-h-screen bg-[#06080a] text-zinc-300 pt-32 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between mb-12">
          <Link
            href="/blog"
            className="group flex items-center gap-3 text-[10px] font-mono tracking-widest text-zinc-500 hover:text-white transition-colors uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            Archive
          </Link>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-500 hover:text-white transition-all" aria-label="Share article">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-500 hover:text-white transition-all" aria-label="Bookmark article">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>

        <header className="max-w-4xl mx-auto mb-12">
          <div className="flex gap-3 mb-6 flex-wrap">
            {["ORACLE APEX", "AI REPORTING", "PDF AUTOMATION"].map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-sinai-glow-orange/10 border border-sinai-glow-orange/20 text-sinai-glow-orange text-[9px] font-mono font-bold tracking-widest uppercase"
              >
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6 tracking-tighter uppercase">
            Building an AI-Powered PDF Report Designer in Oracle APEX
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            A practical step-by-step walkthrough of how we built an Oracle APEX prototype that turns a SQL query and a plain English request into an AI-designed PDF report.
          </p>
          <div className="flex items-center gap-6 py-6 border-y border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10">
                <Image src={AUTHORS.ahmed.image} alt={AUTHORS.ahmed.name} fill className="object-cover" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase">{AUTHORS.ahmed.name}</div>
                <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">{AUTHORS.ahmed.role}</div>
              </div>
            </div>
            <div className="h-8 w-px bg-white/5" />
            <div>
              <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mb-0.5">Date</div>
              <div className="text-xs font-bold text-white uppercase">April 26, 2026</div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto mb-12 relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-950">
          <Image src="/images/apex-smart-docs.png" alt="AI PDF Designer in Oracle APEX" fill className="object-contain" priority />
        </div>

        <div className="max-w-4xl mx-auto space-y-0 text-base leading-snug">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 mb-8 italic text-zinc-400">
            The idea was not to build another table export. The idea was to let the user stay inside Oracle APEX, write a query, describe the document they want, and let AI design the report from the live data.
          </div>

          <p className="mb-4">
            Oracle APEX is already excellent for building data applications quickly. Forms, dashboards, workflows, and interactive reports can be built faster than with most traditional stacks.
          </p>
          <p className="mb-4">
            But there is one task where users still leave the application: creating polished, management-ready PDF reports. They export data, format it in Excel, copy screenshots into PowerPoint, or paste sensitive data into an external AI chat tool just to make the output look presentable.
          </p>
          <p className="mb-4">
            This prototype was built to test a different workflow: keep the user inside APEX, keep the data close to the database, and use AI only to design the final report document.
          </p>

          <SectionTitle number="01" title="What we wanted to build" />
          <p className="mb-4">
            The target flow is simple. The user writes a SQL query, writes a report request in English, selects an AI provider, and clicks generate. APEX validates the query, sends a compact data context to the provider, receives printable HTML and CSS, renders the result, and lets the user download it as a PDF.
          </p>
          <ArchitectureFlow />
          <p className="mb-4">
            The important part is that the report is not drawn by a fixed renderer. The AI is asked to design the document based on the user request and the shape of the data.
          </p>

          <SectionTitle number="02" title="Step 1: create the APEX page" />
          <p className="mb-4">
            Create a new blank page in Oracle APEX. In this prototype, I used page 40 and named it <InlineCode>AI Document Designer</InlineCode>.
          </p>
          <p className="mb-4">Build the page in this order:</p>
          <InstructionSteps steps={[
            "Create a blank page or a normal page with no report region generated by the wizard.",
            "Add an AI Settings region for provider, model, and API key.",
            "Add a Report Request region for the SQL query, the natural-language prompt, and max rows.",
            "Add a Static Content region for progress and preview.",
            "Add the Generate and Download PDF buttons.",
            "Add the AJAX callbacks under Processing.",
            "Add the JavaScript controller to Page JavaScript > Execute when Page Loads.",
          ]} />

          <SectionTitle number="03" title="Step 2: add the page items" />
          <p className="mb-4">
            These are normal APEX page items. They are shown as a setup table here because the important details are the item name, item type, and where the value is used.
          </p>
          <PageItemsTable />
          <p className="mb-4">
            For <InlineCode>P40_AI_PROVIDER</InlineCode>, use this static LOV:
          </p>
          <CodeBlock language="text" title="P40_AI_PROVIDER static LOV">{`Groq;GROQ
OpenAI;OPENAI
Anthropic;ANTHROPIC
Google Gemini;GOOGLE`}</CodeBlock>

          <SectionTitle number="04" title="Step 3: install the PL/SQL package" />
          <p className="mb-4">
            The backend package is the real engine of the prototype. It validates the SQL, extracts metadata, reads a limited row sample, builds the provider-specific payload, sends the request, extracts the response, validates the HTML, and returns it to the page.
          </p>
          <p className="mb-4">
            Install the package before you create the AJAX callbacks, because both callbacks call <InlineCode>AI_DOC_DESIGNER_PKG</InlineCode>.
          </p>
          <p className="mb-6">
            Download the full package source here:{" "}
            <a href={packageSourceLink} download className="text-sinai-glow-orange underline decoration-sinai-glow-orange/40 underline-offset-4 hover:text-white">
              AI_DOC_DESIGNER_PKG package source
            </a>
          </p>
          <CodeBlock language="sql" title="AI_DOC_DESIGNER_PKG public interface">{packageInterface}</CodeBlock>
          <p className="mb-4">The package has four public functions:</p>
          <FunctionList />

          <SectionTitle number="05" title="Step 4: support the four AI providers" />
          <p className="mb-4">
            This part belongs in the package, not in the browser. The browser should not know how every provider builds its payload. It should only send the selected provider, the model, and the API key.
          </p>
          <p className="mb-4">
            The package then chooses the endpoint, headers, request body, and response path.
          </p>
          <ProvidersTable />
          <p className="mb-4">
            This is also why I removed the custom endpoint idea from the prototype. Custom endpoints sound flexible, but they quickly turn into a support problem because every provider behaves slightly differently.
          </p>

          <SectionTitle number="06" title="Step 5: create the progress and preview region" />
          <p className="mb-4">
            Add a Static Content region to the page. This region holds the progress box and the preview container where the AI-generated report will be injected.
          </p>
          <p className="mb-4">
            Put the following HTML inside the Static Content region source:
          </p>
          <CodeBlock language="html" title="Static Content region HTML">{progressRegionHtml}</CodeBlock>
          <p className="mb-4">
            Then add the progress animation CSS in <InlineCode>Page Designer → Page → CSS → Inline</InlineCode>. This location matters; if you put it in the wrong place, the indeterminate animation will not run.
          </p>
          <CodeBlock language="css" title="Page CSS Inline">{progressCss}</CodeBlock>
          <p className="mb-4">
            The progress bar is intentionally honest. During the actual AI call, the browser does not know if the provider is 40% or 70% done. So the bar switches to an indeterminate state instead of showing a fake percentage.
          </p>

          <SectionTitle number="07" title="Step 6: add the buttons" />
          <p className="mb-4">
            Add two APEX buttons. This is configuration, not code. The important part is the button name, static ID, and action.
          </p>
          <InstructionSteps steps={[
            "Create a button named GENERATE_AI_DOCUMENT.",
            "Set its Static ID to GENERATE_AI_DOCUMENT.",
            "Set Action to Defined by Dynamic Action, but do not create an APEX Dynamic Action for it.",
            "Create another button named DOWNLOAD_PDF.",
            "Set its Static ID to DOWNLOAD_PDF.",
            "Set Action to Defined by Dynamic Action, but let the JavaScript controller handle the click.",
          ]} />
          <p className="mb-4">
            The reason is simple: the page uses one JavaScript controller instead of APEX Dynamic Actions. That kept the flow easier to control and avoided runtime issues with generated dynamic action code.
          </p>

          <SectionTitle number="08" title="Step 7: create the AJAX callbacks" />
          <p className="mb-4">
            Create both callbacks under <InlineCode>Page Designer → Processing → Ajax Callback</InlineCode>.
          </p>
          <InstructionSteps steps={[
            "Create the first AJAX Callback and name it AI_DOC_PRECHECK.",
            "Paste the precheck PL/SQL code below.",
            "Create the second AJAX Callback and name it AI_DOC_GENERATE_HTML.",
            "Paste the generation PL/SQL code below.",
            "Make sure both callbacks are on the same APEX page as the JavaScript controller.",
          ]} />
          <p className="mb-4">
            <InlineCode>AI_DOC_PRECHECK</InlineCode> validates the query and confirms that metadata and a sample can be prepared. It does not call the AI provider.
          </p>
          <CodeBlock language="plsql" title="AI_DOC_PRECHECK AJAX callback">{precheckCallback}</CodeBlock>
          <p className="mb-4">
            <InlineCode>AI_DOC_GENERATE_HTML</InlineCode> calls the package, passes the provider settings from <InlineCode>x01</InlineCode>, <InlineCode>x02</InlineCode>, and <InlineCode>x03</InlineCode>, and returns the generated HTML to the browser.
          </p>
          <CodeBlock language="plsql" title="AI_DOC_GENERATE_HTML AJAX callback">{generateCallback}</CodeBlock>

          <SectionTitle number="09" title="Step 8: add the JavaScript controller" />
          <p className="mb-4">
            Add the JavaScript controller in <InlineCode>Page Designer → Page → JavaScript → Execute when Page Loads</InlineCode>. The controller reads the AI settings, calls the two callbacks, updates the progress UI, injects the returned HTML into <InlineCode>#aiDocPreview</InlineCode>, and handles the PDF download button.
          </p>
          <p className="mb-4">
            Download the full JavaScript controller here:{" "}
            <a href={javascriptSourceLink} download className="text-sinai-glow-orange underline decoration-sinai-glow-orange/40 underline-offset-4 hover:text-white">
              JavaScript controller source
            </a>
          </p>
          <div className="my-6 rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <ol className="space-y-3 text-sm leading-6 text-zinc-400">
              <li><span className="font-mono text-sinai-glow-orange">01</span> Read <InlineCode>P40_AI_PROVIDER</InlineCode>, <InlineCode>P40_AI_MODEL</InlineCode>, and <InlineCode>P40_AI_API_KEY</InlineCode>.</li>
              <li><span className="font-mono text-sinai-glow-orange">02</span> Call <InlineCode>AI_DOC_PRECHECK</InlineCode> with the SQL query, question, and max rows.</li>
              <li><span className="font-mono text-sinai-glow-orange">03</span> If precheck succeeds, switch the progress bar to indeterminate mode.</li>
              <li><span className="font-mono text-sinai-glow-orange">04</span> Call <InlineCode>AI_DOC_GENERATE_HTML</InlineCode> with provider, model, and API key as AJAX parameters.</li>
              <li><span className="font-mono text-sinai-glow-orange">05</span> Insert the generated HTML into <InlineCode>#aiDocPreview</InlineCode>.</li>
              <li><span className="font-mono text-sinai-glow-orange">06</span> Export <InlineCode>#ai-doc-report</InlineCode> to PDF when the user clicks Download PDF.</li>
            </ol>
          </div>
          <p className="mb-4">
            The API key is not submitted as a normal stored page setting. It is sent as <InlineCode>x03</InlineCode> during the AJAX request.
          </p>

          <SectionTitle number="10" title="Step 9: export the generated report to PDF" />
          <p className="mb-4">
            The prototype uses <InlineCode>html2canvas</InlineCode> and <InlineCode>jsPDF</InlineCode> for browser-side PDF export. Add these libraries in <InlineCode>Page Designer → Page → JavaScript → File URLs</InlineCode>.
          </p>
          <CodeBlock language="text" title="Page JavaScript File URLs">{pdfLibraries}</CodeBlock>
          <p className="mb-4">
            One important lesson: some AI-generated CSS can look perfect in the browser but break canvas rendering. Complex gradients are a good example. To avoid changing the visible report, the export function creates a temporary clone, cleans only the canvas-breaking styles from that clone, and then exports it.
          </p>

          <SectionTitle number="11" title="Step 10: test it with EMP and DEPT" />
          <p className="mb-4">
            This query is a good test because it contains departments, employees, jobs, salary, hire dates, and locations. That gives the AI enough structure to produce a real document instead of a flat table.
          </p>
          <CodeBlock language="sql" title="Sample SQL query">{sampleQuery}</CodeBlock>
          <p className="mb-4">Use this report request for a strong result:</p>
          <CodeBlock language="markdown" title="Sample report prompt">{samplePrompt}</CodeBlock>

          <SectionTitle number="12" title="Result screenshots" />
          <p className="mb-4">
            These screenshots show the type of result the prototype produced from the APEX page. The report is not a normal database export; it is a designed document generated from the SQL result and the user prompt.
          </p>
          <ResultGallery />

          <SectionTitle number="13" title="Try the live demo" />
          <p className="mb-4">
            The live demo is available on Oracle APEX. Use the credentials below to open the application and test the AI document designer page.
          </p>
          <div className="my-6 flex flex-wrap gap-4">
            <Link href={demoLink} target="_blank" rel="noreferrer" className="px-6 py-2 rounded-lg bg-sinai-glow-orange text-white text-xs font-bold uppercase tracking-widest hover:bg-sinai-glow-orange/80 transition-all">
              Open Live Demo
            </Link>
            <a href={exportedAppLink} download className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center">
              Download APEX App Export
            </a>
            <a href={packageSourceLink} download className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center">
              Download PL/SQL Package
            </a>
          </div>
          <CodeBlock language="text" title="Demo access credentials">{demoCredentials}</CodeBlock>

          <SectionTitle number="14" title="Why there is no fallback report" />
          <p className="mb-4">
            I deliberately avoided fallback reports. If the AI fails, the system should show the real failure. If the returned HTML is unsafe, it should be blocked. But the application should not silently replace a failed AI design with a plain table and pretend the generation worked.
          </p>
          <p className="mb-4 italic text-zinc-500 text-sm">
            The rule is simple: valid AI report or clear error. No fake rescue report.
          </p>

          <SectionTitle number="15" title="What worked well" />
          <p className="mb-4">
            The result was much better once the prompt became specific. Instead of asking for a generic report, the prompt asked for department grouping, KPI cards, salary summaries, job badges, visual bars, and an A4 print-ready layout.
          </p>
          <p className="mb-4">
            That is the difference between a slightly formatted table and a designed document.
          </p>

          <SectionTitle number="16" title="What should come next" />
          <p className="mb-4">
            This is still a prototype. The next serious improvements would be server-side PDF export, stronger HTML sanitization, saved report designs, report history, optional encrypted API key storage, and packaging the whole thing as an Oracle APEX plug-in.
          </p>

          <footer className="mt-20 pt-12 border-t border-white/5">
            <h2 className="text-xl font-bold text-white uppercase mb-6 tracking-tight">Final result</h2>
            <p className="text-zinc-400 mb-0 leading-snug">
              This experiment shows that Oracle APEX can be more than a place to build forms and dashboards. It can also become a workspace where users generate designed business documents from live data, without leaving their application.
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
}
