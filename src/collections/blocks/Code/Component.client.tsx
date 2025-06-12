"use client";

import { Highlight, themes } from "prism-react-renderer";
import React from "react";
import { CopyButton } from "./CopyButton";

type Props = {
  code: string;
  language?: string;
  filename?: string;
};

export function Code({ code, language = "", filename }: Props) {
  if (!code) return null;

  return (
    <Highlight language={language} code={code} theme={themes.vsDark}>
      {({ getLineProps, getTokenProps, tokens }) => (
        <pre
          className={"px-4 pb-8 text-xs overflow-x-auto text-wrap"}
        >
          <CopyButton code={code} language={language} filename={filename} />
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ className: 'table-row', line })}>
              <span className={'table-cell select-none text-right text-white/25'}>
                <ColumnType lineNumber={i} language={language} />
              </span>
              <span className={'table-cell pl-4'}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

function ColumnType(
  { lineNumber, language }: { lineNumber: number; language?: string },
) {
  if (language === "bash") {
    return <>{lineNumber === 0 ? "$" : ">"}</>;
  }

  return <>{lineNumber + 1}</>;
}
