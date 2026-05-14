"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { SITE } from "@/lib/site";
import {
  commandNames,
  commands,
  findCommand,
  type CommandContext,
} from "./commands";
import { AnsiText } from "./AnsiText";

type Line = {
  id: number;
  prompt?: string;
  output: React.ReactNode;
};

const BOOT_LINES = [
  "booting hasrat-os v2026.05 ...",
  "loading modules: [react] [next] [terminal] [mdx] ✓",
  "establishing tty ... ready",
  "",
  "Welcome to hasrat-os. Type 'help' to list commands, or try 'projects'.",
  "",
];

function Prompt({ cwd, dim = false }: { cwd: string; dim?: boolean }) {
  return (
    <span className="select-none whitespace-pre">
      <span className={dim ? "text-[var(--term-muted)]" : "text-[var(--term-prompt)]"}>
        visitor
      </span>
      <span className="text-[var(--term-muted)]">@</span>
      <span className={dim ? "text-[var(--term-muted)]" : "text-[var(--term-accent)]"}>
        {SITE.handle}
      </span>
      <span className="text-[var(--term-muted)]">:</span>
      <span className={dim ? "text-[var(--term-muted)]" : "text-[var(--term-magenta)]"}>
        {cwd}
      </span>
      <span className="text-[var(--term-muted)]"> $ </span>
    </span>
  );
}

function renderOutput(out: React.ReactNode): React.ReactNode {
  if (typeof out === "string") return <AnsiText text={out} />;
  return out;
}

export default function Terminal() {
  const router = useRouter();
  const [cwd, setCwd] = useState("~");
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [booting, setBooting] = useState(true);
  const [focused, setFocused] = useState(true);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const idRef = useRef(0);
  const nextId = () => ++idRef.current;

  const pushLine = useCallback(
    (output: React.ReactNode, prompt?: string) => {
      setLines((prev) => [...prev, { id: nextId(), prompt, output }]);
    },
    [],
  );

  // Boot animation
  useEffect(() => {
    let cancelled = false;
    let i = 0;
    const tick = () => {
      if (cancelled) return;
      if (i < BOOT_LINES.length) {
        const line = BOOT_LINES[i++];
        setLines((prev) => [
          ...prev,
          { id: nextId(), output: <AnsiText text={line} /> },
        ]);
        setTimeout(tick, line === "" ? 80 : 180);
      } else {
        setBooting(false);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
    };
    tick();
    return () => {
      cancelled = true;
    };
  }, []);

  // Auto-scroll on new line
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const ctx: CommandContext = useMemo(
    () => ({
      cwd,
      setCwd,
      clear: () => setLines([]),
      navigate: (href: string) => router.push(href),
      print: (node) => pushLine(node),
      setTheme: (name: string) => {
        if (typeof document === "undefined") return;
        if (name === "crt") document.body.classList.add("crt");
        else document.body.classList.remove("crt");
      },
    }),
    [cwd, pushLine, router],
  );

  const execute = useCallback(
    (raw: string) => {
      const promptStr = `${cwd}`;
      const trimmed = raw.trim();
      pushLine(
        trimmed ? <span>{trimmed}</span> : <span>&nbsp;</span>,
        promptStr,
      );
      if (!trimmed) return;
      setHistory((h) => [...h, trimmed]);
      setHistoryIndex(-1);
      const [name, ...args] = trimmed.split(/\s+/);
      const cmd = findCommand(name);
      if (!cmd) {
        pushLine(
          <span className="text-[var(--term-danger)]">
            command not found: {name}. Type &apos;help&apos;.
          </span>,
        );
        return;
      }
      const out = cmd.run(args, ctx);
      if (out !== null && out !== undefined) {
        pushLine(<div className="whitespace-pre-wrap">{renderOutput(out)}</div>);
      }
    },
    [cwd, ctx, pushLine],
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = input;
      setInput("");
      execute(value);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next =
        historyIndex === -1
          ? history.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const next = historyIndex + 1;
      if (next >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const matches = commandNames().filter((n) => n.startsWith(input.trim()));
      if (matches.length === 1) setInput(matches[0] + " ");
      else if (matches.length > 1) {
        pushLine(<span>{matches.join("  ")}</span>);
      }
    } else if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      setLines([]);
    } else if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      pushLine(<span>{input}^C</span>, cwd);
      setInput("");
    }
  };

  return (
    <div
      className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--term-border)] bg-black/40">
        <span className="w-3 h-3 rounded-full bg-[var(--term-danger)]/70" />
        <span className="w-3 h-3 rounded-full bg-[var(--term-warn)]/70" />
        <span className="w-3 h-3 rounded-full bg-[var(--term-prompt)]/70" />
        <span className="ml-3 text-xs text-[var(--term-muted)]">
          visitor@{SITE.handle}: {cwd}
        </span>
      </div>
      <div
        ref={scrollRef}
        className="px-4 py-3 h-[420px] md:h-[480px] overflow-y-auto font-mono text-sm leading-relaxed"
        role="region"
        aria-label="interactive terminal"
        aria-live="polite"
      >
        {lines.map((l) => (
          <div key={l.id} className="text-[var(--term-fg)]">
            {l.prompt !== undefined && <Prompt cwd={l.prompt} dim />}
            <span className="whitespace-pre-wrap break-words">
              {renderOutput(l.output)}
            </span>
          </div>
        ))}
        {!booting && (
          <div className="flex items-center text-[var(--term-fg)]">
            <Prompt cwd={cwd} />
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              spellCheck={false}
              autoCapitalize="none"
              autoCorrect="off"
              aria-label="terminal input"
              className="flex-1 bg-transparent outline-none border-none text-[var(--term-fg)] font-mono caret-transparent"
            />
            {focused && (
              <span
                className="caret"
                style={{
                  marginLeft: `-${input.length}ch`,
                  transform: `translateX(${input.length}ch)`,
                }}
              />
            )}
          </div>
        )}
      </div>
      <div className="px-4 py-2 border-t border-[var(--term-border)] bg-black/30 text-[10px] text-[var(--term-muted)] font-mono flex flex-wrap gap-x-4 gap-y-1">
        <span>help</span>
        <span>ls</span>
        <span>projects</span>
        <span>open about</span>
        <span>resume</span>
        <span>↑/↓ history · tab complete · ctrl+l clear</span>
      </div>
    </div>
  );
}

// Avoid 'unused' lint warnings on imports
export { commands };
