import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import { Tag } from "@/payload-types";

export default function BlogHeader(
  { title, tags }: { title: string; tags: Tag[] },
) {
  return (
    <>
      <div className="flex justify-between mt-5 mb-3">
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
      </div>
      <div className="flex flex-wrap gap-2 text-xs mb-4">
        {tags?.map((tag) => {
          const color = typeof tag.colour === "object" && tag.colour !== null
            ? tag.colour.hexCode
            : undefined;

          return (
            <span
              key={tag.id}
              className="px-2 py-1 rounded text-black"
              style={{ backgroundColor: color }}
            >
              {tag.tagTitle}
            </span>
          );
        })}
      </div>
      <div className="prose prose-invert mx-auto max-w-full">
        <h1>{title}</h1>
      </div>
    </>
  );
}
