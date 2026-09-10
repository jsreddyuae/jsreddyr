"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks";

export default function BackgroundFX() {
  const lightRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  // Cursor light
  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      if (lightRef.current) {
        lightRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  // Parallax grid
  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      if (gridRef.current) gridRef.current.style.transform = `translateY(${window.scrollY * 0.02}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const count = Math.min(60, Math.floor(window.innerWidth / 22));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 1.4 + 0.4,
      c: Math.random() > 0.5 ? "rgba(46,143,255,0.4)" : "rgba(201,162,39,0.35)",
    }));

    let raf: number;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <>
      {!reduced && <div id="cursor-light" ref={lightRef} />}
      <div id="bg-canvas-wrap">
        <div className="bg-grid" ref={gridRef} />
        <canvas id="particles" ref={canvasRef} />
      </div>
    </>
  );
}
