"use client";

import { useEffect, useState } from "react";
import { navSections, profile } from "@/data/site";
import { useScrollSpy } from "@/lib/hooks";
import { useRecruiter } from "@/lib/recruiter-context";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(navSections.map((s) => s.id));
  const { setRecruiter } = useRecruiter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap flex items-center justify-between gap-6">
          <a href="#home" className="brand flex items-center gap-2.5 font-serif text-[19px] tracking-wide">
            <span className="dot" /> {profile.name}
          </a>

          <nav className="links hidden md:flex gap-0.5 items-center">
            {navSections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={active === s.id ? "active" : ""}>
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <button className="kbd-btn hide-in-recruiter hidden sm:flex" onClick={() => setRecruiter(true)}>
              Recruiter Mode
            </button>
            <button className="kbd-btn" onClick={() => window.dispatchEvent(new Event("open-cmdk"))}>
              Search <kbd>⌘K</kbd>
            </button>
            <button
              className="md:hidden border border-lineStrong rounded-lg w-9 h-9 text-text"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col p-7" style={{ background: "rgba(5,7,10,0.98)" }}>
          <button className="self-end text-3xl" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            ×
          </button>
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-[26px] py-3.5 border-b border-line"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
