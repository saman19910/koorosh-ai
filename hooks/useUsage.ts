'use client';

import { useEffect, useState } from "react";

export default function useUsage() {
  const [usageCount, setUsageCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("usageCount");
    setUsageCount(stored ? parseInt(stored, 10) : 0);
  }, []);

  const incrementUsage = () => {
    const updated = usageCount + 1;
    setUsageCount(updated);
    localStorage.setItem("usageCount", updated.toString());
  };

  return { usageCount, incrementUsage };
}
