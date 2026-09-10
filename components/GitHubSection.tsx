"use client";

import { useEffect, useState } from "react";
import { fallbackRepos, profile, Repo } from "@/data/site";
import { useReveal } from "@/lib/hooks";

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  KQL: "#F0D98C",
  Markdown: "#8892A0",
  PowerShell: "#012456",
  Shell: "#89e051",
};

export default function GitHubSection() {
  const head = useReveal<HTMLDivElement>();
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);
  const [live, setLive] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${profile.githubHandle}/repos?sort=updated&per_page=6`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (cancelled || !Array.isArray(data) || data.length === 0) return;
        const mapped: Repo[] = data.map((r: any) => ({
          name: r.name,
          desc: r.description || "No description provided.",
          lang: r.language || "Other",
          color: LANG_COLORS[r.language] || "#8892A0",
          stars: r.stargazers_count ?? 0,
        }));
        setRepos(mapped);
        setLive(true);
      })
      .catch(() => {
        // Falls back to placeholder data in data/site.ts — expected until a real handle is connected.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github">
      <div className="wrap">
        <div ref={head.ref} className={`reveal ${head.inView ? "in" : ""} mb-16 max-w-[760px]`}>
          <div className="font-mono text-xs tracking-[0.1em] mb-3.5" style={{ color: "var(--muted-2)" }}>
            08 — GITHUB
          </div>
          <h2 className="font-serif leading-[1.08]" style={{ fontSize: "clamp(30px,4vw,46px)" }}>
            Open <em className="italic" style={{ color: "var(--gold-2)" }}>work</em>.
          </h2>
          <p className="mt-4.5 text-[15.5px] max-w-[600px]" style={{ color: "var(--muted)" }}>
            {live ? "Live activity pulled from the GitHub API." : "Placeholder data — connect a real GitHub handle in data/site.ts to go live."}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          {repos.map((r) => (
            <div key={r.name} className="rounded-xl p-4.5" style={{ border: "1px solid var(--line)", background: "var(--panel)" }}>
              <div className="font-mono text-[13.5px] text-text">{r.name}</div>
              <div className="text-[12.5px] mt-2 min-h-[32px]" style={{ color: "var(--muted)" }}>
                {r.desc}
              </div>
              <div className="flex gap-3.5 mt-3.5 font-mono text-[11.5px]" style={{ color: "var(--muted-2)" }}>
                <span>
                  <span className="lang-dot" style={{ background: r.color }} />
                  {r.lang}
                </span>
                <span>★ {r.stars}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6.5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[10px] text-sm font-semibold"
            style={{ border: "1px solid var(--line-strong)", background: "rgba(255,255,255,0.02)" }}
          >
            View Full Profile →
          </a>
        </div>
      </div>
    </section>
  );
}
