import { Code } from "./Component.client";

export type CodeBlockProps = {
  code: string;
  language?: string;
  blockType: "code";
  filename?: string;
};

type Props = CodeBlockProps & {
  className?: string;
};

export function CodeBlock({ className, code, language, filename }: Props) {
  return (
    <div className={`${[className].filter(Boolean).join(" ")}`}>
      <Code code={code} language={language} filename={filename} />
    </div>
  );
}
