import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-[12.5px] relative z-[1]" style={{ borderTop: "1px solid var(--line)", color: "var(--muted-2)" }}>
      <div className="wrap">
        © {new Date().getFullYear()} {profile.name} — {profile.role}. Built with intent.
        <span style={{ opacity: 0.4 }}> · Press ⌘K anywhere</span>
      </div>
    </footer>
  );
}
