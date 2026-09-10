"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type RecruiterCtx = { recruiter: boolean; setRecruiter: (v: boolean) => void };

const Ctx = createContext<RecruiterCtx>({ recruiter: false, setRecruiter: () => {} });

export function RecruiterProvider({ children }: { children: ReactNode }) {
  const [recruiter, setRecruiter] = useState(false);
  return <Ctx.Provider value={{ recruiter, setRecruiter }}>{children}</Ctx.Provider>;
}

export function useRecruiter() {
  return useContext(Ctx);
}
