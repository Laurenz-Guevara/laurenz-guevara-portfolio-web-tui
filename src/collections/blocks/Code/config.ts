import type { Block } from "payload";

export const Code: Block = {
  slug: "code",
  interfaceName: "CodeBlock",
  fields: [
    {
      name: "language",
      type: "select",
      options: [
        { label: "TypeScript", value: "typescript" },
        { label: "TSX", value: "tsx" },
        { label: "Go", value: "go" },
        { label: "Bash", value: "bash" },
        { label: "Config", value: "config" },
      ],
      defaultValue: "typescript",
    },
    {
      name: "filename",
      type: "text",
    },
    {
      name: "code",
      type: "code",
      label: false,
      required: true,
    },
  ],
};
