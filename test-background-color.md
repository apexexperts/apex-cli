import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";

function AmbientBackground({ reducedMotion }) {
  const scopeRef = useRef(null);
  const stars = useMemo(
    () =>
      Array.from({ length: 52 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.5,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 2,
      })),
    []
  );

  useEffect(() => {
    if (reducedMotion || !scopeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(".bg-blue-orb", {
        xPercent: 6,
        yPercent: -4,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".bg-orange-orb", {
        xPercent: -7,
        yPercent: 5,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".bg-soft-orb", {
        xPercent: 4,
        yPercent: 6,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div ref={scopeRef} className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#09070b]" />
      <div className="bg-blue-orb absolute left-[-8%] top-[-12%] h-[42vw] w-[42vw] rounded-full bg-[#5e73ff]/18 blur-[140px]" />
      <div className="bg-orange-orb absolute bottom-[-18%] right-[-10%] h-[46vw] w-[46vw] rounded-full bg-[#d86a2f]/24 blur-[150px]" />
      <div className="bg-soft-orb absolute left-[32%] top-[18%] h-[24vw] w-[24vw] rounded-full bg-[#f4b57b]/10 blur-[130px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(94,115,255,0.16),transparent_28%),radial-gradient(circle_at_80%_78%,rgba(216,106,47,0.22),transparent_34%),radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.05),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_16%,transparent_82%,rgba(0,0,0,0.42))]" />

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{ left: star.left, top: star.top, width: star.size, height: star.size, opacity: star.opacity }}
          animate={
            reducedMotion
              ? { opacity: star.opacity }
              : {
                  y: [0, -10, 0],
                  opacity: [star.opacity * 0.7, star.opacity, star.opacity * 0.7],
                }
          }
          transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function TypeLine({ text, active, delay = 0, speed = 0.018, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    element.textContent = "";

    if (!active) return;

    const timeline = gsap.timeline({ delay });
    text.split("").forEach((char, index) => {
      timeline.call(() => {
        element.textContent += char;
      }, null, index * speed);
    });

    return () => timeline.kill();
  }, [text, active, delay, speed]);

  return <span ref={ref} className={className} />;
}

function MouseCursor() {
  return (
    <svg viewBox="0 0 28 34" className="h-7 w-7 drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)]">
      <path d="M4 2l17 18-8 1 5 10-4 2-5-10-5 5V2z" fill="#ffffff" stroke="#0d0f15" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function AppIcon({ label, accent, children, active = false, innerRef }) {
  return (
    <div
      ref={innerRef}
      className={`relative flex h-14 w-14 items-center justify-center rounded-[18px] border text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] ${
        active ? "border-white/30 bg-white/[0.16]" : "border-white/14 bg-white/[0.08]"
      }`}
    >
      <div className="absolute inset-0 rounded-[18px] opacity-80" style={{ background: accent }} />
      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/15 bg-black/25 text-sm font-semibold backdrop-blur-md">
        {children}
      </div>
      <div className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-medium tracking-[0.16em] text-white/58 uppercase">
        {label}
      </div>
    </div>
  );
}

function DesktopFile({ label, x, y, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
      className="absolute flex flex-col items-center gap-2"
      style={{ left: x, top: y }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.07] text-lg backdrop-blur-md">✦</div>
      <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/72 backdrop-blur-md">
        {label}
      </div>
    </motion.div>
  );
}

function TerminalWindow({ stage, reducedMotion }) {
  const brandRef = useRef(null);
  const pathwaysRef = useRef([]);

  useEffect(() => {
    if (stage < 3 || reducedMotion) return;

    const targets = pathwaysRef.current.filter(Boolean);
    const tl = gsap.timeline();

    tl.fromTo(
      brandRef.current,
      { opacity: 0, y: 18, filter: "blur(12px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65, ease: "power3.out" }
    );

    if (stage >= 4 && targets.length) {
      tl.fromTo(
        targets,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "power3.out" },
        "-=0.08"
      );
    }

    return () => tl.kill();
  }, [stage, reducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.18, y: 170, filter: "blur(16px)" }}
      animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.92, y: 40 }}
      transition={{ duration: reducedMotion ? 0.18 : 0.95, ease: [0.18, 0.92, 0.2, 1] }}
      className="absolute left-1/2 top-[16%] z-30 w-[88%] max-w-[860px] -translate-x-1/2 overflow-hidden rounded-[26px] border border-white/14 bg-[#0d0d12]/84 shadow-[0_32px_120px_rgba(0,0,0,0.48)] backdrop-blur-2xl"
      style={{ transformOrigin: "50% 100%" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01))]" />
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:100%_4px]" />

      <div className="relative flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="text-[11px] uppercase tracking-[0.32em] text-white/58">APEX CLI</div>
        <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/48">narrative mode</div>
      </div>

      <div className="relative min-h-[420px] px-6 py-6 sm:px-8 sm:py-8">
        <div className="space-y-2 font-mono text-[12px] leading-6 text-[#e6ddd4]/78 sm:text-[13px]">
          <div>
            <span className="text-[#ff9e64]">[sys]</span>{" "}
            {stage >= 1 ? <TypeLine text="Mounting secure workstation context..." active={true} /> : null}
          </div>
          <div>
            <span className="text-[#84a6ff]">[ui]</span>{" "}
            {stage >= 1 ? <TypeLine text="Opening terminal shell from desktop dock..." active={true} delay={0.28} /> : null}
          </div>
          <div>
            <span className="text-[#7fe1b5]">[boot]</span>{" "}
            {stage >= 2 ? <TypeLine text="Loading APEX Experts AI Solutions identity..." active={true} delay={0.15} /> : null}
          </div>
          <div>
            <span className="text-[#f4bb7d]">[nav]</span>{" "}
            {stage >= 2 ? <TypeLine text="Preparing guided pathways for site exploration..." active={true} delay={0.42} /> : null}
          </div>
        </div>

        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: reducedMotion ? 0.15 : 0.55, ease: "easeOut" }}
              className="mt-10 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-7"
            >
              <div ref={brandRef} className="space-y-3">
                <div className="text-[11px] uppercase tracking-[0.38em] text-[#f0a35b]">brand reveal</div>
                <div className="font-mono text-[32px] font-semibold leading-tight text-[#f4ede5] sm:text-[50px] lg:text-[56px]">
                  APEX Experts
                </div>
                <div className="text-sm uppercase tracking-[0.42em] text-white/60 sm:text-base">AI Solutions</div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2 font-mono text-sm text-[#dcd3ca] sm:text-base">
                <span className="text-[#7fe1b5]">visitor@apex</span>
                <span className="text-white/35">→</span>
                <span className="text-[#84a6ff]">init</span>
                <span className="text-white/50">--show-pathways</span>
              </div>

              {stage >= 4 && (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["01", "About", "Who we are and how we think."],
                    ["02", "Services", "What we design, build, and ship."],
                    ["03", "Projects", "Selected work and delivery stories."],
                    ["04", "Contact", "Start the conversation."],
                  ].map(([id, title, description], index) => (
                    <div
                      key={title}
                      ref={(element) => {
                        pathwaysRef.current[index] = element;
                      }}
                      className="rounded-[18px] border border-white/10 bg-black/20 px-4 py-4"
                    >
                      <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#f0a35b]">{id}</div>
                      <div className="mt-2 text-lg font-medium text-white">{title}</div>
                      <div className="mt-1 text-sm text-white/58">{description}</div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function MacOSCliOpeningExample() {
  const reducedMotion = useReducedMotion();
  const cursorRef = useRef(null);
  const terminalIconRef = useRef(null);
  const sceneScopeRef = useRef(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalStage, setTerminalStage] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [clickPulse, setClickPulse] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setCursorVisible(true);
      setTerminalOpen(true);
      setTerminalStage(4);
      return undefined;
    }

    if (!sceneScopeRef.current || !cursorRef.current || !terminalIconRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.set(cursorRef.current, { left: "82%", top: "24%", opacity: 0, scale: 1, xPercent: -50, yPercent: -50 });

      const timeline = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      timeline
        .call(() => setCursorVisible(true), null, 0.35)
        .to(cursorRef.current, { opacity: 1, duration: 0.15 }, 0.35)
        .to(cursorRef.current, { left: "51%", top: "88.2%", duration: 1.25 }, 0.7)
        .to(terminalIconRef.current, { y: -8, scale: 1.14, duration: 0.2, ease: "power2.out" }, "<")
        .to(cursorRef.current, { scale: 0.82, duration: 0.08, ease: "power2.out" })
        .call(() => setClickPulse(true))
        .to(cursorRef.current, { scale: 1, duration: 0.12, ease: "power2.out" })
        .call(() => {
          setTerminalOpen(true);
          setTerminalStage(1);
        })
        .to(cursorRef.current, { left: "55%", top: "82%", duration: 0.35 })
        .to({}, { duration: 0.7 })
        .call(() => setTerminalStage(2))
        .to({}, { duration: 0.8 })
        .call(() => setTerminalStage(3))
        .to({}, { duration: 0.85 })
        .call(() => setTerminalStage(4));
    }, sceneScopeRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#09070b] text-white">
      <section className="relative min-h-screen px-4 py-8 sm:px-6 lg:px-10">
        <AmbientBackground reducedMotion={Boolean(reducedMotion)} />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1440px] flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.15 : 0.7, ease: "easeOut" }}
            className="mb-6 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/62 backdrop-blur-xl"
          >
            macOS desktop opening example
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reducedMotion ? 0.18 : 0.85, ease: [0.2, 0.9, 0.2, 1] }}
            className="relative mx-auto w-full max-w-[1180px]"
          >
            <div className="relative mx-auto w-full rounded-[30px] bg-[linear-gradient(180deg,#2c303b,#171b24)] p-3 shadow-[0_40px_160px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
              <div
                ref={sceneScopeRef}
                className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-white/10 bg-[#0d1118]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(96,120,255,0.18),transparent_30%),radial-gradient(circle_at_78%_78%,rgba(216,106,47,0.22),transparent_34%),linear-gradient(135deg,#0f1320_0%,#11151c_42%,#120d12_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_14%,transparent_84%,rgba(0,0,0,0.24))]" />

                <div className="absolute left-0 right-0 top-0 z-10 flex h-11 items-center justify-between border-b border-white/10 bg-black/18 px-4 text-[11px] text-white/72 backdrop-blur-xl sm:px-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-semibold text-white/88">Finder</span>
                    <span>File</span>
                    <span>Edit</span>
                    <span className="hidden sm:inline">View</span>
                    <span className="hidden sm:inline">Window</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/62">
                    <span className="hidden sm:inline">APEX Workstation</span>
                    <span>11:42</span>
                  </div>
                </div>

                <DesktopFile label="Brief" x="7%" y="18%" delay={0.2} />
                <DesktopFile label="Roadmap" x="14%" y="36%" delay={0.3} />
                <DesktopFile label="Brand Kit" x="79%" y="22%" delay={0.4} />

                <div className="absolute inset-x-0 bottom-[18px] z-20 flex justify-center">
                  <div className="relative rounded-[28px] border border-white/14 bg-white/[0.08] px-3 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-4">
                    <div className="flex items-end gap-3 sm:gap-4">
                      <AppIcon label="AI" accent="linear-gradient(180deg,rgba(116,148,255,0.38),rgba(116,148,255,0.1))">AI</AppIcon>
                      <AppIcon label="Design" accent="linear-gradient(180deg,rgba(221,104,92,0.34),rgba(221,104,92,0.08))">DG</AppIcon>
                      <div className="relative">
                        <AppIcon
                          label="Terminal"
                          accent="linear-gradient(180deg,rgba(96,255,183,0.34),rgba(96,255,183,0.08))"
                          active={true}
                          innerRef={terminalIconRef}
                        >
                          &gt;_
                        </AppIcon>
                        <AnimatePresence>
                          {clickPulse && (
                            <motion.div
                              initial={{ opacity: 0.55, scale: 0.6 }}
                              animate={{ opacity: 0, scale: 1.7 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.45, ease: "easeOut" }}
                              className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45"
                            />
                          )}
                        </AnimatePresence>
                      </div>
                      <AppIcon label="Data" accent="linear-gradient(180deg,rgba(255,182,98,0.34),rgba(255,182,98,0.08))">DB</AppIcon>
                      <AppIcon label="Ship" accent="linear-gradient(180deg,rgba(163,128,255,0.34),rgba(163,128,255,0.08))">UP</AppIcon>
                    </div>
                  </div>
                </div>

                {cursorVisible && (
                  <div ref={cursorRef} className="pointer-events-none absolute z-40">
                    <MouseCursor />
                  </div>
                )}

                <AnimatePresence>{terminalOpen ? <TerminalWindow stage={terminalStage} reducedMotion={Boolean(reducedMotion)} /> : null}</AnimatePresence>
              </div>
            </div>

            <div className="mx-auto h-5 w-[34%] rounded-b-[32px] bg-[linear-gradient(180deg,#c8ccd5,#9196a6)] shadow-[0_10px_40px_rgba(0,0,0,0.25)]" />
            <div className="mx-auto -mt-[2px] h-3 w-[68%] rounded-b-[999px] bg-[linear-gradient(180deg,#c6cad3,#8d93a2)] opacity-95 shadow-[0_16px_36px_rgba(0,0,0,0.28)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: terminalStage >= 4 ? 1 : 0, y: terminalStage >= 4 ? 0 : 18 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mt-8 w-full max-w-[860px] rounded-[28px] border border-white/12 bg-black/24 px-5 py-4 text-center backdrop-blur-2xl"
          >
            <div className="text-sm font-medium text-white">Now the terminal opens from the desktop, not from nowhere.</div>
            <div className="mt-1 text-sm text-white/58">
              Visible laptop. Visible macOS desktop. Visible cursor. Visible click. Then the CLI reveal.
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
