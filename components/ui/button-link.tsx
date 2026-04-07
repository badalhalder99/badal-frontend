import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-primary-500 text-white shadow-[0_12px_36px_rgba(37,99,235,0.35)] hover:bg-primary-400"
      : "border border-white/10 bg-white/5 text-white hover:border-white/25 hover:bg-white/10 light:border-neutral-200 light:bg-white light:text-neutral-950 light:hover:border-neutral-300";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
