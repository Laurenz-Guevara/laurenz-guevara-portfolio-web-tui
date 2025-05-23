import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex bg-background/50 border-y divide-x-2 divide-secondary border-secondary text-sm">
      <Link className="py-2 px-4" href="/">Home</Link>
      <Link className="py-2 px-4" href="/experience">Experience</Link>
      <Link className="py-2 px-4" href="/skills">Skills</Link>
      <Link className="py-2 px-4" href="/blog">Blog</Link>
      <Link className="py-2 px-4 border-r border-secondary" href="/contact">
        Contact
      </Link>
    </div>
  );
}
