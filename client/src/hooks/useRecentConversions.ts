import { useState, useEffect } from "react";

export interface RecentConversion {
  id: string;
  value: string;
  fromUnit: string;
  toUnit: string;
  fromSymbol: string;
  toSymbol: string;
  result: string;
  category: string;
  timestamp: number;
}

const STORAGE_KEY = "recent_conversions";
const MAX_RECENT = 10;

export function useRecentConversions() {
  const [recent, setRecent] = useState<RecentConversion[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setRecent(JSON.parse(stored));
      } catch (e) {
        console.error("Error loading recent conversions:", e);
      }
    }
  }, []);

  const addRecent = (conversion: Omit<RecentConversion, "id" | "timestamp">) => {
    const newConversion: RecentConversion = {
      ...conversion,
      id: Date.now().toString(),
      timestamp: Date.now(),
    };

    setRecent((prev) => {
      const filtered = prev.filter(
        (c) =>
          !(
            c.value === conversion.value &&
            c.fromUnit === conversion.fromUnit &&
            c.toUnit === conversion.toUnit
          )
      );
      const updated = [newConversion, ...filtered].slice(0, MAX_RECENT);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const removeRecent = (id: string) => {
    setRecent((prev) => {
      const updated = prev.filter((c) => c.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const clearRecent = () => {
    setRecent([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { recent, addRecent, removeRecent, clearRecent };
}
