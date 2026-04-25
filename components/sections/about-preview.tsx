import { ArrowRight } from "lucide-react";

import { aboutPreviewContent, featuredBook } from "@/content/site";

import { Button } from "../ui/button";
import { PlaceholderImage } from "../ui/placeholder-image";
import { Section } from "../ui/section";

export function AboutPreview() {
  return (
    <Section
      eyebrow={aboutPreviewContent.eyebrow}
      title={aboutPreviewContent.title}
      body={aboutPreviewContent.body}
    >
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="mx-auto w-full max-w-[420px]">
          <PlaceholderImage
            src={featuredBook.authorPortraitSrc}
            alt={featuredBook.authorPortraitAlt}
            label={aboutPreviewContent.portraitLabel}
            caption={aboutPreviewContent.portraitCaption}
            className="min-h-[420px]"
          />
        </div>
        <div className="max-w-2xl border-t border-white/10 pt-6">
          <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]">
            {aboutPreviewContent.scopeEyebrow}
          </p>
          <h3 className="mt-3 font-display text-3xl leading-tight text-[var(--text)]">
            {aboutPreviewContent.scopeTitle}
          </h3>
          <p className="mt-4 text-sm leading-8 text-[var(--text-soft)]">{aboutPreviewContent.scopeBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/about">
              {aboutPreviewContent.primaryCta} <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary">
              {aboutPreviewContent.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
