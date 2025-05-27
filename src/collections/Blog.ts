import type { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
  slug: "blog-posts",
  admin: {
    group: "Blog",
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "slug",
      type: "text",
    },
    {
      name: "content",
      type: "richText",
    },
  ],
};
