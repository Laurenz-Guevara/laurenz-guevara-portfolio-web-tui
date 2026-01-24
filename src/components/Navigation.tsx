"use client";

import Link from "next/link";
import SystemInfomation from "@/components/Header";
import { useEffect, useRef, useState } from "react";

export default function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setToggleMenu(false);
      }
    };

    if (toggleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <nav>
      <div className="fixed bottom-0 bg-primary xs:hidden w-full border-t border-surface-1">
        <div className="flex justify-end">
          <button
            onClick={() => setToggleMenu(true)}
            className="bg-surface-0/50 text-sm border-l border-surface-1 py-2 px-4 hover:text-maroon hover:cursor-pointer"
          >
            Open Menu
          </button>
        </div>
        {toggleMenu && (
          <div
            className="fixed bottom-0 right-0 z-50"
            ref={menuRef}
          >
            <div className="flex flex-col divide-y-1 divide-surface-1 border-surface-1 border-l border-t text-sm bg-primary">
              <Link
                onClick={() => setToggleMenu(false)}
                className="py-2 px-4 hover:text-maroon"
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setToggleMenu(false)}
                className="py-2 px-4 hover:text-maroon"
                href="/experience"
              >
                Experience
              </Link>
              <Link
                onClick={() => setToggleMenu(false)}
                className="py-2 px-4 hover:text-maroon"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                onClick={() => setToggleMenu(false)}
                className="py-2 px-4 hover:text-maroon"
                href="/contact"
              >
                Contact
              </Link>
              <button
                onClick={() => setToggleMenu(false)}
                className="bg-surface-0/50 text-sm py-2 px-4 hover:text-maroon hover:cursor-pointer"
              >
                Close Menu
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-surface-0/50 border-y border-surface-1 justify-between hidden xs:flex">
        <div className="flex divide-x-2 divide-surface-1 border-surface-1 text-sm">
          <Link className="py-2 px-4 hover:text-maroon" href="/">Home</Link>
          <Link className="py-2 px-4 hover:text-maroon" href="/experience">
            Experience
          </Link>
          <Link className="py-2 px-4 hover:text-maroon" href="/blog">Blog</Link>
          <Link
            className="py-2 px-4 hover:text-maroon border-r border-surface-1"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <SystemInfomation />
      </div>
    </nav>
  );
}
