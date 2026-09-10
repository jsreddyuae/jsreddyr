"use client";

import { useEffect } from "react";
import { useRecruiter } from "@/lib/recruiter-context";

export default function RecruiterBanner() {
  const { recruiter, setRecruiter } = useRecruiter();

  useEffect(() => {
    document.body.classList.toggle("recruiter", recruiter);
  }, [recruiter]);

  if (!recruiter) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[150] text-center py-2.5 text-sm font-semibold"
      style={{ background: "linear-gradient(90deg,var(--gold-1),var(--gold-2))", color: "#141008" }}
    >
      Recruiter Mode is on — simplified view for fast review.{" "}
      <button className="underline ml-2" onClick={() => setRecruiter(false)}>
        Exit
      </button>
    </div>
  );
}
