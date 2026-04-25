"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface GlobeParticle {
  phi: number;
  theta: number;
  x: number;
  y: number;
  z: number;
  size: number;
}

export function CinematicGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const particles: GlobeParticle[] = [];
    const particleCount = 1200;
    const globeRadius = Math.min(width, height) * 0.4;
    const centerX = width / 2;
    const centerY = height / 2;

    // alexLat and alexLon removed as they were unused

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      particles.push({
        phi,
        theta,
        x: 0,
        y: 0,
        z: 0,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    let rotation = 0;

    function animate() {
      if (!ctx || !canvas) return; // Add check here
      ctx.clearRect(0, 0, width, height);
      
      // Stop rotation if reduced motion is preferred
      if (!effectiveReduceMotion) {
        rotation += 0.002;
      }

      // Draw Globe Aura/Glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, globeRadius * 1.5);
      gradient.addColorStop(0, "rgba(242, 162, 75, 0.05)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      particles.forEach((p) => {
        const rotatedTheta = p.theta + rotation;
        const x = globeRadius * Math.sin(p.phi) * Math.cos(rotatedTheta);
        const y = globeRadius * Math.cos(p.phi);
        const z = globeRadius * Math.sin(p.phi) * Math.sin(rotatedTheta);

        const scale = (z + globeRadius) / (2 * globeRadius);
        const opacity = scale * 0.5 + 0.1;
        const screenX = centerX + x;
        const screenY = centerY + y;

        if (z > -globeRadius * 0.5) {
          ctx.beginPath();
          ctx.arc(screenX, screenY, p.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();
        }
      });

      // Fixed Alexandria Marker (Always visible, globe rotates behind)
      const asX = centerX;
      const asY = centerY - globeRadius * 0.2; // Slightly above center

      // Draw Pulse for Alexandria
      const pulse = effectiveReduceMotion ? 0.5 : (Math.sin(Date.now() * 0.005) + 1) / 2;
      ctx.beginPath();
      ctx.arc(asX, asY, 8 + pulse * 10, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(242, 162, 75, ${0.5 * (1 - pulse)})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(asX, asY, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#f2a24b";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#f2a24b";
      ctx.fill();
      ctx.shadowBlur = 0;

      // Permanent Label
      ctx.font = "bold 12px monospace";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("alexandria, egypt", asX, asY + 30);
      
      // HUD Line to marker
      ctx.beginPath();
      ctx.moveTo(asX, asY + 5);
      ctx.lineTo(asX, asY + 15);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.stroke();

      // Only request next frame if not reduced motion OR 
      // if we want a static but refreshed render (though here it's easier to just stop)
      if (!effectiveReduceMotion) {
        requestAnimationFrame(animate);
      }
    }

    animate();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [effectiveReduceMotion]);

  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto flex items-center justify-center">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
      
      {/* Decorative Overlays */}
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none scale-110" />
      <div className={`absolute inset-0 rounded-full border border-sinai-glow-orange/10 pointer-events-none scale-125 opacity-20 ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
      
      {/* Orbital Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`w-full h-full opacity-20 ${effectiveReduceMotion ? '' : 'animate-[spin_60s_linear_infinite]'}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path id="curve" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
            <text className="text-[3px] font-mono fill-white tracking-[0.5em] uppercase">
              <textPath xlinkHref="#curve">
                APEX Experts AI Solutions • AI Automation • Oracle APEX Solutions • Web Development • Mobile Development • Enterprise Software • 
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
