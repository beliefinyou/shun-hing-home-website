import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-[0.82rem] font-semibold tracking-[0.08em] transition-colors duration-200",
        variant === "primary" &&
          "bg-ink text-paper hover:bg-wood hover:text-ink",
        variant === "secondary" &&
          "border border-ink/35 text-ink hover:border-ink hover:bg-ink hover:text-paper",
        variant === "text" && "min-h-10 justify-start px-0 text-ink",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        strokeWidth={1.6}
      />
    </Link>
  );
}
