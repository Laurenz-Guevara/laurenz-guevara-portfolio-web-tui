import configPromise from "@payload-config";
import { getPayload, type RequiredDataFromCollectionSlug } from "payload";
import React, { cache } from "react";

import Link from "next/link";
import { RenderBlogRichText } from "@/components/RenderBlogRichText";
import BlogFooter from "@/components/BlogFooter";

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
    ?.filter((doc) => {
      return doc.slug !== "home";
    })
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

  const { createdAt, content } = page;

  return (
    <article className="container mx-auto max-w-4xl py-10 px-4">
      <RenderBlogRichText data={content!} />
      <BlogFooter createdAt={createdAt!} />
    </article>
  );
}

// TODO: Generate metadata based on content from page
// export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
//   const { slug = 'home' } = await paramsPromise
//   const page = await queryPageBySlug({
//     slug,
//   })
//   return generateMeta({ doc: page })
// }

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
