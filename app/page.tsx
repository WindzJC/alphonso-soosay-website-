import { AboutPreview } from "@/components/sections/about-preview";
import { AudienceCards } from "@/components/sections/audience-cards";
import { ContactCTA } from "@/components/sections/contact-cta";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { FeaturedBook } from "@/components/sections/featured-book";
import { Hero } from "@/components/sections/hero";
import { LearningOutcomes } from "@/components/sections/learning-outcomes";
import { MediaCard } from "@/components/sections/media-card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { homeMediaPreviewContent, mediaLinks, seo } from "@/content/site";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: seo.home.title,
  description: seo.home.description,
  path: "/",
});

export default function HomePage() {
  return (
    <div className="space-y-14 md:space-y-24">
      <Hero />
      <CredibilityStrip />
      <FeaturedBook />
      <AudienceCards />
      <LearningOutcomes />
      <AboutPreview />
      <Section
        eyebrow={homeMediaPreviewContent.eyebrow}
        title={homeMediaPreviewContent.title}
        body={homeMediaPreviewContent.body}
      >
        <div className="grid gap-x-10 gap-y-8 lg:grid-cols-2">
          {mediaLinks.map((item) => (
            <MediaCard key={item.title} title={item.title} body={item.body} href={item.href} />
          ))}
        </div>
        <div className="mt-6">
          <Button href="/media" variant="secondary">
            {homeMediaPreviewContent.buttonLabel}
          </Button>
        </div>
      </Section>
      <ContactCTA />
    </div>
  );
}
