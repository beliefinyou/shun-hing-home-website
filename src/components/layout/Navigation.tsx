"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navigation({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={mobile ? "手機版主選單" : "主選單"}
      className={cn(
        mobile ? "grid gap-1" : "hidden items-center gap-8 lg:flex",
      )}
    >
      {navigation.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "relative transition-colors duration-200",
              mobile
                ? "flex min-h-14 items-center justify-between border-b border-line/80 font-display text-[1.55rem]"
                : "py-2 text-[0.82rem] tracking-[0.08em]",
              isActive
                ? mobile
                  ? "text-ink"
                  : "text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-ink"
                : "text-muted hover:text-ink",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
            {mobile ? (
              <span className="text-[0.72rem] tracking-[0.15em] text-muted">
                0{navigation.findIndex((entry) => entry.href === item.href) + 1}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
