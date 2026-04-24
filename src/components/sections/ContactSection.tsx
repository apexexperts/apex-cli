import { CinematicGlobe } from "../Globe";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-32 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sinai-glow-orange/5 blur-[120px] pointer-events-none" />

      <div className="flex items-center gap-4 mb-20">
        <div className="h-px w-12 bg-gradient-to-r from-sinai-glow-orange to-transparent" />
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-sinai-glow-orange font-bold">
          06 // Contact
        </span>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Initialize <span className="opacity-40">Presence.</span>
          </h2>
          <p className="text-xl text-zinc-500 leading-relaxed max-w-lg">
            Strategically positioned to architect your AI future. From our central hub in Alexandria, we deploy elite systems globally.
          </p>

          <div className="space-y-6 pt-10">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-sinai-glow-orange group-hover:border-sinai-glow-orange/40 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Direct Channel</div>
                <div className="text-lg font-bold text-white">info@apexexperts.net</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-sinai-glow-orange group-hover:border-sinai-glow-orange/40 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Encrypted HQ</div>
                <div className="text-lg font-bold text-white">Alexandria, EGYPT</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group min-h-[500px] flex items-center justify-center">
          <CinematicGlobe />
        </div>
      </div>
    </section>
  );
}
