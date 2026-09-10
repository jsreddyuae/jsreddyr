"use client";

import { useEffect, useState } from "react";
import { skills } from "@/data/site";
import { useReveal } from "@/lib/hooks";

export default function Skills() {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);
  const [revealed, setRevealed] = useState(false);
  const head = useReveal<HTMLDivElement>();

  useEffect(() => {
    setRevealed(false);
    const t = setTimeout(() => setRevealed(true), 60);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <section id="skills">
      <div className="wrap">
        <div ref={head.ref} className={`reveal ${head.inView ? "in" : ""} mb-16 max-w-[760px]`}>
          <div className="font-mono text-xs tracking-[0.1em] mb-3.5" style={{ color: "var(--muted-2)" }}>
            02 — SKILLS
          </div>
          <h2 className="font-serif leading-[1.08]" style={{ fontSize: "clamp(30px,4vw,46px)" }}>
            A working <em className="italic" style={{ color: "var(--gold-2)" }}>ecosystem</em>, not a list.
          </h2>
          <p className="mt-4.5 text-[15.5px] max-w-[600px]" style={{ color: "var(--muted)" }}>
            Hover any node for context. These reflect hands-on familiarity, not vendor logos collected for show.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skill-tab ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(190px,1fr))" }}>
          {skills[active].map((s) => (
            <div key={s.n} className={`skill-node ${revealed ? "revealed" : ""}`}>
              <div className="text-[14.5px] font-semibold text-text">{s.n}</div>
              <div className="sn-bar">
                <div className="sn-fill" style={{ width: revealed ? `${s.lvl}%` : "0%" }} />
              </div>
              <div className="sn-detail">
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
