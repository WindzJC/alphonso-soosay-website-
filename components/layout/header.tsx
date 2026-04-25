"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { headerContent, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50">
      <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[rgba(10,10,11,0.82)] px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="min-w-0 rounded-2xl px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/55"
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[var(--accent-soft)]">
              {headerContent.eyebrow}
            </p>
            <p className="mt-1 text-base font-medium text-[var(--text)] sm:text-lg">
              {headerContent.title}
            </p>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
            {siteConfig.navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition",
                    active
                      ? "bg-[rgba(193,149,77,0.15)] text-[var(--accent-soft)]"
                      : "text-[var(--text-soft)] hover:text-[var(--text)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href="/books"
              variant="secondary"
              className="hidden md:inline-flex"
            >
              {headerContent.ctaLabel}
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[var(--panel)] text-[var(--text)] lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <nav
            id="mobile-nav"
            className="mt-4 grid gap-2 border-t border-[color:var(--line)] pt-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            {siteConfig.navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm transition",
                    active
                      ? "bg-[rgba(193,149,77,0.15)] text-[var(--accent-soft)]"
                      : "bg-[var(--panel)] text-[var(--text)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
