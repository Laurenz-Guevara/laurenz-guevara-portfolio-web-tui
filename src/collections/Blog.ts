import type { CollectionConfig } from "payload";
import { Code } from "@/collections/blocks/Code/config";
import { BlocksFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

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
      required: true,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [Code],
          }),
        ],
      }),
      required: true,
    },
  ],
};
