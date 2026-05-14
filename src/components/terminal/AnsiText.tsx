import React from "react";

const COLOR_MAP: Record<string, string> = {
  blue: "var(--term-accent)",
  accent: "var(--term-accent)",
  prompt: "var(--term-prompt)",
  muted: "var(--term-muted)",
  warn: "var(--term-warn)",
  danger: "var(--term-danger)",
  fg: "var(--term-fg)",
  magenta: "var(--term-magenta)",
};

// Parses our pseudo-ANSI markers like \x1b[blue]text\x1b[/]
export function AnsiText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const regex = /\x1b\[([a-z]+)\]([\s\S]*?)\x1b\[\/\]/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > lastIndex) {
      parts.push(
        <span key={key++}>{text.slice(lastIndex, m.index)}</span>,
      );
    }
    const color = COLOR_MAP[m[1]] ?? "inherit";
    parts.push(
      <span key={key++} style={{ color }}>
        {m[2]}
      </span>,
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(<span key={key++}>{text.slice(lastIndex)}</span>);
  }
  return <>{parts}</>;
}
