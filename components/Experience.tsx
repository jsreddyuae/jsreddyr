"use client";

import { experience } from "@/data/site";
import { useReveal } from "@/lib/hooks";

export default function Experience() {
  const head = useReveal<HTMLDivElement>();

  return (
    <section id="experience">
      <div className="wrap">
        <div ref={head.ref} className={`reveal ${head.inView ? "in" : ""} mb-16 max-w-[760px]`}>
          <div className="font-mono text-xs tracking-[0.1em] mb-3.5" style={{ color: "var(--muted-2)" }}>
            06 — EXPERIENCE
          </div>
          <h2 className="font-serif leading-[1.08]" style={{ fontSize: "clamp(30px,4vw,46px)" }}>
            Professional <em className="italic" style={{ color: "var(--gold-2)" }}>timeline</em>.
          </h2>
        </div>

        <div>
          {experience.map((e, i) => (
            <ExpRow key={e.role} item={e} last={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpRow({
  item,
  last,
}: {
  item: { date: string; role: string; org: string; bullets: string[] };
  last: boolean;
}) {
  const row = useReveal<HTMLDivElement>();
  return (
    <div
      ref={row.ref}
      className={`reveal ${row.inView ? "in" : ""} grid sm:grid-cols-[180px_1fr] grid-cols-1 gap-2 sm:gap-7.5 py-7.5`}
      style={{ borderBottom: last ? "none" : "1px solid var(--line)" }}
    >
      <div className="font-mono text-[12.5px]" style={{ color: "var(--muted-2)" }}>
        {item.date}
      </div>
      <div>
        <div className="font-serif text-xl">{item.role}</div>
        <div className="text-[13.5px] mt-1" style={{ color: "var(--blue-2)" }}>
          {item.org}
        </div>
        <ul className="mt-3 pl-4.5 text-sm space-y-1.5" style={{ color: "var(--muted)" }}>
          {item.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
