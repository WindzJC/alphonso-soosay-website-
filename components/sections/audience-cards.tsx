import { audienceSectionContent } from "@/content/site";

import { Section } from "../ui/section";

export function AudienceCards() {
  return (
    <Section
      eyebrow={audienceSectionContent.eyebrow}
      title={audienceSectionContent.title}
      body={audienceSectionContent.body}
    >
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {audienceSectionContent.cards.map((item) => (
          <div key={item.title} className="border-t border-white/10 pt-5">
            <h3 className="text-2xl font-medium text-[var(--text)]">{item.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-soft)]">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
