import { learningSectionContent } from "@/content/site";

import { Section } from "../ui/section";

export function LearningOutcomes() {
  return (
    <Section
      eyebrow={learningSectionContent.eyebrow}
      title={learningSectionContent.title}
      body={learningSectionContent.body}
    >
      <div className="grid gap-x-10 gap-y-8 lg:grid-cols-3">
        {learningSectionContent.items.map((item, index) => (
          <div key={item.title} className="border-t border-white/10 pt-5">
            <p className="inline-flex rounded-full border border-[rgba(193,149,77,0.22)] bg-[rgba(193,149,77,0.08)] px-3 py-1 text-[0.72rem] font-medium text-[var(--accent-soft)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-2xl font-medium text-[var(--text)]">{item.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-soft)]">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
