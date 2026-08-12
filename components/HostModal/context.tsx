"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

type HostKey = "nigel" | "amelia";

interface HostModalContextValue {
  openHostKey: HostKey | null;
  open: (key: HostKey) => void;
  close: () => void;
}

const HostModalContext = createContext<HostModalContextValue | null>(null);

export function HostModalProvider({ children }: { children: ReactNode }) {
  const [openHostKey, setOpenHostKey] = useState<HostKey | null>(null);

  const open = useCallback((key: HostKey) => setOpenHostKey(key), []);
  const close = useCallback(() => setOpenHostKey(null), []);

  const value = useMemo(() => ({ openHostKey, open, close }), [openHostKey, open, close]);

  return <HostModalContext.Provider value={value}>{children}</HostModalContext.Provider>;
}

export function useHostModal() {
  const ctx = useContext(HostModalContext);
  if (!ctx) throw new Error("useHostModal must be used within a HostModalProvider");
  return ctx;
}
