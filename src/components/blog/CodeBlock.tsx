"use client";

import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";

type CodeBlockProps = {
    children: string;
    language?: string;
    title?: string;
};

const languageColors: Record<string, string> = {
    sql: "text-sky-300",
    plsql: "text-emerald-300",
    javascript: "text-yellow-200",
    typescript: "text-blue-300",
    html: "text-orange-200",
    css: "text-fuchsia-300",
    markdown: "text-zinc-200",
    text: "text-zinc-200",
};

function highlightCode(code: string, language: string) {
    const escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    if (language === "sql" || language === "plsql") {
        return escaped
            .replace(
                /\b(select|from|where|left|join|on|order|by|desc|nulls|last|declare|begin|end|exception|when|then|return|function|procedure|is|in|out|clob|varchar2|number|default|create|or|replace|package|body|as)\b/gi,
                '<span class="text-sinai-glow-orange font-semibold">$1</span>'
            )
            .replace(/('[^']*')/g, '<span class="text-emerald-300">$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="text-sky-300">$1</span>');
    }

    if (language === "html") {
        return escaped
            .replace(/(&lt;\/?)([a-zA-Z0-9-]+)/g, '$1<span class="text-sinai-glow-orange font-semibold">$2</span>')
            .replace(/([a-zA-Z-]+)=/g, '<span class="text-sky-300">$1</span>=')
            .replace(/(&quot;[^&]*&quot;|"[^"]*")/g, '<span class="text-emerald-300">$1</span>');
    }

    if (language === "css") {
        return escaped
            .replace(/([.#]?[a-zA-Z0-9_-]+)(\s*\{)/g, '<span class="text-sinai-glow-orange font-semibold">$1</span>$2')
            .replace(/([a-zA-Z-]+)(\s*:)/g, '<span class="text-sky-300">$1</span>$2')
            .replace(/(#(?:[0-9a-fA-F]{3}){1,2}|rgba?\([^)]*\)|[0-9.]+(?:px|rem|em|%|s))/g, '<span class="text-emerald-300">$1</span>');
    }

    if (language === "javascript" || language === "typescript") {
        return escaped
            .replace(
                /\b(const|let|var|function|return|if|else|try|catch|finally|await|async|new|true|false|null|undefined)\b/g,
                '<span class="text-sinai-glow-orange font-semibold">$1</span>'
            )
            .replace(/('[^']*'|"[^"]*"|`[^`]*`)/g, '<span class="text-emerald-300">$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="text-sky-300">$1</span>');
    }

    return escaped;
}

export function CodeBlock({ children, language = "text", title }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const normalizedLanguage = language.toLowerCase();
    const languageColor = languageColors[normalizedLanguage] || "text-zinc-200";

    const highlightedCode = useMemo(
        () => highlightCode(children, normalizedLanguage),
        [children, normalizedLanguage]
    );

    async function copyCode() {
        try {
            await navigator.clipboard.writeText(children);
            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 1400);
        } catch {
            setCopied(false);
        }
    }

    return (
        <div className="my-6 overflow-hidden rounded-xl border border-white/10 bg-[#080a0d] shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                <div className="min-w-0">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                        <span className="h-2 w-2 rounded-full bg-sinai-glow-orange" />
                        <span className="truncate">{title || "Copy-ready code"}</span>
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                    <span className={`rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] font-mono uppercase tracking-widest ${languageColor}`}>
                        {language}
                    </span>

                    <button
                        type="button"
                        onClick={copyCode}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-zinc-300 transition hover:border-sinai-glow-orange/40 hover:bg-sinai-glow-orange/10 hover:text-white"
                        aria-label="Copy code"
                    >
                        {copied ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>
            </div>

            <div className="max-h-[520px] overflow-auto">
                <pre className="min-w-full whitespace-pre p-6 font-mono text-[12px] leading-7 text-zinc-200">
                    <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
                </pre>
            </div>
        </div>
    );
}