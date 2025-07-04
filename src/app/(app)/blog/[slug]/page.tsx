export const revalidate = 3600;

import configPromise from "@payload-config";
import { getPayload, type RequiredDataFromCollectionSlug } from "payload";
import React, { cache } from "react";

import Link from "next/link";
import { RenderBlogRichText } from "@/components/RenderBlogRichText";
import BlogFooter from "@/components/BlogFooter";
import BlogHeader from "@/components/BlogHeader";
import { Tag } from "@/payload-types";

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const pages = await payload.find({
    collection: "blog-posts",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  const params = pages.docs
    .map(({ slug }) => {
      return { slug };
    });

  return params;
}

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = "home" } = await paramsPromise;

  const page: RequiredDataFromCollectionSlug<"blog-posts"> | null =
    await queryPageBySlug({
      slug,
    });

  if (!page) {
    return (
      <Link href={"/blog"}>
        404: This blog does not exist. Click here to return back.
      </Link>
    );
  }

  const { createdAt, content, title, tags } = page;

  return (
    <article className="container mx-auto max-w-4xl pb-4 sm:pb-10 px-4">
      <BlogHeader title={title} tags={tags as Tag[]} />
      <RenderBlogRichText data={content!} />
      <BlogFooter createdAt={createdAt!} />
    </article>
  );
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "blog-posts",
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});
