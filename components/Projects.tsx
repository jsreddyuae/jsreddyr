"use client";

import { useState } from "react";
import { projects, Project } from "@/data/site";
import { useReducedMotion, useReveal, useTilt } from "@/lib/hooks";

const caseSections = (p: Project) => [
  ["01", "PROBLEM", p.case.problem],
  ["02", "OBJECTIVE", p.case.objective],
  ["03", "ARCHITECTURE", p.case.architecture],
  ["04", "TECHNOLOGY", p.case.technology],
  ["05", "IMPLEMENTATION", p.case.implementation],
  ["06", "SECURITY", p.case.security],
  ["07", "AUTOMATION", p.case.automation],
  ["08", "RESULTS", p.case.results],
  ["09", "LESSONS LEARNED", p.case.lessons],
];

export default function Projects() {
  const head = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects">
      <div className="wrap">
        <div ref={head.ref} className={`reveal ${head.inView ? "in" : ""} mb-16 max-w-[760px]`}>
          <div className="font-mono text-xs tracking-[0.1em] mb-3.5" style={{ color: "var(--muted-2)" }}>
            05 — PROJECTS
          </div>
          <h2 className="font-serif leading-[1.08]" style={{ fontSize: "clamp(30px,4vw,46px)" }}>
            Selected <em className="italic" style={{ color: "var(--gold-2)" }}>work</em>.
          </h2>
          <p className="mt-4.5 text-[15.5px] max-w-[600px]" style={{ color: "var(--muted)" }}>
            Click any card to open the full case study.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5.5">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} onOpen={() => setOpen(p)} />
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[400] overflow-y-auto py-16 px-5"
          style={{ background: "rgba(5,7,10,0.85)", backdropFilter: "blur(8px)" }}
          onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        >
          <div className="max-w-[820px] mx-auto rounded-[20px] p-11 relative" style={{ background: "var(--panel)", border: "1px solid var(--line-strong)" }}>
            <button
              className="absolute top-5.5 right-5.5 w-9 h-9 rounded-full text-base"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--line-strong)" }}
              onClick={() => setOpen(null)}
              aria-label="Close case study"
            >
              ×
            </button>
            <div className="font-mono text-[11px] tracking-[0.08em]" style={{ color: "var(--blue-2)" }}>
              {open.cat}
            </div>
            <h2 className="font-serif text-[30px] mt-2.5">{open.name}</h2>
            {caseSections(open).map(([num, title, body]) => (
              <div key={num} className="py-5" style={{ borderBottom: "1px solid var(--line)" }}>
                <div className="font-mono text-[11px] tracking-[0.1em]" style={{ color: "var(--gold-2)" }}>
                  {num} — {title}
                </div>
                <div className="mt-2 text-[14.5px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {body}
                </div>
              </div>
            ))}
            <div className="py-5">
              <div className="font-mono text-[11px] tracking-[0.1em]" style={{ color: "var(--gold-2)" }}>
                10 — GITHUB / DEMO
              </div>
              <div className="mt-2 text-[14.5px]" style={{ color: "var(--muted)" }}>
                {open.github ? (
                  <a href={open.github} target="_blank" rel="noreferrer" className="blue-text">
                    {open.github} ↗
                  </a>
                ) : (
                  "Repository link not yet published."
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const reduced = useReducedMotion();
  const tiltRef = useTilt<HTMLDivElement>(reduced);

  return (
    <div className="pcard" ref={tiltRef} onClick={onOpen}>
      <div className="font-mono text-[10.5px] tracking-[0.08em]" style={{ color: "var(--blue-2)" }}>
        {project.cat}
      </div>
      <h3 className="text-[22px] mt-3 font-serif">{project.name}</h3>
      <p className="mt-2.5 text-sm" style={{ color: "var(--muted)" }}>
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tags.map((t) => (
          <span className="ptag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-1.5 text-[12.5px]" style={{ color: "var(--gold-2)" }}>
        View case study →
      </div>
    </div>
  );
}
