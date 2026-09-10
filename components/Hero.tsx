"use client";

import { useRef } from "react";
import Image from "next/image";
import { profile } from "@/data/site";
import { useMagnetic, useReducedMotion } from "@/lib/hooks";

export default function Hero() {
  const reduced = useReducedMotion();
  const photoRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const primaryBtn = useMagnetic<HTMLAnchorElement>(reduced);
  const ghostBtn = useMagnetic<HTMLAnchorElement>(reduced);

  const onHeroMove = (e: React.MouseEvent) => {
    if (reduced || !photoRef.current) return;
    const r = photoRef.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / 40;
    const dy = (e.clientY - cy) / 40;
    photoRef.current.style.transform = `rotateY(${dx}deg) rotateX(${-dy}deg)`;
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={onHeroMove}
      className="min-h-[100svh] flex items-center relative pt-[90px] z-[1]"
    >
      <div className="wrap grid md:grid-cols-[1.15fr_0.85fr] grid-cols-1 gap-10 md:gap-10 items-center w-full">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-[34px] h-px" style={{ background: "linear-gradient(90deg,var(--gold-1),transparent)" }} />
            <span className="text-[13px] tracking-[0.08em] font-mono" style={{ color: "var(--gold-2)" }}>
              SOC OPERATIONS · THREAT DETECTION · AI SECURITY
            </span>
          </div>
          <h1 className="font-serif leading-[0.98]" style={{ fontSize: "clamp(44px,7vw,84px)" }}>
            Jaya
            <br />
            <span className="italic font-normal gold-text">Simha</span>
          </h1>
          <div className="font-mono text-sm tracking-[0.12em] mt-4.5" style={{ color: "var(--blue-2)" }}>
            {profile.role.toUpperCase()}
          </div>
          <p
            className="font-serif italic mt-6 max-w-[560px]"
            style={{ fontSize: "clamp(20px,2.4vw,28px)", fontWeight: 400, color: "#C9D2DE" }}
          >
            &ldquo;{profile.headline.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="blue-text not-italic">{profile.headline.split(" ").slice(-1)}</span>&rdquo;
          </p>
          <p className="mt-5 max-w-[480px] text-[15.5px]" style={{ color: "var(--muted)" }}>
            {profile.sub}
          </p>
          <div className="flex gap-3.5 mt-9 flex-wrap">
            <a
              ref={primaryBtn}
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[10px] text-sm font-semibold transition-transform"
              style={{ background: "linear-gradient(120deg,var(--gold-1),var(--gold-2))", color: "#141008" }}
            >
              Explore My Work
            </a>
            <a
              ref={ghostBtn}
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[10px] text-sm font-semibold transition-transform"
              style={{ border: "1px solid var(--line-strong)", background: "rgba(255,255,255,0.02)" }}
            >
              Download Resume
            </a>
          </div>
          <div className="mt-6.5">
            <a
              href="#soc"
              className="text-[13.5px] inline-flex items-center gap-1.5 pb-0.5"
              style={{ color: "var(--blue-2)", borderBottom: "1px solid rgba(111,210,255,0.3)" }}
            >
              Enter SOC Command Center →
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="hero-photo-frame" ref={photoRef}>
            <Image
              src="/images/profile.png"
              alt={`${profile.name}, ${profile.role}`}
              fill
              sizes="380px"
              style={{ objectFit: "cover" }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="float-chip" style={{ top: "6%", left: "-12%" }}>
            <span className="led" style={{ background: "var(--ok)", boxShadow: "0 0 6px var(--ok)" }} /> THREAT LEVEL: LOW
          </div>
          <div className="float-chip" style={{ bottom: "14%", right: "-14%" }}>
            <span className="led" style={{ background: "var(--blue-2)", boxShadow: "0 0 6px var(--blue-2)" }} /> SOC STATUS: MONITORING
          </div>
          <div className="float-chip" style={{ bottom: "-4%", left: "6%" }}>
            <span className="led" style={{ background: "var(--gold-2)", boxShadow: "0 0 6px var(--gold-2)" }} /> AI COPILOT: ACTIVE
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.15em]" style={{ color: "var(--muted-2)" }}>
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
