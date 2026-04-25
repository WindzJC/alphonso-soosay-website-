import { BookOpenText, Mail } from "lucide-react";

import { contactFormContent } from "@/content/site";

import { Button } from "../ui/button";

export function ContactForm() {
  return (
    <section className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <div className="max-w-md space-y-8">
        <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[var(--accent-soft)]">
          {contactFormContent.panelEyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--text)] md:text-4xl">
          {contactFormContent.panelTitle}
        </h2>
        <p className="text-base leading-8 text-[var(--text-soft)]">{contactFormContent.panelBody}</p>

        <div className="grid gap-5 text-sm text-[var(--text-soft)]">
          {contactFormContent.notes.map((note, index) => {
            const Icon = index === 0 ? Mail : BookOpenText;

            return (
              <div key={note} className="flex items-start gap-3 border-t border-white/10 pt-4">
                <Icon className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-soft)]" />
                <span>{note}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-[2rem] bg-[rgba(255,255,255,0.025)] p-6 ring-1 ring-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:p-8">
        <form
          className="grid gap-4"
          aria-label="Contact form"
          action={contactFormContent.formAction}
          method="post"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-[var(--text-soft)]">
              <span className="font-medium text-[var(--text)]">{contactFormContent.fields.name.label}</span>
              <input
                type="text"
                name="name"
                placeholder={contactFormContent.fields.name.placeholder}
                className="h-11 rounded-2xl border border-[color:var(--line)] bg-[rgba(8,8,9,0.78)] px-4 text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
              />
            </label>
            <label className="grid gap-2 text-sm text-[var(--text-soft)]">
              <span className="font-medium text-[var(--text)]">{contactFormContent.fields.email.label}</span>
              <input
                type="email"
                name="email"
                placeholder={contactFormContent.fields.email.placeholder}
                className="h-11 rounded-2xl border border-[color:var(--line)] bg-[rgba(8,8,9,0.78)] px-4 text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm text-[var(--text-soft)]">
            <span className="font-medium text-[var(--text)]">{contactFormContent.fields.subject.label}</span>
            <input
              type="text"
              name="subject"
              placeholder={contactFormContent.fields.subject.placeholder}
              className="h-11 rounded-2xl border border-[color:var(--line)] bg-[rgba(8,8,9,0.78)] px-4 text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
            />
          </label>
          <label className="grid gap-2 text-sm text-[var(--text-soft)]">
            <span className="font-medium text-[var(--text)]">{contactFormContent.fields.message.label}</span>
            <textarea
              name="message"
              placeholder={contactFormContent.fields.message.placeholder}
              className="min-h-[170px] rounded-[1.5rem] border border-[color:var(--line)] bg-[rgba(8,8,9,0.78)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
            />
          </label>
          <div className="flex flex-wrap gap-3">
            <Button type="submit">{contactFormContent.submitLabel}</Button>
            <Button href="/books" variant="secondary">
              {contactFormContent.secondaryCta}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
