"use client";

import { profile } from "@/data/site";
import { useReveal } from "@/lib/hooks";

export default function Contact() {
  const box = useReveal<HTMLDivElement>();

  return (
    <section id="contact">
      <div className="wrap">
        <div
          ref={box.ref}
          className={`reveal ${box.inView ? "in" : ""} rounded-[22px] px-7 sm:px-[50px] py-16 sm:py-[70px] relative overflow-hidden`}
          style={{
            border: "1px solid var(--line-strong)",
            background:
              "radial-gradient(circle at 20% 20%, rgba(201,162,39,0.06), transparent 55%), radial-gradient(circle at 80% 80%, rgba(46,143,255,0.06), transparent 55%)",
          }}
        >
          <div className="font-mono text-xs tracking-[0.1em] mb-3.5" style={{ color: "var(--muted-2)" }}>
            09 — CONTACT
          </div>
          <h2 className="font-serif max-w-[680px]" style={{ fontSize: "clamp(32px,5vw,54px)" }}>
            Let&apos;s build a more secure future.
          </h2>
          <p className="mt-4.5 text-[15.5px] max-w-[600px]" style={{ color: "var(--muted)" }}>
            Open to SOC Analyst, Security Analyst, and Threat Detection roles. {profile.location}.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-9">
            <a href={`mailto:${profile.email}`} className="contact-link">
              ✉ {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              in LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
              ⌥ GitHub
            </a>
            <a href={profile.resumeUrl} download className="contact-link">
              ⬇ Resume
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-link {
          border: 1px solid var(--line-strong);
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 13.5px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .contact-link:hover {
          border-color: var(--blue-1);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
