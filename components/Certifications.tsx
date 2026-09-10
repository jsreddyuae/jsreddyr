"use client";

import { certifications } from "@/data/site";
import { useReveal } from "@/lib/hooks";

export default function Certifications() {
  const head = useReveal<HTMLDivElement>();

  return (
    <section id="certifications">
      <div className="wrap">
        <div ref={head.ref} className={`reveal ${head.inView ? "in" : ""} mb-16 max-w-[760px]`}>
          <div className="font-mono text-xs tracking-[0.1em] mb-3.5" style={{ color: "var(--muted-2)" }}>
            07 — CERTIFICATIONS
          </div>
          <h2 className="font-serif leading-[1.08]" style={{ fontSize: "clamp(30px,4vw,46px)" }}>
            Credentials & <em className="italic" style={{ color: "var(--gold-2)" }}>training</em>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4.5">
          {certifications.map((c) => (
            <a
              href={c.link}
              key={c.name}
              className="rounded-2xl p-5.5 flex gap-4 items-start"
              style={{ border: "1px solid var(--line)", background: "var(--panel)" }}
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center font-serif text-[17px] flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(201,162,39,0.18), rgba(46,143,255,0.14))",
                  color: "var(--gold-2)",
                }}
              >
                {c.issuer[0]}
              </div>
              <div>
                <div className="text-[15px] font-semibold text-text">{c.name}</div>
                <div className="text-[12.5px] mt-1" style={{ color: "var(--muted-2)" }}>
                  {c.issuer} · {c.year}
                </div>
                <span className={`cert-status mt-2.5 ${c.status === "done" ? "cs-done" : "cs-progress"}`}>
                  {c.status === "done" ? "OBTAINED" : "IN PROGRESS"}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
