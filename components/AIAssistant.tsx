"use client";

import { useEffect, useRef, useState } from "react";

const SUGGESTIONS = [
  "What cybersecurity skills does Jaya have?",
  "Show me his SOC projects.",
  "Explain his AI cybersecurity project.",
  "What technologies does he use?",
  "Why would he be suitable for a SOC Analyst role?",
];

// Intentionally rule-based and scoped only to portfolio content below —
// this does not call any external LLM API and will not invent experience.
function answerFromPortfolio(q: string): string {
  const s = q.toLowerCase();
  if (s.includes("skill")) {
    return "Core skill areas: SOC Operations, SIEM (Sentinel, Splunk, ELK), Threat Detection & MITRE ATT&CK, Endpoint Security, Network Security, Cloud Security, Automation (Python/PowerShell), and AI + Security (RAG, agents, LangGraph). See the Skills section for detail and proficiency context.";
  }
  if (s.includes("soc project") || (s.includes("project") && s.includes("soc"))) {
    return "SOC-focused projects include the SOC Alert Triage Copilot and the Detection Rule Tuning Toolkit — both aimed at reducing manual analyst overhead. Open the Projects section for full case studies.";
  }
  if (s.includes("ai") && s.includes("project")) {
    return "The SOC Alert Triage Copilot is the primary AI project — a LangGraph-based agent that enriches SIEM alerts and drafts triage summaries for analyst review, without taking automated response actions. Full case study is in Projects.";
  }
  if (s.includes("technolog") || s.includes("tool") || s.includes("stack")) {
    return "Primary tools: Microsoft Sentinel, Splunk, Elastic/Kibana, KQL/SPL, Python, PowerShell, and cloud platforms (Azure, AWS) for cloud security monitoring. AI tooling includes LangGraph and RAG-based enrichment.";
  }
  if (s.includes("suitable") || s.includes("why") || s.includes("fit") || s.includes("hire")) {
    return "Jaya's background combines hands-on SOC triage and investigation experience with a growing automation and AI skill set — useful for teams that want faster, more consistent alert handling without losing analyst oversight. See Experience and Projects for specifics.";
  }
  if (s.includes("threat detection")) {
    return "Threat detection work spans IOC analysis, MITRE ATT&CK mapping, and detection engineering — demonstrated in the Detection Rule Tuning Toolkit and Threat Intel Correlation Dashboard projects.";
  }
  if (s.includes("certif")) {
    return "Certifications: CompTIA Security+ (obtained, 2024). CompTIA CySA+ and Microsoft SC-200 are currently in progress. See the Certifications section.";
  }
  if (s.includes("contact") || s.includes("email") || s.includes("reach")) {
    return "You can reach Jaya via the Contact section — email, LinkedIn and GitHub links are listed there, along with a resume download.";
  }
  return "I can only answer from Jaya's actual portfolio content — try asking about skills, SOC projects, the AI security project, technologies, or certifications.";
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ who: "bot" | "user"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          who: "bot",
          text: "Hi — I'm a simple assistant scoped to Jaya's portfolio content only. Ask about skills, projects, experience or certifications.",
        },
      ]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  const send = (text?: string) => {
    const q = (text ?? input).trim();
    if (!q) return;
    setMessages((m) => [...m, { who: "user", text: q }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { who: "bot", text: answerFromPortfolio(q) }]);
    }, 300);
  };

  return (
    <>
      <button
        className="fixed bottom-6.5 right-6.5 z-[250] w-[58px] h-[58px] rounded-full text-black text-[22px] flex items-center justify-center"
        style={{ background: "linear-gradient(135deg,var(--blue-1),var(--gold-1))", boxShadow: "0 12px 30px rgba(0,0,0,0.5)", color: "#05070A" }}
        onClick={() => setOpen((o) => !o)}
        aria-label="Ask Jaya AI"
      >
        ✦
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6.5 w-[360px] max-w-[90vw] h-[460px] max-h-[70vh] z-[250] rounded-2xl flex flex-col overflow-hidden"
          style={{ background: "var(--panel)", border: "1px solid var(--line-strong)", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
        >
          <div className="px-4 py-3.5 flex justify-between items-center font-mono text-xs" style={{ borderBottom: "1px solid var(--line)", color: "var(--blue-2)" }}>
            <span>ASK JAYA AI</span>
            <button onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-2.5">
            {messages.map((m, i) => (
              <div key={i} className={`ai-msg ${m.who}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 px-4 py-2.5" style={{ borderTop: "1px solid var(--line)" }}>
            {SUGGESTIONS.map((s) => (
              <button key={s} className="ai-chip" onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>

          <div className="flex" style={{ borderTop: "1px solid var(--line)" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about skills, projects, experience…"
              className="flex-1 bg-transparent outline-none text-sm px-3.5 py-3 text-text"
            />
            <button onClick={() => send()} className="px-4 text-sm" style={{ color: "var(--blue-2)" }}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
