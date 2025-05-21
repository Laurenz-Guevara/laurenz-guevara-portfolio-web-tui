"use client";

import { useRef, useState } from "react";

export default function Footer() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputCommand, setInputCommand] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [currentCommand, setCurrentCommand] = useState("ls -la ~");

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
    <footer className="border-t border-[#45475a] p-2">
      <div className="flex justify-between items-center">
        <div
          className="flex items-center w-full cursor-text"
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
        >
          <span className="text-[#b4befe] pr-2">[guest@portfolio]$</span>
          <div className="relative flex-grow">
            <input
              ref={inputRef}
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={currentCommand}
              className="bg-transparent border-none outline-none w-full text-[#cdd6f4] pl-0 focus:ring-0"
            />
            {!isFocused && inputCommand === "" && (
              <span className="absolute left-0 top-0 text-[#cdd6f4] pointer-events-none">
                {currentCommand}
              </span>
            )}
          </div>
        </div>
        <div className="ml-4 whitespace-nowrap">
          <span>v1.0.0 | Laurenz Guevara Portfolio | © 2025</span>
        </div>
      </div>
    </footer>
  );
}
