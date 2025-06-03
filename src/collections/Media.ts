import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    disableLocalStorage: true,
  },
  fields: [
    {
      name: "alt",
      label: "Alt Text",
      type: "text",
    },
  ],
};
