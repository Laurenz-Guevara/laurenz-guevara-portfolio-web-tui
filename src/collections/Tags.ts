import type { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    group: "Tags",
    useAsTitle: "Tag Title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "Tag Title",
      type: "text",
      required: true,
    },
    {
      name: "colour",
      type: "relationship",
      relationTo: "colours",
      required: true,
    },
  ],
};
