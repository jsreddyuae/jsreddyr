// ============================================================
// ALL SITE CONTENT LIVES HERE.
// Edit skills, projects, experience, certifications, repos and
// contact details in this one file — no need to touch components.
// ============================================================

export const profile = {
  name: "Jaya Simha",
  role: "Cybersecurity / SOC Analyst",
  headline: "Detect. Investigate. Respond. Automate.",
  sub: "Cybersecurity professional focused on SOC operations, threat detection, incident response, security automation, and AI-powered security engineering.",
  email: "jaya.simha@example.com",
  linkedin: "https://linkedin.com/in/jayasimha",
  github: "https://github.com/jayasimha",
  githubHandle: "jayasimha",
  resumeUrl: "/resume.pdf",
  location: "UAE · Open to relocation / remote",
};

export type Skill = { n: string; lvl: number; d: string };

export const skills: Record<string, Skill[]> = {
  "SOC Operations": [
    { n: "Security Monitoring", lvl: 88, d: "24/7 alert queue monitoring across SIEM and EDR consoles." },
    { n: "Alert Triage", lvl: 90, d: "Rapid severity assessment and false-positive filtering." },
    { n: "Incident Investigation", lvl: 85, d: "Root-cause tracing across logs, endpoints and network telemetry." },
    { n: "Incident Response", lvl: 82, d: "Containment and remediation workflows aligned to IR playbooks." },
    { n: "Escalation", lvl: 80, d: "Structured hand-off to Tier 2/3 with full context and evidence." },
    { n: "Log Analysis", lvl: 88, d: "Parsing and correlating logs across Windows, Linux and cloud sources." },
  ],
  SIEM: [
    { n: "Microsoft Sentinel", lvl: 84, d: "KQL-based detection rules, workbooks and incident management." },
    { n: "Splunk", lvl: 78, d: "SPL search, dashboards and correlation searches." },
    { n: "Elastic / ELK", lvl: 75, d: "Log ingestion, Kibana visualization and alerting." },
    { n: "KQL", lvl: 82, d: "Writing and tuning detection and hunting queries." },
    { n: "SPL", lvl: 74, d: "Search Processing Language for Splunk investigations." },
  ],
  "Threat Detection": [
    { n: "Threat Hunting", lvl: 78, d: "Hypothesis-driven hunts across endpoint and network data." },
    { n: "IOC Analysis", lvl: 82, d: "Validating indicators against threat intel feeds." },
    { n: "Detection Engineering", lvl: 76, d: "Writing and tuning detections to reduce noise." },
    { n: "MITRE ATT&CK", lvl: 85, d: "Mapping behavior to tactics and techniques." },
    { n: "TTP Analysis", lvl: 78, d: "Understanding adversary tactics, techniques and procedures." },
  ],
  "Endpoint Security": [
    { n: "EDR", lvl: 80, d: "Endpoint detection and response console operations." },
    { n: "Endpoint Investigation", lvl: 78, d: "Process trees, persistence checks, artifact review." },
    { n: "Malware Analysis Fundamentals", lvl: 65, d: "Static triage and behavioral indicators — foundational level." },
    { n: "Windows Security", lvl: 82, d: "Event logs, registry, and Windows attack surface basics." },
  ],
  "Network Security": [
    { n: "TCP/IP", lvl: 85, d: "Core protocol fundamentals for traffic analysis." },
    { n: "DNS", lvl: 80, d: "DNS-based detection and exfiltration indicators." },
    { n: "HTTP/HTTPS", lvl: 80, d: "Web traffic inspection and TLS fundamentals." },
    { n: "Firewalls", lvl: 74, d: "Rule review and traffic policy fundamentals." },
    { n: "VPN", lvl: 70, d: "Remote access architecture and monitoring." },
    { n: "IDS/IPS", lvl: 76, d: "Signature and anomaly-based detection systems." },
    { n: "Network Traffic Analysis", lvl: 78, d: "PCAP review and flow analysis for anomalies." },
  ],
  "Cloud Security": [
    { n: "AWS", lvl: 70, d: "CloudTrail, GuardDuty and IAM fundamentals." },
    { n: "Azure", lvl: 74, d: "Azure AD, Sentinel and Defender for Cloud." },
    { n: "IAM", lvl: 72, d: "Identity and access review fundamentals." },
    { n: "Cloud Monitoring", lvl: 72, d: "Centralized logging across cloud workloads." },
    { n: "Cloud Security Fundamentals", lvl: 74, d: "Shared responsibility model and baseline hardening." },
  ],
  Automation: [
    { n: "Python", lvl: 80, d: "Scripting enrichment, parsing and automation tasks." },
    { n: "PowerShell", lvl: 76, d: "Windows automation and endpoint scripting." },
    { n: "Bash", lvl: 72, d: "Linux-side automation and log processing." },
    { n: "REST APIs", lvl: 78, d: "Integrating security tools via API for automation." },
  ],
  "AI + Security": [
    { n: "Generative AI", lvl: 75, d: "Applying LLMs to summarization and enrichment tasks." },
    { n: "RAG", lvl: 70, d: "Retrieval-augmented pipelines over security documentation." },
    { n: "AI Agents", lvl: 68, d: "Building agentic workflows for repetitive SOC tasks." },
    { n: "LangGraph", lvl: 65, d: "Orchestrating multi-step agent workflows." },
    { n: "AI-Assisted Investigation", lvl: 72, d: "Using AI to accelerate — not replace — analyst judgment." },
  ],
  DevOps: [
    { n: "Docker", lvl: 70, d: "Containerizing tooling for lab and automation environments." },
    { n: "Kubernetes", lvl: 55, d: "Foundational orchestration knowledge." },
    { n: "Git / GitHub", lvl: 82, d: "Version control for scripts, detections and projects." },
    { n: "CI/CD", lvl: 60, d: "Basic pipeline familiarity for automation deployment." },
    { n: "PostgreSQL", lvl: 65, d: "Structured storage for enrichment and lab data." },
    { n: "Redis", lvl: 58, d: "Caching for lightweight automation tooling." },
  ],
};

export type Alert = {
  name: string;
  sev: "HIGH" | "MED" | "LOW";
  source: string;
  detect: string;
  mitre: string;
  status: string;
  time: string;
};

export const alerts: Alert[] = [
  { name: "Suspicious PowerShell Execution", sev: "HIGH", source: "Endpoint", detect: "Behavioral", mitre: "T1059.001", status: "Investigating", time: "2m ago" },
  { name: "Impossible Travel Login", sev: "HIGH", source: "Identity", detect: "UEBA", mitre: "T1078", status: "Escalated", time: "11m ago" },
  { name: "Unusual Outbound DNS Volume", sev: "MED", source: "Network", detect: "Anomaly", mitre: "T1071.004", status: "Investigating", time: "24m ago" },
  { name: "New Local Admin Account Created", sev: "MED", source: "Endpoint", detect: "Rule-based", mitre: "T1136.001", status: "Monitoring", time: "41m ago" },
  { name: "Repeated Failed VPN Logins", sev: "LOW", source: "Network", detect: "Threshold", mitre: "T1110", status: "Closed", time: "1h ago" },
];

export type ProjectCase = {
  problem: string;
  objective: string;
  architecture: string;
  technology: string;
  implementation: string;
  security: string;
  automation: string;
  results: string;
  lessons: string;
};

export type Project = {
  name: string;
  cat: string;
  desc: string;
  tags: string[];
  github?: string;
  demo?: string;
  case: ProjectCase;
};

export const projects: Project[] = [
  {
    name: "SOC Alert Triage Copilot",
    cat: "AI Security · Agentic AI",
    desc: "An AI agent that pre-triages incoming SIEM alerts, enriches indicators, and drafts a summary for the analyst.",
    tags: ["Python", "LangGraph", "Sentinel API", "KQL"],
    github: "https://github.com/jayasimha/soc-triage-copilot",
    case: {
      problem: "Analysts spend a disproportionate amount of time on manual enrichment — pivoting between SIEM, threat intel and endpoint consoles for every alert before real triage even begins.",
      objective: "Reduce the manual enrichment step without removing the analyst from the decision, so the human still makes the final call.",
      architecture: "SIEM webhook → enrichment agent (LangGraph) → threat intel + EDR lookups → summarized brief posted back to the alert.",
      technology: "Python, LangGraph, Microsoft Sentinel REST API, VirusTotal API, PostgreSQL for caching lookups.",
      implementation: "Built as a set of small agent tools (IOC lookup, host lookup, MITRE mapping) orchestrated by a graph rather than one large prompt, so each step is auditable.",
      security: "Read-only credentials scoped per tool; no automated response actions — enrichment and summarization only.",
      automation: "Runs on a queue trigger per new alert; batches lookups to respect API rate limits.",
      results: "In lab testing on a sample alert set, enrichment time dropped noticeably versus manual lookup — measured in a controlled lab environment, not production SOC metrics.",
      lessons: "Agent output needed strict grounding in retrieved data — early versions occasionally summarized indicators that weren't actually queried, which reinforced the value of tool-call auditing.",
    },
  },
  {
    name: "Detection Rule Tuning Toolkit",
    cat: "SOC Automation · Detection Engineering",
    desc: "A Python toolkit for measuring detection rule noise and suggesting tuning changes based on historical alert outcomes.",
    tags: ["Python", "KQL", "Sentinel", "Pandas"],
    github: "https://github.com/jayasimha/detection-tuning-toolkit",
    case: {
      problem: "High false-positive rates on several detection rules were consuming analyst time without producing actionable incidents.",
      objective: "Quantify which rules were noisiest and surface concrete tuning suggestions.",
      architecture: "Historical alert export → pandas analysis pipeline → false-positive rate per rule → suggested KQL filter adjustments.",
      technology: "Python, Pandas, KQL, Microsoft Sentinel.",
      implementation: "Built a scoring model weighting closure reason, time-to-close and analyst notes to flag rules for review.",
      security: "Read-only access to historical incident data; no changes made without analyst review.",
      automation: "Scheduled weekly export-and-report job.",
      results: "Surfaced a shortlist of the noisiest rules in a lab dataset for manual review — a starting point for tuning, not a finished production result.",
      lessons: "Noise reduction has to be balanced carefully against detection coverage — the toolkit flags candidates, it doesn't auto-disable rules.",
    },
  },
  {
    name: "Threat Intel Correlation Dashboard",
    cat: "Threat Detection · Security Monitoring",
    desc: "A dashboard correlating internal IOC hits against multiple threat intel feeds, mapped to MITRE ATT&CK.",
    tags: ["Elastic", "Kibana", "Python", "MITRE ATT&CK"],
    github: "https://github.com/jayasimha/threat-intel-dashboard",
    case: {
      problem: "IOC matches from different feeds weren't being cross-referenced, so overlapping signals were easy to miss.",
      objective: "Give analysts a single view of IOC hits enriched with feed source and ATT&CK technique.",
      architecture: "Feed ingestion → normalization → Elasticsearch index → Kibana dashboard with ATT&CK Navigator overlay.",
      technology: "Elastic Stack, Python, MITRE ATT&CK Navigator, REST APIs.",
      implementation: "Normalized feed formats to a common schema before indexing, and mapped a subset of common feed indicators to top-level ATT&CK tactics.",
      security: "Sanitized and rate-limited feed ingestion to avoid indexing malformed or oversized payloads.",
      automation: "Hourly ingestion job with de-duplication against existing indicators.",
      results: "A lab-environment dashboard used to practice correlation workflows across sample feed data.",
      lessons: "Feed quality varies significantly — normalization logic needed more edge-case handling than initially expected.",
    },
  },
  {
    name: "Cloud Login Anomaly Monitor",
    cat: "Cloud Security · Automation",
    desc: "A lightweight monitor flagging anomalous cloud sign-in patterns (impossible travel, atypical device) for review.",
    tags: ["Azure AD", "Python", "REST APIs"],
    github: "https://github.com/jayasimha/cloud-anomaly-monitor",
    case: {
      problem: "Standard conditional access alerts didn't always surface context-rich anomalies quickly enough for fast triage.",
      objective: "Add a lightweight secondary layer that flags high-risk sign-in patterns with a short enrichment summary.",
      architecture: "Azure AD sign-in logs → anomaly scoring script → Teams/webhook notification with context.",
      technology: "Azure AD, Python, REST APIs.",
      implementation: "Compared sign-in geolocation and device fingerprint deltas against a rolling baseline per user.",
      security: "Notification-only tool — flags for human review, takes no automated identity actions.",
      automation: "Runs on a scheduled interval against the sign-in log API.",
      results: "Used in a personal lab environment to practice identity-based anomaly detection concepts.",
      lessons: "Baseline drift (e.g., legitimate travel) needed a tunable tolerance window to avoid constant false flags.",
    },
  },
];

export type ExperienceItem = {
  date: string;
  role: string;
  org: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    date: "2024 — Present",
    role: "SOC Analyst",
    org: "Security Operations",
    bullets: [
      "Monitor SIEM and EDR consoles for security alerts across endpoint, network and identity sources.",
      "Perform first- and second-line triage, escalating validated incidents with full investigation context.",
      "Map confirmed incidents to MITRE ATT&CK tactics and techniques for consistent reporting.",
      "Build small Python/PowerShell scripts to reduce repetitive manual investigation steps.",
    ],
  },
  {
    date: "2023 — 2024",
    role: "Security Monitoring & Detection (Training/Lab Track)",
    org: "Independent Study & Labs",
    bullets: [
      "Completed structured SOC and SIEM training covering log analysis, alert triage and detection logic.",
      "Built home-lab detection and automation projects using Sentinel, Splunk and Elastic.",
      "Practiced incident response workflows against simulated attack scenarios.",
    ],
  },
  {
    date: "Earlier",
    role: "IT / Systems Foundations",
    org: "Networking & Systems",
    bullets: [
      "Built foundational knowledge in networking, Windows/Linux administration and systems fundamentals that underpin security analysis work.",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  status: "done" | "progress";
  link: string;
};

export const certifications: Certification[] = [
  { name: "CompTIA Security+", issuer: "CompTIA", year: "2024", status: "done", link: "#" },
  { name: "CompTIA CySA+", issuer: "CompTIA", year: "In Progress", status: "progress", link: "#" },
  { name: "Microsoft SC-200: Security Operations Analyst", issuer: "Microsoft", year: "In Progress", status: "progress", link: "#" },
];

export type Repo = {
  name: string;
  desc: string;
  lang: string;
  color: string;
  stars: number;
};

// Fallback repos shown if the live GitHub API call fails or during local dev without network access.
export const fallbackRepos: Repo[] = [
  { name: "soc-triage-copilot", desc: "AI agent for SOC alert enrichment and triage summaries.", lang: "Python", color: "#3572A5", stars: 12 },
  { name: "detection-tuning-toolkit", desc: "Toolkit for measuring and tuning detection rule noise.", lang: "Python", color: "#3572A5", stars: 8 },
  { name: "threat-intel-dashboard", desc: "Kibana dashboard correlating IOC feeds with ATT&CK.", lang: "Python", color: "#3572A5", stars: 6 },
  { name: "kql-detection-library", desc: "A library of reusable Sentinel KQL detection queries.", lang: "KQL", color: "#F0D98C", stars: 15 },
  { name: "cloud-anomaly-monitor", desc: "Lightweight Azure AD sign-in anomaly monitor.", lang: "Python", color: "#3572A5", stars: 4 },
  { name: "security-notes", desc: "Personal notes on SOC, detection engineering and IR.", lang: "Markdown", color: "#8892A0", stars: 3 },
];

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "soc", label: "SOC Lab" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];
