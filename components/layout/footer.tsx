import Link from "next/link";

import { footerContent, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-14 rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(17,17,18,0.94),rgba(12,12,13,0.98))] px-6 py-10 shadow-[0_26px_80px_rgba(0,0,0,0.32)] md:px-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--accent-soft)]">
            {footerContent.eyebrow}
          </p>
          <p className="max-w-xl text-sm leading-7 text-[var(--text-soft)]">{footerContent.body}</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--text-soft)]">
          {siteConfig.footerLinks.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-[var(--text)]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
