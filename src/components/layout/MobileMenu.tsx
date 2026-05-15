"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden relative z-50 inline-flex items-center justify-center w-10 h-10 rounded-md text-[var(--fg-soft)] hover:bg-[var(--bg-muted)] active:bg-[var(--bg-deep)] transition-colors"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {open ? (
            <>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </>
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 top-16 bg-black/40 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-down panel */}
          <div
            id="mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="md:hidden fixed left-0 right-0 top-16 z-40 bg-[var(--bg)] border-b border-[var(--border)] shadow-lg animate-slide-down"
          >
            <nav className="mx-auto max-w-4xl px-5 py-6 flex flex-col">
              {SITE.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-[var(--fg-soft)] hover:text-[var(--accent)] py-3 border-b border-[var(--border)] capitalize"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={SITE.resumeUrl}
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[var(--bg)] font-semibold h-11 rounded-full"
              >
                Download résumé
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
