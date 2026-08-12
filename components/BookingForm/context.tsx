"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { rooms } from "@/lib/rooms";

interface BookingSelectionContextValue {
  selectedRooms: string[];
  setSelectedRooms: (rooms: string[]) => void;
  toggleRoom: (name: string) => void;
  preselect: (name: string) => void;
}

const BookingSelectionContext = createContext<BookingSelectionContextValue | null>(null);

export function BookingSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedRooms, setSelectedRooms] = useState<string[]>([rooms[0].name]);

  const toggleRoom = useCallback((name: string) => {
    setSelectedRooms((prev) =>
      prev.includes(name) ? prev.filter((r) => r !== name) : [...prev, name]
    );
  }, []);

  const preselect = useCallback((name: string) => {
    setSelectedRooms([name]);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const value = useMemo(
    () => ({ selectedRooms, setSelectedRooms, toggleRoom, preselect }),
    [selectedRooms, toggleRoom, preselect]
  );

  return (
    <BookingSelectionContext.Provider value={value}>{children}</BookingSelectionContext.Provider>
  );
}

export function useBookingSelection() {
  const ctx = useContext(BookingSelectionContext);
  if (!ctx) throw new Error("useBookingSelection must be used within a BookingSelectionProvider");
  return ctx;
}
