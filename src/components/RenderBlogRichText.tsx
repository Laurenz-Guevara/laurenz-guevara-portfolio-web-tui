import {
  DefaultNodeTypes,
  type DefaultTypedEditorState,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical";

import {
  JSXConvertersFunction,
  RichText as ConvertRichText,
} from "@payloadcms/richtext-lexical/react";

import { CodeBlock, CodeBlockProps } from "@/collections/blocks/Code/Component";

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CodeBlockProps>;


const jsxConverters: JSXConvertersFunction<NodeTypes> = (
  { defaultConverters },
) => ({
  ...defaultConverters,
  blocks: {
    code: ({ node }) => <CodeBlock {...node.fields} />,
  },
});

type Props = {
  data: DefaultTypedEditorState;
  enableGutter?: boolean;
  enableProse?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export function RenderBlogRichText(props: Props) {
  return (
    <ConvertRichText
      converters={jsxConverters}
      className="prose prose-sm md:prose-base prose-invert mx-auto max-w-full"
      {...props}
    />
  );
}
