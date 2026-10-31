"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, LoaderCircle, X } from "lucide-react";

import { getPortfolioCategoryLabel } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/types/portfolio";

interface ImageLightboxProps {
  items: PortfolioItem[];
  initialIndex: number;
  onClose: () => void;
}

export function ImageLightbox({
  items,
  initialIndex,
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const pointerStart = useRef<number | null>(null);
  const current = items[currentIndex];

  const showPrevious = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((index) => (index - 1 + items.length) % items.length);
  }, [items.length]);

  const showNext = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((index) => (index + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        showPrevious();
      }
      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, showNext, showPrevious]);

  if (!current) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-ink/96 text-paper backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`圖片檢視：${current.title}`}
      onClick={onClose}
    >
      <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-paper/15 px-4 sm:px-7">
        <p className="text-[0.68rem] tracking-[0.9em] text-paper/55">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(items.length).padStart(2, "0")}
        </p>
        <p className="hidden text-[0.65rem] tracking-[0.16em] text-paper/45 sm:block">
          {current.isPlaceholder
            ? "示意圖片・待替換為順興工程實拍"
            : getPortfolioCategoryLabel(current.category)}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="grid size-11 place-items-center border border-paper/25 transition-colors hover:bg-paper hover:text-ink"
          aria-label="關閉圖片檢視"
        >
          <X aria-hidden="true" className="size-5" strokeWidth={1.4} />
        </button>
      </div>

      <div
        className="relative min-h-0 flex-1"
        onClick={(event) => event.stopPropagation()}
        onPointerDown={(event) => {
          pointerStart.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (pointerStart.current === null) {
            return;
          }
          const distance = event.clientX - pointerStart.current;
          pointerStart.current = null;
          if (Math.abs(distance) < 55) {
            return;
          }
          if (distance > 0) {
            showPrevious();
          } else {
            showNext();
          }
        }}
      >
        <div className="absolute inset-0 m-auto flex max-h-[calc(100%-2rem)] max-w-[calc(100%-1rem)] items-center justify-center sm:max-w-[calc(100%-9rem)]">
          {isLoading ? (
            <LoaderCircle
              aria-label="圖片載入中"
              className="absolute z-10 size-7 animate-spin text-paper/70"
            />
          ) : null}
          <Image
            key={current.id}
            src={current.image}
            alt={current.title}
            width={current.width}
            height={current.height}
            sizes="92vw"
            className={cn(
              "max-h-[calc(100svh-12rem)] w-auto max-w-full object-contain transition-opacity duration-300",
              isLoading ? "opacity-0" : "opacity-100",
            )}
            onLoad={() => setIsLoading(false)}
          />
        </div>

        <button
          type="button"
          onClick={showPrevious}
          aria-label="上一張圖片"
          className="absolute left-3 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center border border-paper/30 bg-ink/25 backdrop-blur-md transition-colors hover:bg-paper hover:text-ink sm:left-7 sm:size-12"
        >
          <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.4} />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="下一張圖片"
          className="absolute right-3 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center border border-paper/30 bg-ink/25 backdrop-blur-md transition-colors hover:bg-paper hover:text-ink sm:right-7 sm:size-12"
        >
          <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.4} />
        </button>
      </div>

      <div className="shrink-0 border-t border-paper/15 px-4 py-4 sm:px-7">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.64rem] tracking-[0.14em] text-paper/45">
              {getPortfolioCategoryLabel(current.category)}
            </p>
            <h2 className="mt-1 font-display text-xl">{current.title}</h2>
            <p className="mt-1 max-w-xl text-xs leading-5 text-paper/55">
              {current.description}
            </p>
          </div>
          {current.imageSource ? (
            <a
              href={current.imageSource}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-[0.62rem] tracking-[0.08em] text-paper/45 underline decoration-paper/25 underline-offset-4 hover:text-paper"
              onClick={(event) => event.stopPropagation()}
            >
              圖片來源：{current.imageSourceLabel}
              {current.isPlaceholder ? "・示意用途" : ""}
            </a>
          ) : (
            <span className="text-[0.62rem] tracking-[0.08em] text-paper/45">
              圖片來源：{current.imageSourceLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
