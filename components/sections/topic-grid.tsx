import { AudioLines, Radio, Waves } from "lucide-react";

import { featuredBook, topicGridContent } from "@/content/site";

const icons = [AudioLines, Radio, Waves];

export function TopicGrid() {
  return (
    <div className="grid gap-x-8 gap-y-8 md:grid-cols-3">
      {featuredBook.topics.map((topic, index) => {
        const Icon = icons[index] ?? AudioLines;

        return (
          <div key={topic} className="border-t border-white/10 pt-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(193,149,77,0.14)] text-[var(--accent-soft)]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-2xl font-medium text-[var(--text)]">{topic}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{topicGridContent.description}</p>
          </div>
        );
      })}
    </div>
  );
}
