import { ArrowRight, AudioLines } from "lucide-react";

import { featuredBook, heroContent } from "@/content/site";

import { Button } from "../ui/button";
import { PlaceholderImage } from "../ui/placeholder-image";

export function Hero() {
  return (
    <section className="relative grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.82fr)] lg:items-center">
      <div className="space-y-8 md:space-y-9">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(193,149,77,0.18)] bg-[rgba(193,149,77,0.08)] px-4 py-2 text-sm text-[var(--accent-soft)]">
          <AudioLines className="h-4 w-4" />
          {heroContent.badge}
        </div>

        <div className="max-w-[44rem] space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-[var(--text-muted)]">
            {heroContent.eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-[0.94] tracking-[-0.05em] text-[var(--text)] sm:text-6xl md:text-7xl">
            {heroContent.title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)] md:text-xl">{heroContent.body}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href="/books">
            {heroContent.primaryCta} <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/media" variant="secondary">
            {heroContent.secondaryCta}
          </Button>
        </div>

        <div className="grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="space-y-3">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--accent-soft)]">
              {heroContent.featuredTitleLabel}
            </p>
            <p className="text-2xl font-medium text-[var(--text)]">{featuredBook.title}</p>
            <p className="text-sm leading-7 text-[var(--text-soft)]">{featuredBook.subtitle}</p>
          </div>
          <div className="space-y-3">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--accent-soft)]">
              {heroContent.primaryTopicsLabel}
            </p>
            <p className="text-sm leading-7 text-[var(--text-soft)]">
              {featuredBook.topics.join(", ")}
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <div className="absolute inset-x-8 inset-y-10 rounded-[3rem] bg-[radial-gradient(circle,rgba(193,149,77,0.18),transparent_66%)] blur-3xl" />
        <div className="relative w-full max-w-[350px] sm:max-w-[390px]">
          <div className="pointer-events-none absolute -inset-5 rounded-[2.9rem] border border-[rgba(193,149,77,0.14)]" />
          <PlaceholderImage
            src={featuredBook.coverSrc}
            alt={featuredBook.coverAlt}
            label={featuredBook.coverLabel}
            aspect="portrait"
            className="mx-auto"
            frameClassName="rounded-[2.4rem] shadow-[0_34px_100px_rgba(0,0,0,0.42)]"
          />
        </div>
      </div>
    </section>
  );
}
