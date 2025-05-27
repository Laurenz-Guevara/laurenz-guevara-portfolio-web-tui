"use client";

import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";

import React from "react";

export const RenderBlogRichText = (
  { data }: { data: SerializedEditorState },
) => {
  const html = convertLexicalToHTML({ data });

  return (
    <div
      className="prose prose-invert mx-auto max-w-4xl"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
