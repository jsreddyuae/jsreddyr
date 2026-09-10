"use client";

import { useReveal } from "@/lib/hooks";

const timeline = [
  { year: "Foundation", title: "Networking & Systems", desc: "Built a base in TCP/IP, DNS, HTTP/HTTPS and Windows/Linux internals — the fundamentals that make log data legible." },
  { year: "Entry into Security", title: "SOC Fundamentals & SIEM", desc: "Learned alert triage, log correlation and detection logic using Microsoft Sentinel, Splunk and the ELK stack." },
  { year: "Depth", title: "Threat Detection & IR", desc: "Focused on threat hunting, IOC analysis and MITRE ATT&CK-mapped incident response workflows." },
  { year: "Current", title: "Automation & AI Security", desc: "Building agentic AI tooling and automation to accelerate SOC workflows — from enrichment to first-pass triage." },
];

export default function About() {
  const head = useReveal<HTMLDivElement>();
  const copy = useReveal<HTMLDivElement>();
  const tl = useReveal<HTMLDivElement>();

  return (
    <section id="about">
      <div className="wrap">
        <div ref={head.ref} className={`reveal ${head.inView ? "in" : ""} mb-16 max-w-[760px]`}>
          <div className="font-mono text-xs tracking-[0.1em] mb-3.5" style={{ color: "var(--muted-2)" }}>
            01 — ABOUT
          </div>
          <h2 className="font-serif leading-[1.08]" style={{ fontSize: "clamp(30px,4vw,46px)" }}>
            Security is not just about detection.
            <br />
            It&apos;s about <em className="italic" style={{ color: "var(--gold-2)" }}>understanding</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-16 md:gap-[70px] items-start">
          <div ref={copy.ref} className={`reveal ${copy.inView ? "in" : ""} space-y-4.5`}>
            <p className="text-[16px]" style={{ color: "#B7BFCA" }}>
              My work sits inside the <strong className="text-text font-semibold">SOC</strong> — the layer between raw
              telemetry and a decision. That means spending most days inside alert queues, log pipelines, and
              correlation rules, separating genuine risk from noise.
            </p>
            <p className="text-[16px]" style={{ color: "#B7BFCA" }}>
              I focus on <strong className="text-text font-semibold">security monitoring</strong>,{" "}
              <strong className="text-text font-semibold">alert triage</strong>, and{" "}
              <strong className="text-text font-semibold">incident investigation</strong> — tracing a suspicious
              process back through its parent chain, checking a domain against threat intel, and mapping behavior to{" "}
              <strong className="text-text font-semibold">MITRE ATT&CK</strong> before it ever reaches an analyst&apos;s
              queue as a confirmed incident.
            </p>
            <p className="text-[16px]" style={{ color: "#B7BFCA" }}>
              Increasingly, that also means <strong className="text-text font-semibold">automation</strong> —
              scripting the repetitive parts of investigation in Python and PowerShell — and{" "}
              <strong className="text-text font-semibold">AI-assisted security</strong>: using LLMs and agent
              frameworks to summarize alerts, enrich indicators, and speed up first-pass triage without replacing
              analyst judgment.
            </p>
            <p className="text-[16px]" style={{ color: "#B7BFCA" }}>
              I treat this as a discipline that compounds. Every investigation, every false positive tuned out of a
              detection rule, and every new tool explored feeds back into faster, more confident decisions the next
              time something looks wrong.
            </p>
          </div>

          <div ref={tl.ref} className={`reveal ${tl.inView ? "in" : ""}`}>
            <div className="timeline">
              {timeline.map((t) => (
                <div className="t-item" key={t.year}>
                  <div className="font-mono text-xs tracking-wide" style={{ color: "var(--gold-2)" }}>
                    {t.year}
                  </div>
                  <div className="font-serif text-[19px] mt-1.5">{t.title}</div>
                  <div className="text-sm mt-1.5" style={{ color: "var(--muted)" }}>
                    {t.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
