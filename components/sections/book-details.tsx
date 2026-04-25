import { bookDetailsContent, featuredBook } from "@/content/site";

const details = [
  { label: bookDetailsContent.labels.author, value: featuredBook.author },
  { label: bookDetailsContent.labels.title, value: featuredBook.title },
  { label: bookDetailsContent.labels.subtitle, value: featuredBook.subtitle },
  { label: bookDetailsContent.labels.publisher, value: featuredBook.publisher },
  { label: bookDetailsContent.labels.publishDate, value: featuredBook.publishDate },
  { label: bookDetailsContent.labels.pageCount, value: featuredBook.pageCount },
  { label: bookDetailsContent.labels.isbn13, value: featuredBook.isbn13 },
  { label: bookDetailsContent.labels.isbn10, value: featuredBook.isbn10 },
];

export function BookDetails() {
  return (
    <div className="border-t border-white/10 pt-7">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[var(--accent-soft)]">
        {bookDetailsContent.eyebrow}
      </p>
      <dl className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2">
        {details.map((item) => (
          <div key={item.label} className="border-b border-white/8 pb-4">
            <dt className="text-sm font-medium text-[var(--text)]">{item.label}</dt>
            <dd className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
