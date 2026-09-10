"use client";

import { useState } from "react";
import { alerts, Alert } from "@/data/site";
import { useCountUp, useReveal } from "@/lib/hooks";

const flowSteps = [
  "LOG SOURCES",
  "COLLECTOR",
  "SIEM",
  "CORRELATION",
  "AI ANALYSIS",
  "ALERT",
  "ANALYST TRIAGE",
  "INVESTIGATION",
  "MITRE ATT&CK",
  "RESPONSE",
];

export default function SOC() {
  const head = useReveal<HTMLDivElement>();
  const shell = useReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<Alert | null>(null);
  const [litUpTo, setLitUpTo] = useState(-1);

  const queue = useCountUp(alerts.length, shell.inView);
  const incidents = useCountUp(2, shell.inView);
  const endpoints = useCountUp(128, shell.inView);

  const triage = (a: Alert) => {
    setSelected(a);
    setLitUpTo(-1);
    flowSteps.forEach((_, i) => {
      setTimeout(() => setLitUpTo(i), i * 140);
    });
  };

  return (
    <section id="soc">
      <div className="wrap">
        <div ref={head.ref} className={`reveal ${head.inView ? "in" : ""} mb-16 max-w-[760px]`}>
          <div className="font-mono text-xs tracking-[0.1em] mb-3.5" style={{ color: "var(--muted-2)" }}>
            03 — SOC LAB
          </div>
          <h2 className="font-serif leading-[1.08]" style={{ fontSize: "clamp(30px,4vw,46px)" }}>
            Enter the <em className="italic" style={{ color: "var(--gold-2)" }}>SOC</em>.
          </h2>
          <p className="mt-4.5 text-[15.5px] max-w-[600px]" style={{ color: "var(--muted)" }}>
            A simulated security operations environment. Click an alert to walk through a sample triage-to-response
            flow. All data below is illustrative — labeled clearly as a demonstration, not a professional record.
          </p>
        </div>

        <div ref={shell.ref} className={`soc-shell reveal ${shell.inView ? "in" : ""}`}>
          <div className="soc-topbar flex items-center justify-between px-5.5 py-4" style={{ borderBottom: "1px solid var(--line)", background: "rgba(255,255,255,0.015)" }}>
            <div className="font-mono text-[12.5px] tracking-[0.08em] flex items-center gap-2.5" style={{ color: "var(--blue-2)" }}>
              <span className="rec" /> LIVE SIMULATION — SOC-01
            </div>
            <div className="font-mono text-[10.5px] tracking-wide px-2.5 py-1 rounded-md" style={{ color: "var(--warn)", border: "1px solid rgba(240,180,41,0.35)" }}>
              DEMO DATA · NOT REAL METRICS
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4" style={{ borderBottom: "1px solid var(--line)" }}>
            <Stat label="THREAT LEVEL" value="ELEVATED" color="var(--warn)" />
            <Stat label="ALERT QUEUE" value={String(queue)} />
            <Stat label="OPEN INCIDENTS" value={String(incidents)} />
            <Stat label="ENDPOINTS MONITORED" value={String(endpoints)} />
          </div>

          <div className="grid md:grid-cols-[1.1fr_1fr] grid-cols-1">
            <div className="p-5.5" style={{ borderRight: "1px solid var(--line)" }}>
              <div className="font-mono text-[11px] tracking-[0.08em] mb-3.5" style={{ color: "var(--muted)" }}>
                ALERT QUEUE — CLICK TO TRIAGE
              </div>
              {alerts.map((a) => (
                <div
                  key={a.name}
                  className={`alert-row ${selected?.name === a.name ? "active" : ""}`}
                  onClick={() => triage(a)}
                >
                  <div>
                    <span className={`sev sev-${a.sev}`}>{a.sev}</span> <span className="text-[13.5px] text-text">{a.name}</span>
                  </div>
                  <span className="font-mono text-[10.5px]" style={{ color: "var(--muted-2)" }}>
                    {a.time}
                  </span>
                </div>
              ))}

              {selected && (
                <div className="mt-4.5 rounded-xl p-4.5" style={{ border: "1px solid var(--line-strong)", background: "rgba(255,255,255,0.02)" }}>
                  <InvRow k="SEVERITY" v={selected.sev} />
                  <InvRow k="SOURCE" v={selected.source} />
                  <InvRow k="DETECTION METHOD" v={selected.detect} />
                  <InvRow k="MITRE TECHNIQUE" v={selected.mitre} />
                  <InvRow k="STATUS" v={selected.status} last />
                </div>
              )}
            </div>

            <div className="p-5.5">
              <div className="font-mono text-[11px] tracking-[0.08em] mb-3.5" style={{ color: "var(--muted)" }}>
                EVENT FLOW
              </div>
              <div>
                {flowSteps.map((step, i) => (
                  <div key={step}>
                    <div className={`flow-step ${i <= litUpTo ? "lit" : ""}`}>
                      <span className="fn">{i + 1}</span> {step}
                    </div>
                    {i < flowSteps.length - 1 && <div className="flow-connector" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="px-5.5 py-5" style={{ borderRight: "1px solid var(--line)" }}>
      <div className="font-mono text-[10.5px] tracking-[0.08em]" style={{ color: "var(--muted-2)" }}>
        {label}
      </div>
      <div className="font-serif text-[28px] mt-1.5" style={{ color: color || "var(--text)" }}>
        {value}
      </div>
    </div>
  );
}

function InvRow({ k, v, last }: { k: string; v: string; last?: boolean }) {
  return (
    <div className="flex justify-between py-2 text-[13px]" style={{ borderBottom: last ? "none" : "1px solid var(--line)" }}>
      <span className="font-mono text-[11px]" style={{ color: "var(--muted-2)" }}>
        {k}
      </span>
      <span className="font-medium text-text">{v}</span>
    </div>
  );
}
