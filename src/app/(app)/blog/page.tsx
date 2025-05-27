import Link from "next/link";

import { getPayload } from "payload";
import configPromise from "@payload-config";
import { formatToDDMMYYYY } from "@/lib/utils";

async function getBlogSlugs() {
  const payload = await getPayload({ config: configPromise });
  const pages = await payload.find({
    collection: "blog-posts",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
      title: true,
      description: true,
      createdAt: true,
    },
  });

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== "home";
    })
    .map(({ id, slug, title, description, createdAt }) => {
      return { id, slug, title, description, createdAt };
    });

  return params;
}

export default async function Blog() {
  const blogPosts = await getBlogSlugs();

  return (
    <section className="p-4">
      <div className="mb-6">
        <p className="text-yellow mb-2">BLOG POSTS</p>
        <p className="text-lavender mb-1">
          $ ls blog
        </p>
      </div>
      <div className="space-y-6">
        {blogPosts && blogPosts.map((post) => {
          return (
            <div key={post.id} className="space-y-6">
              <Link href={`blog/${post.slug}`}>
                <div className="border border-surface-1 p-3 cursor-pointer hover:bg-surface-0/50">
                  <div className="flex justify-between mb-1">
                    <p className="text-sky">
                      {post.title}
                    </p>
                    <p>{formatToDDMMYYYY(post.createdAt)}</p>
                  </div>
                  <p className="mb-2">
                    {post.description}
                  </p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-surface-0/70 px-2 py-1 rounded">
                      Bubbletea
                    </span>
                    <span className="bg-surface-0/70 px-2 py-1 rounded">
                      SSH
                    </span>
                    <span className="bg-surface-0/70 px-2 py-1 rounded">
                      Golang
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
