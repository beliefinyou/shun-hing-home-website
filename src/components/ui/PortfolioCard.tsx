"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { useState } from "react";

import { getPortfolioCategoryLabel } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/types/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  onOpen: () => void;
  priority?: boolean;
}

export function PortfolioCard({
  item,
  onOpen,
  priority = false,
}: PortfolioCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <article className="mb-5 break-inside-avoid">
      <button
        type="button"
        onClick={onOpen}
        className="group relative block w-full overflow-hidden bg-sand text-left"
        aria-label={`放大查看：${item.title}`}
      >
        {!isLoaded ? (
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-pulse bg-sand"
          />
        ) : null}
        <Image
          src={item.image}
          alt={item.title}
          width={item.width}
          height={item.height}
          priority={priority}
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 100vw"
          className="relative h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          onLoad={() => setIsLoaded(true)}
        />
        <span
          className={cn(
            "absolute left-4 top-4 bg-paper/92 px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.12em] text-ink backdrop-blur-sm",
          )}
        >
          {item.isPlaceholder ? "示意圖片" : getPortfolioCategoryLabel(item.category)}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent opacity-80" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-paper">
          <div>
            <p className="text-[0.62rem] tracking-[0.14em] text-paper/70">
              {getPortfolioCategoryLabel(item.category)}
            </p>
            <p className="mt-1 font-display text-xl leading-snug">
              {item.title}
            </p>
          </div>
          <span className="grid size-9 shrink-0 place-items-center border border-paper/45 bg-ink/10 backdrop-blur-md transition-colors group-hover:bg-paper group-hover:text-ink">
            <Maximize2
              aria-hidden="true"
              className="size-3.5"
              strokeWidth={1.5}
            />
          </span>
        </div>
      </button>
    </article>
  );
}
