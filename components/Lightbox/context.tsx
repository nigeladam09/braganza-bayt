"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { RoomImage } from "@/lib/rooms";

interface LightboxContextValue {
  images: RoomImage[];
  index: number;
  isOpen: boolean;
  open: (images: RoomImage[]) => void;
  close: () => void;
  nav: (dir: 1 | -1) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<RoomImage[]>([]);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((imgs: RoomImage[]) => {
    setImages(imgs);
    setIndex(0);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const nav = useCallback(
    (dir: 1 | -1) => {
      setIndex((prev) => {
        if (!images.length) return prev;
        return (prev + dir + images.length) % images.length;
      });
    },
    [images.length]
  );

  const value = useMemo(
    () => ({ images, index, isOpen, open, close, nav }),
    [images, index, isOpen, open, close, nav]
  );

  return <LightboxContext.Provider value={value}>{children}</LightboxContext.Provider>;
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within a LightboxProvider");
  return ctx;
}
