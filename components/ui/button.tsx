import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/55",
    variant === "primary" &&
      "bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-[var(--bg)] shadow-[0_18px_44px_rgba(193,149,77,0.18)] hover:brightness-105",
    variant === "secondary" &&
      "border border-[color:var(--line-strong)] bg-[var(--panel)] text-[var(--text)] hover:border-[var(--accent)]/45 hover:text-[var(--accent-soft)]",
    variant === "ghost" && "text-[var(--text-soft)] hover:text-[var(--text)]",
    className,
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, external = false } = props as LinkButtonProps;

    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as NativeButtonProps;

  return (
    <button {...buttonProps} type={type} className={classes}>
      {children}
    </button>
  );
}
