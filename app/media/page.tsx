import { MediaCard } from "@/components/sections/media-card";
import { PageHero } from "@/components/sections/page-hero";
import { BookDetails } from "@/components/sections/book-details";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Section } from "@/components/ui/section";
import { featuredBook, mediaLinks, mediaPageContent, seo } from "@/content/site";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: seo.media.title,
  description: seo.media.description,
  path: "/media",
});

export default function MediaPage() {
  const hasAuthorPortrait = !(
    featuredBook.authorPortraitSrc.startsWith("[") && featuredBook.authorPortraitSrc.endsWith("]")
  );

  return (
    <div className="space-y-14 md:space-y-20">
      <PageHero
        eyebrow={mediaPageContent.eyebrow}
        title={mediaPageContent.title}
        body={mediaPageContent.body}
        aside={
          <p>{mediaPageContent.aside}</p>
        }
      />

      <Section
        eyebrow={mediaPageContent.linksEyebrow}
        title={mediaPageContent.linksTitle}
        body={mediaPageContent.linksBody}
      >
        <div className="grid gap-x-10 gap-y-8 lg:grid-cols-2">
          {mediaLinks.map((item) => (
            <MediaCard key={item.title} title={item.title} body={item.body} href={item.href} />
          ))}
        </div>
      </Section>

      <section className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className={hasAuthorPortrait ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-1" : "grid gap-8"}>
          {hasAuthorPortrait ? (
            <div className="mx-auto w-full max-w-[380px]">
              <PlaceholderImage
                src={featuredBook.authorPortraitSrc}
                alt={featuredBook.authorPortraitAlt}
                label={mediaPageContent.portraitLabel}
                caption={mediaPageContent.portraitCaption}
                className="min-h-[360px]"
              />
            </div>
          ) : null}
          <div className="mx-auto w-full max-w-[320px]">
            <PlaceholderImage
              src={featuredBook.coverSrc}
              alt={featuredBook.coverAlt}
              label={mediaPageContent.coverLabel}
              aspect="portrait"
            />
          </div>
        </div>
        <div className="max-w-3xl space-y-10">
          <BookDetails />
          <div className="border-t border-white/10 pt-7">
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]">
              {mediaPageContent.inquiriesEyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--text)]">
              {mediaPageContent.inquiriesTitle}
            </h2>
            <p className="mt-4 text-sm leading-8 text-[var(--text-soft)]">{mediaPageContent.inquiriesBody}</p>
            <div className="mt-6">
              <Button href="/contact">{mediaPageContent.inquiriesCta}</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
