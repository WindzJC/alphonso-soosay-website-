import Image from "next/image";

import { bookEditions, bookEditionsContent } from "@/content/site";

import { Button } from "../ui/button";
import { Section } from "../ui/section";

export function BookEditions() {
  return (
    <Section
      eyebrow={bookEditionsContent.eyebrow}
      title={bookEditionsContent.title}
      body={bookEditionsContent.body}
    >
      <div className="grid gap-8 xl:grid-cols-2">
        {bookEditions.map((edition) => (
          <article
            key={`${edition.publisher}-${edition.isbn13}`}
            className="flex h-full flex-col rounded-[2rem] bg-[rgba(255,255,255,0.025)] p-6 ring-1 ring-white/8 shadow-[0_22px_60px_rgba(0,0,0,0.18)]"
          >
            <div className="flex justify-center pb-6">
              <div className="w-full max-w-[220px] rounded-[1.6rem] border border-[rgba(193,149,77,0.24)] bg-[rgba(193,149,77,0.06)] p-4 shadow-[0_20px_52px_rgba(0,0,0,0.18)]">
                <div className="overflow-hidden rounded-[1.15rem] border border-white/8 bg-white">
                  <Image
                    src={edition.coverSrc}
                    alt={edition.coverAlt}
                    width={640}
                    height={640}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col">
              <div>
                <h3 className="font-display text-xl leading-tight text-[var(--text)] sm:text-[1.7rem]">
                  {edition.title}
                </h3>

                <dl className="mt-5 grid gap-x-5 gap-y-4 border-t border-white/8 pt-5 text-sm leading-7 text-[var(--text-soft)] sm:grid-cols-2">
                  <div>
                    <dt className="font-medium text-[var(--text)]">{bookEditionsContent.publisherLabel}</dt>
                    <dd className="mt-1">{edition.publisher}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[var(--text)]">{bookEditionsContent.publishedLabel}</dt>
                    <dd className="mt-1">{edition.published}</dd>
                  </div>
                  {"format" in edition ? (
                    <div>
                      <dt className="font-medium text-[var(--text)]">{bookEditionsContent.formatLabel}</dt>
                      <dd className="mt-1">{edition.format}</dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="font-medium text-[var(--text)]">{bookEditionsContent.pagesLabel}</dt>
                    <dd className="mt-1">{edition.pages}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[var(--text)]">{bookEditionsContent.isbn13Label}</dt>
                    <dd className="mt-1 break-words">{edition.isbn13}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[var(--text)]">{bookEditionsContent.isbn10Label}</dt>
                    <dd className="mt-1 break-words">{edition.isbn10}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-5 border-t border-white/8 pt-5">
                <p className="font-medium text-[var(--text)]">{bookEditionsContent.topicsLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {edition.topics.map((topic) => (
                    <span
                      key={`${edition.isbn13}-${topic}`}
                      className="rounded-full border border-[rgba(193,149,77,0.25)] bg-[rgba(193,149,77,0.08)] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[var(--text-soft)]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {"links" in edition && edition.links.length > 0 ? (
                <div className="mt-auto border-t border-white/8 pt-5">
                  <p className="font-medium text-[var(--text)]">{bookEditionsContent.linksLabel}</p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {edition.links.map((link) => (
                      <Button
                        key={`${edition.isbn13}-${link.label}`}
                        href={link.href}
                        external
                        variant="secondary"
                      >
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
