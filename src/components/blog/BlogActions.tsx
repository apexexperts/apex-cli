"use client";

import { useState } from "react";
import { Share2, Bookmark, Check, Link2 } from "lucide-react";

export function BlogActions({ title, url }: { title: string; url: string }) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isShared, setIsShared] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: title,
            text: "Check out this technical walkthrough from APEX Experts",
            url: url || window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareData.url);
                setIsShared(true);
                setTimeout(() => setIsShared(false), 2000);
            }
        } catch (err) {
            console.error("Error sharing:", err);
        }
    };

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={handleShare}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-500 hover:text-white hover:border-sinai-glow-orange/50 hover:bg-sinai-glow-orange/10 transition-all group relative"
                aria-label="Share article"
            >
                {isShared ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                    <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                )}
                {isShared && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded whitespace-nowrap">
                        Link Copied!
                    </span>
                )}
            </button>
            <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full border transition-all group ${
                    isBookmarked
                        ? "bg-sinai-glow-orange/20 border-sinai-glow-orange text-sinai-glow-orange shadow-[0_0_15px_rgba(255,102,0,0.2)]"
                        : "bg-white/5 border-white/10 text-zinc-500 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Bookmark article"
            >
                <Bookmark className={`w-4 h-4 group-hover:scale-110 transition-transform ${isBookmarked ? "fill-current" : ""}`} />
            </button>
        </div>
    );
}
