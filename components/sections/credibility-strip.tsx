import { credibilityItems } from "@/content/site";

export function CredibilityStrip() {
  return (
    <section className="grid gap-x-8 gap-y-6 border-y border-white/8 py-6 md:grid-cols-2 xl:grid-cols-4">
      {credibilityItems.map((item) => (
        <div key={item.label} className="space-y-2">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--accent-soft)]">
            {item.label}
          </p>
          <p className="text-xl font-medium text-[var(--text)]">{item.value}</p>
        </div>
      ))}
    </section>
  );
}
