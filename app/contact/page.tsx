import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { contactPageContent, seo } from "@/content/site";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: seo.contact.title,
  description: seo.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="space-y-14 md:space-y-20">
      <PageHero
        eyebrow={contactPageContent.eyebrow}
        title={contactPageContent.title}
        body={contactPageContent.body}
      />

      <ContactForm />
    </div>
  );
}
