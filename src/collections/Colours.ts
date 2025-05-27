import type { CollectionConfig } from "payload";

export const Colours: CollectionConfig = {
  slug: "colours",
  admin: {
    group: "Tags",
    useAsTitle: "colour",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "colour",
      type: "text",
      required: true,
    },
    {
      name: "hexCode",
      type: "text",
      defaultValue: "#2b2c3e",
      required: true,
    },
  ],
};
