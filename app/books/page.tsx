import { BookEditions } from "@/components/sections/book-editions";
import { FeaturedBook } from "@/components/sections/featured-book";
import { PageHero } from "@/components/sections/page-hero";
import { TopicGrid } from "@/components/sections/topic-grid";
import { Section } from "@/components/ui/section";
import { booksPageContent, seo } from "@/content/site";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: seo.books.title,
  description: seo.books.description,
  path: "/books",
});

export default function BooksPage() {
  return (
    <div className="space-y-14 md:space-y-20">
      <PageHero
        eyebrow={booksPageContent.eyebrow}
        title={booksPageContent.title}
        body={booksPageContent.body}
      />

      <FeaturedBook />
      <BookEditions />

      <Section
        eyebrow={booksPageContent.topicsEyebrow}
        title={booksPageContent.topicsTitle}
        body={booksPageContent.topicsBody}
      >
        <TopicGrid />
      </Section>
    </div>
  );
}
