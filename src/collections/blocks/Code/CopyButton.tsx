"use client";

import { ClipboardCheck, CopyIcon } from "lucide-react";
import { useState } from "react";

export function CopyButton(
  { code, language = "TypeScript", filename }: {
    code: string;
    language?: string;
    filename?: string;
  },
) {
  const [copied, setCopied] = useState(false);

  function updateCopyStatus() {
    if (!copied) {
      setCopied(() => true);
      setTimeout(() => {
        setCopied(() => false);
      }, 3000);
    }
  }

  return (
    <div
      className={`w-full flex ${filename ? "justify-between" : "justify-end"
        } items-center flex-wrap [&>p]:m-0 mb-1`}
    >
      {filename && (
        <p>
          {filename}
        </p>
      )}
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(code);
          updateCopyStatus();
        }}
        className={`flex gap-4 ${!copied ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        disabled={copied}
      >
        <div
          className={`flex gap-2 items-center ${!copied ? "opacity-100" : "opacity-50"
            }`}
        >
          {language && !copied ? language.toLowerCase() : "copied!"}
          {copied
            ? <ClipboardCheck className={`h-4 w-4`} />
            : <CopyIcon className={`h-4 w-4`} />}
        </div>
      </button>
    </div>
  );
}
