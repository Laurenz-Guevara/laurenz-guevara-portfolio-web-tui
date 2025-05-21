"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [cpuUsage, setCpuUsage] = useState(2);
  const [memUsage, setMemUsage] = useState(124);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const fluctuationInterval = setInterval(() => {
      setCpuUsage((prev) => {
        const direction = Math.random() > 0.5 ? 1 : -1;
        const change = Math.random() * 0.5;
        let newValue = prev + direction * change;

        if (newValue < 2) newValue = 2;
        if (newValue > 6) newValue = 6;

        return Number.parseFloat(newValue.toFixed(1));
      });

      setMemUsage((prev) => {
        const direction = Math.random() > 0.5 ? 1 : -1;
        const change = Math.random() * 2;
        let newValue = prev + direction * change;

        if (newValue < 124) newValue = 124;
        if (newValue > 140) newValue = 140;

        return Math.round(newValue);
      });
    }, 1000);

    return () => clearInterval(fluctuationInterval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Europe/London",
    });
  };

  return (
    <header className="border-b border-secondary p-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div>
            <span className="text-[#b4befe]">laurenz@portfolio</span>
            <span>:</span>
          </div>
          <span className="text-[#89b4fa]">~/portfolio</span>
          <span className="text-[#cdd6f4]">$</span>
        </div>
        <div className="text-xs">
          <span className="mr-4">CPU: {cpuUsage}%</span>
          <span className="mr-4">MEM: {memUsage}MB/8GB</span>
          <span>{formatTime(currentTime)}</span>
        </div>
      </div>
    </header>
  );
}
