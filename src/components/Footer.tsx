"use client";

import { useRef, useState } from "react";

export default function Footer() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputCommand, setInputCommand] = useState("");
  const [currentCommand, setCurrentCommand] = useState(
    "ssh portfolio.laurenzguevara.com",
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputCommand);
    }
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    // TODO: Add functionality to commands
    console.log(trimmedCmd);
    setCurrentCommand(trimmedCmd);
    setInputCommand("");
  };

  return (
    <footer className="border-t border-surface-1 p-2">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
        <div
          className="hidden sm:flex items-center w-full cursor-text"
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
        >
          <span className="text-lavender pr-2">[laurenz@portfolio]$</span>
          <div className="flex-grow">
            <input
              ref={inputRef}
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={currentCommand}
              className="bg-transparent border-none outline-none w-full pl-0 focus:ring-0 pr-4 overflow-hidden text-ellipsis"
            />
          </div>
        </div>
        <div className="whitespace-nowrap">
          <span>v1.0.0 | Laurenz Guevara | © 2026</span>
        </div>
      </div>
    </footer>
  );
}
