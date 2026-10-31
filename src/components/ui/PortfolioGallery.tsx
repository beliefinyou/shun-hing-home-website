"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";

import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { portfolioCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { PortfolioCategory, PortfolioItem } from "@/types/portfolio";

interface PortfolioGalleryProps {
  items: PortfolioItem[];
  showFilters?: boolean;
  limit?: number;
}

type GalleryFilter = PortfolioCategory | "all";

export function PortfolioGallery({
  items,
  showFilters = true,
  limit,
}: PortfolioGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");
  const [displayLimitReady, setDisplayLimitReady] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const availableCategories = useMemo(
    () =>
      portfolioCategories.filter((category) =>
        items.some((item) => item.category === category.value),
      ),
    [items],
  );

  const filteredItems = useMemo(() => {
    const filtered =
      activeFilter === "all"
        ? items
        : items.filter((item) => item.category === activeFilter);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [activeFilter, items, limit]);

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  const setFilter = (filter: GalleryFilter) => {
    if (filter === activeFilter) {
      return;
    }

    setDisplayLimitReady(false);
    setActiveFilter(filter);
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }
    resetTimer.current = setTimeout(() => setDisplayLimitReady(true), 260);
  };

  return (
    <>
      {showFilters ? (
        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="工程作品分類"
        >
          <button
            type="button"
            onClick={() => setFilter("all")}
            aria-pressed={activeFilter === "all"}
            className={cn(
              "min-h-10 shrink-0 border px-4 text-[0.72rem] font-semibold tracking-[0.06em] transition-colors",
              activeFilter === "all"
                ? "border-ink bg-ink text-paper"
                : "border-line text-muted hover:border-ink hover:text-ink",
            )}
          >
            全部作品
          </button>
          {availableCategories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setFilter(category.value)}
              aria-pressed={activeFilter === category.value}
              className={cn(
                "min-h-10 shrink-0 border px-4 text-[0.72rem] font-semibold tracking-[0.06em] transition-colors",
                activeFilter === category.value
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-muted hover:border-ink hover:text-ink",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="relative mt-8 min-h-48">
        {!displayLimitReady ? (
          <div className="absolute inset-0 z-10 grid min-h-48 place-items-center bg-paper/70">
            <div className="flex items-center gap-3 text-xs tracking-[0.08em] text-muted">
              <LoaderCircle
                aria-hidden="true"
                className="size-4 animate-spin"
              />
              正在整理作品
            </div>
          </div>
        ) : null}

        {filteredItems.length ? (
          <div className="masonry-grid">
            {filteredItems.map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                priority={index < 2}
                onOpen={() => setActiveIndex(index)}
              />
            ))}
          </div>
        ) : (
          <div className="grid min-h-56 place-items-center border border-line bg-sand/30 px-6 text-center">
            <p className="text-sm text-muted">
              此分類暫時未有已公開作品，歡迎直接聯絡我們了解相關工程。
            </p>
          </div>
        )}
      </div>

      {activeIndex !== null ? (
        <ImageLightbox
          items={filteredItems}
          initialIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      ) : null}
    </>
  );
}
