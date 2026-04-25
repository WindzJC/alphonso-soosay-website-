import { ArrowRight } from "lucide-react";

import { contactCtaContent } from "@/content/site";

import { Button } from "../ui/button";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-8 md:py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(193,149,77,0.52),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--accent-soft)]">
            {contactCtaContent.eyebrow}
          </p>
          <h2 className="font-display text-3xl leading-tight text-[var(--text)] sm:text-4xl">
            {contactCtaContent.title}
          </h2>
          <p className="text-base leading-8 text-[var(--text-soft)]">{contactCtaContent.body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">
            {contactCtaContent.primaryCta} <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/media" variant="secondary">
            {contactCtaContent.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
