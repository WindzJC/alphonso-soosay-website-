import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  aside?: ReactNode;
  className?: string;
};

export function PageHero({ eyebrow, title, body, aside, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-6 md:py-8",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(193,149,77,0.55),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="max-w-3xl space-y-4">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--accent-soft)]">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl leading-[0.95] tracking-[-0.04em] text-[var(--text)] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-[var(--text-soft)] md:text-lg">
            {body}
          </p>
        </div>
        {aside ? (
          <div className="max-w-md border-l border-[rgba(193,149,77,0.26)] pl-5 text-sm leading-7 text-[var(--text-soft)] lg:ml-auto">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
