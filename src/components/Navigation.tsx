import Link from "next/link";
import SystemInfomation from "@/components/Header";

export default function Navigation() {
  return (
    <nav className="bg-surface-0/50 border-y border-surface-1 flex justify-between">
      <div className="flex divide-x-2 divide-surface-1 border-surface-1 text-sm">
        <Link className="py-2 px-4" href="/">Home</Link>
        <Link className="py-2 px-4" href="/experience">Experience</Link>
        <Link className="py-2 px-4" href="/skills">Skills</Link>
        <Link className="py-2 px-4" href="/blog">Blog</Link>
        <Link className="py-2 px-4 border-r border-surface-1" href="/contact">
          Contact
        </Link>
      </div>
      <SystemInfomation />
    </nav>
  );
}
