"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopyLink}
      className={cn(
        "text-maroon hover:text-green hover:cursor-pointer transition-colors",
        copied && "text-green",
      )}
      title={copied ? "Link copied!" : "Copy link to clipboard"}
    >
      {copied ? "Link Copied!" : "Share Post"}
    </button>
  );
}
