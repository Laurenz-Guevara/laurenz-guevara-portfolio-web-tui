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
            <span className="text-termPurple">laurenz@portfolio</span>
            <span>:</span>
          </div>
          <span className="text-termBlue">~/portfolio</span>
          <span>
            $ ssh tui-resume.laurenzguevara.com
          </span>
        </div>
        <div className="text-xs flex items-center">
          <div className="px-2 py-0.5 rounded mr-2 text-termGreen">
            CPU: {cpuUsage}%
          </div>
          <div className="px-2 py-0.5 rounded mr-2 text-termOrange">
            MEM: {memUsage}MB/4GB
          </div>
          <div className="px-2 py-0.5 rounded text-termCyan">
            {formatTime(currentTime)}
          </div>
        </div>
      </div>
    </header>
  );
}
