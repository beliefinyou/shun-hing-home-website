"use client";

import Image from "next/image";
import { LoaderCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

interface ImagePreviewLightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImagePreviewLightbox({
  src,
  alt,
  isOpen,
  onClose,
}: ImagePreviewLightboxProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setIsLoading(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[110] grid place-items-center bg-ink/96 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`放大查看：${alt}`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="關閉放大圖片"
        className="absolute right-4 top-4 z-10 grid size-11 place-items-center border border-paper/30 bg-ink/30 text-paper backdrop-blur-md transition-colors hover:bg-paper hover:text-ink sm:right-7 sm:top-7"
      >
        <X aria-hidden="true" className="size-5" strokeWidth={1.4} />
      </button>

      <div
        className="relative h-[calc(100svh-2rem)] w-full max-w-[92rem] sm:h-[calc(100svh-4rem)]"
        onClick={(event) => event.stopPropagation()}
      >
        {isLoading ? (
          <LoaderCircle
            aria-label="圖片載入中"
            className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 animate-spin text-paper/70"
          />
        ) : null}
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="95vw"
          className="object-contain"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}
