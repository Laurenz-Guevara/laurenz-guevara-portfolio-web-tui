import type { CollectionConfig } from "payload";

export const Colours: CollectionConfig = {
  slug: "colours",
  admin: {
    group: "Tags",
    useAsTitle: "Colour",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "Colour",
      type: "text",
      required: true,
    },
    {
      name: "Hex Code",
      type: "text",
      defaultValue: "#2b2c3e",
      required: true,
    },
  ],
};
