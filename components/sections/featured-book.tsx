import { ArrowUpRight, BookOpenText } from "lucide-react";

import { featuredBook, featuredBookContent } from "@/content/site";

import { Button } from "../ui/button";
import { PlaceholderImage } from "../ui/placeholder-image";
import { Section } from "../ui/section";

import { BookDetails } from "./book-details";

export function FeaturedBook() {
  return (
    <Section
      eyebrow={featuredBookContent.eyebrow}
      title={featuredBookContent.title}
      body={featuredBookContent.body}
    >
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[320px]">
            <PlaceholderImage
              src={featuredBook.coverSrc}
              alt={featuredBook.coverAlt}
              label={featuredBook.coverLabel}
              aspect="portrait"
              className="mx-auto"
            />
          </div>
        </div>

        <div className="max-w-3xl space-y-8">
          <div className="border-b border-white/10 pb-8">
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
              {featuredBookContent.publishedWorkLabel}
            </p>
            <h3 className="mt-4 font-display text-3xl leading-tight text-[var(--text)] sm:text-4xl">
              {featuredBook.title}
            </h3>
            <p className="mt-3 text-lg leading-8 text-[var(--text-soft)]">{featuredBook.subtitle}</p>
            <div className="mt-6 flex items-start gap-3">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(193,149,77,0.14)] text-[var(--accent-soft)]">
                <BookOpenText className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <p className="text-[0.72rem] uppercase tracking-[0.3em] text-[var(--accent-soft)]">
                  {featuredBookContent.scopeEyebrow}
                </p>
                <h3 className="mt-1 text-xl font-medium text-[var(--text)]">
                  {featuredBookContent.scopeTitle}
                </h3>
                <p className="text-sm leading-8 text-[var(--text-soft)]">{featuredBookContent.scopeBody}</p>
              </div>
            </div>
          </div>

          <BookDetails />

          <div className="border-t border-white/10 pt-7">
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-[var(--accent-soft)]">
              Core Topics
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {featuredBook.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-[rgba(193,149,77,0.28)] bg-[rgba(193,149,77,0.08)] px-4 py-2 text-sm text-[var(--text-soft)]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-7">
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-[var(--accent-soft)]">
              Retail Links
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {featuredBook.retailerLinks.map((link) => (
                <Button key={link.label} href={link.href} external variant="secondary">
                  {link.label} <ArrowUpRight className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
