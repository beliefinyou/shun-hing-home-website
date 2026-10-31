import Link from "next/link";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  inverse?: boolean;
  compact?: boolean;
}

export function SiteLogo({
  inverse = false,
  compact = false,
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3",
        inverse ? "text-paper" : "text-ink",
      )}
      aria-label={`${siteConfig.name}首頁`}
    >
      <span
        className={cn(
          "font-display font-semibold tracking-[0.08em]",
          compact ? "text-[1.55rem]" : "text-[1.85rem]",
        )}
      >
        {siteConfig.shortName}
      </span>
      <span
        className={cn(
          "block h-7 w-px",
          inverse ? "bg-paper/35" : "bg-line",
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "grid gap-0.5 text-[0.6rem] leading-none tracking-[0.16em]",
          inverse ? "text-paper/70" : "text-muted",
        )}
      >
        <span>家居裝飾</span>
        <span>公司</span>
      </span>
    </Link>
  );
}
