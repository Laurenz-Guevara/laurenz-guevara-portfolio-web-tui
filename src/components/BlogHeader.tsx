import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function BlogHeader({ title }: { title: string }) {
  return (
    <>
      <section className="flex justify-between mt-5 mb-3">
        <div className="space-x-2 overflow-ellipsis text-green overflow-hidden pr-2">
          <span className="text-right text-subtext-0">
            <Link className="text-lavender hover:text-maroon" href="/blog">
              Blog
            </Link>
          </span>
          <span className="text-right text-lavender">{">"}</span>
          <span className="text-right text-nowrap">
            {title}
          </span>
        </div>
        <ShareButton />
      </section>
      <div className="prose prose-invert mx-auto max-w-full">
        <h1>{title}</h1>
      </div>
    </>
  );
}
