import { ArrowUpRight } from "lucide-react";

import { mediaCardContent } from "@/content/site";

import { Button } from "../ui/button";

type MediaCardProps = {
  title: string;
  body: string;
  href: string;
};

export function MediaCard({ title, body, href }: MediaCardProps) {
  return (
    <div className="border-t border-white/10 pt-5">
      <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--accent-soft)]">{mediaCardContent.eyebrow}</p>
      <h3 className="mt-4 text-2xl font-medium text-[var(--text)]">{title}</h3>
      <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-soft)]">{body}</p>
      <div className="mt-5">
        <Button href={href} external variant="secondary">
          {mediaCardContent.buttonLabel} <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
