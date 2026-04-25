import type { ReactNode } from "react";

import { Footer } from "./footer";
import { Header } from "./header";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1180px] flex-col px-5 py-6 md:px-8 md:py-10">
      <a
        href="#main-content"
        className="sr-only rounded-full bg-[var(--accent)] px-4 py-2 text-[var(--bg)] focus:not-sr-only focus:absolute focus:left-5 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1 py-10 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
