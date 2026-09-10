"use client";

import { useReveal } from "@/lib/hooks";

const tiers: { nodes: string[]; top?: boolean }[] = [
  { nodes: ["ANALYST"] },
  { nodes: ["AI SECURITY COPILOT"], top: true },
  { nodes: ["DETECTION", "INVESTIGATION", "RESPONSE"] },
  { nodes: ["SIEM", "EDR", "SOAR"] },
  { nodes: ["THREAT INTEL"] },
  { nodes: ["MITRE ATT&CK"], top: true },
];

export default function AIArchitecture() {
  const head = useReveal<HTMLDivElement>();
  const arch = useReveal<HTMLDivElement>();

  let nodeIndex = -1;

  return (
    <section id="ai-security">
      <div className="wrap">
        <div ref={head.ref} className={`reveal ${head.inView ? "in" : ""} mb-16 max-w-[760px]`}>
          <div className="font-mono text-xs tracking-[0.1em] mb-3.5" style={{ color: "var(--muted-2)" }}>
            04 — AI + SECURITY
          </div>
          <h2 className="font-serif leading-[1.08]" style={{ fontSize: "clamp(30px,4vw,46px)" }}>
            Where AI meets <em className="italic" style={{ color: "var(--gold-2)" }}>cybersecurity</em>.
          </h2>
          <p className="mt-4.5 text-[15.5px] max-w-[600px]" style={{ color: "var(--muted)" }}>
            Scroll into view to animate the architecture — an AI copilot sitting alongside the analyst, not replacing
            them.
          </p>
        </div>

        <div
          ref={arch.ref}
          className="reveal rounded-2xl px-6 sm:px-8 py-11"
          style={{
            border: "1px solid var(--line)",
            background: "radial-gradient(circle at 50% 0%, rgba(46,143,255,0.06), transparent 60%)",
          }}
        >
          {tiers.map((tier, ti) => (
            <div key={ti}>
              <div className="flex justify-center gap-4 flex-wrap">
                {tier.nodes.map((n) => {
                  nodeIndex++;
                  const idx = nodeIndex;
                  return (
                    <div
                      key={n}
                      className={`arch-node ${tier.top ? "top" : ""} ${arch.inView ? "on" : ""}`}
                      style={{ transitionDelay: arch.inView ? `${idx * 110}ms` : "0ms" }}
                    >
                      {n}
                    </div>
                  );
                })}
              </div>
              {ti < tiers.length - 1 && <div className="arch-connector-v" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
