"use client";

import { useRef, type ReactNode, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;
  
  // Use a more generous margin and remove 'once: true' if we want it to react on every scroll
  // But for professional sites, 'once: true' is usually better to prevent repetitive jumping.
  // We'll keep 'once: true' but significantly improve the transition quality.
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const initial = effectiveReduceMotion 
    ? { opacity: 0 } 
    : { opacity: 0, y: 80, filter: "blur(15px)" };
    
  const animate = isInView 
    ? { opacity: 1, y: 0, filter: "blur(0px)" } 
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: effectiveReduceMotion ? 0.6 : 1.2, // Shorter duration for simple fade
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for high-end motion
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
