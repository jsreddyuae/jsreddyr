"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { navSections, profile } from "@/data/site";
import { useRecruiter } from "@/lib/recruiter-context";

type Item = { label: string; tag: string; action: () => void };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { recruiter, setRecruiter } = useRecruiter();

  const items: Item[] = useMemo(
    () => [
      ...navSections.map((s) => ({
        label: s.id === "home" ? "Go Home" : s.label,
        tag: "nav",
        action: () => {
          location.hash = `#${s.id}`;
        },
      })),
      { label: "Download Resume", tag: "action", action: () => window.open(profile.resumeUrl, "_blank") },
      {
        label: "Toggle Recruiter Mode",
        tag: "action",
        action: () => setRecruiter(!recruiter),
      },
      { label: "Open Security Terminal", tag: "secret", action: () => window.dispatchEvent(new Event("open-terminal")) },
    ],
    [recruiter, setRecruiter]
  );

  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("open-cmdk", openHandler);
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-cmdk", openHandler);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSel(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  if (!open) return null;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, filtered.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    }
    if (e.key === "Enter" && filtered[sel]) {
      filtered[sel].action();
      setOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[300] flex items-start justify-center pt-[12vh]"
      style={{ background: "rgba(5,7,10,0.7)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div
        className="w-[560px] max-w-[92vw] rounded-2xl overflow-hidden"
        style={{ background: "var(--panel)", border: "1px solid var(--line-strong)", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSel(0);
          }}
          onKeyDown={onKeyDown}
          placeholder="Type a command or jump to a section…"
          className="w-full bg-transparent outline-none text-text text-base px-5 py-4.5"
          style={{ borderBottom: "1px solid var(--line)" }}
        />
        <div className="max-h-[340px] overflow-y-auto p-2">
          {filtered.length === 0 && <div className="cmdk-item">No results</div>}
          {filtered.map((item, idx) => (
            <div
              key={item.label}
              className={`cmdk-item ${idx === sel ? "sel" : ""}`}
              onMouseEnter={() => setSel(idx)}
              onClick={() => {
                item.action();
                setOpen(false);
              }}
            >
              {item.label}
              <span className="tag">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
