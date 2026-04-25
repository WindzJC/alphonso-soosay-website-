import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Section({
  eyebrow,
  title,
  body,
  children,
  className,
  contentClassName,
}: SectionProps) {
  return (
    <section className={cn("space-y-8 md:space-y-10", className)}>
      {eyebrow || title || body ? (
        <div className="max-w-[46rem] space-y-4">
          {eyebrow ? (
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--accent-soft)]">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="font-display text-3xl leading-[0.98] tracking-[-0.04em] text-[var(--text)] sm:text-4xl md:text-[3.2rem]">
              {title}
            </h2>
          ) : null}
          {body ? (
            <p className="max-w-3xl text-base leading-8 text-[var(--text-soft)] md:text-lg">
              {body}
            </p>
          ) : null}
        </div>
      ) : null}
      <div className={contentClassName}>{children}</div>
    </section>
  );
}
