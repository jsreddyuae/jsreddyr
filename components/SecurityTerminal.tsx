"use client";

import { useEffect, useRef, useState } from "react";
import { projects, profile } from "@/data/site";

export default function SecurityTerminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<string[]>(["root@soc:~$ Security Terminal — type 'help'", ""]);
  const [cmd, setCmd] = useState("");
  const bufferRef = useRef("");
  const boxRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Type "terminal" anywhere on the page to trigger the easter egg.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      bufferRef.current = (bufferRef.current + e.key).slice(-8).toLowerCase();
      if (bufferRef.current.includes("terminal")) setOpen(true);
    };
    const onOpenEvent = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-terminal", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-terminal", onOpenEvent);
    };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 10);
  }, [open]);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight });
  }, [lines]);

  const run = () => {
    const c = cmd.trim().toLowerCase();
    const out: string[] = [`$ ${cmd}`];
    if (c === "help") out.push("commands: whoami · skills · projects · contact · clear · exit");
    else if (c === "whoami") out.push("jaya_simha — soc_analyst // detect. investigate. respond. automate.");
    else if (c === "skills") out.push("SOC Ops · SIEM · Threat Detection · Endpoint · Network · Cloud · Automation · AI Security");
    else if (c === "projects") out.push(...projects.map((p) => "- " + p.name));
    else if (c === "contact") out.push(`${profile.email} · ${profile.github} · ${profile.linkedin}`);
    else if (c === "clear") {
      setLines([]);
      setCmd("");
      return;
    } else if (c === "exit") {
      setOpen(false);
      setCmd("");
      return;
    } else out.push(`command not found: ${c} (type 'help')`);

    setLines((l) => [...l, ...out]);
    setCmd("");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div>
        <div id="terminal-box" ref={boxRef}>
          {lines.map((l, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: l }} />
          ))}
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="font-mono text-sm" style={{ color: "var(--blue-2)" }}>
            $
          </span>
          <input
            ref={inputRef}
            value={cmd}
            onChange={(e) => setCmd(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && run()}
            className="bg-transparent outline-none font-mono text-sm flex-1"
            style={{ color: "var(--ok)" }}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
