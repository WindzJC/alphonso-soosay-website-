import { PageHero } from "@/components/sections/page-hero";
import { TopicGrid } from "@/components/sections/topic-grid";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Section } from "@/components/ui/section";
import { aboutPageContent, featuredBook, seo } from "@/content/site";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: seo.about.title,
  description: seo.about.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-14 md:space-y-20">
      <PageHero
        eyebrow={aboutPageContent.eyebrow}
        title={aboutPageContent.title}
        body={aboutPageContent.body}
        aside={<p>{aboutPageContent.aside}</p>}
      />

      <section className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
        <div className="mx-auto w-full max-w-[420px]">
          <PlaceholderImage
            src={featuredBook.authorPortraitSrc}
            alt={featuredBook.authorPortraitAlt}
            label={aboutPageContent.portraitLabel}
            caption={aboutPageContent.portraitCaption}
            className="min-h-[440px]"
          />
        </div>

        <div className="space-y-10">
          <div className="max-w-2xl border-t border-white/10 pt-6">
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]">
              {aboutPageContent.cardEyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--text)]">
              {aboutPageContent.cardTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">{aboutPageContent.cardBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/books">{aboutPageContent.primaryCta}</Button>
              <Button href="/contact" variant="secondary">
                {aboutPageContent.secondaryCta}
              </Button>
            </div>
          </div>

          <Section
            eyebrow={aboutPageContent.focusEyebrow}
            title={aboutPageContent.focusTitle}
            body={aboutPageContent.focusBody}
          >
            <TopicGrid />
          </Section>
        </div>
      </section>
    </div>
  );
}
