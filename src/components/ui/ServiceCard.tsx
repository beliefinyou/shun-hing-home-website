"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { ImagePreviewLightbox } from "@/components/ui/ImagePreviewLightbox";
import type { Service } from "@/types/service";

export function ServiceCard({ service }: { service: Service }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <article className="group">
      <div className="relative aspect-[6/4] overflow-hidden bg-sand">
        <button
          type="button"
          onClick={() => setIsPreviewOpen(true)}
          className="group/image relative block size-full cursor-zoom-in"
          aria-label={`放大查看：${service.title}`}
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-65" />
          <span className="absolute left-5 top-5 grid size-9 place-items-center border border-paper/45 bg-paper/15 text-[0.68rem] tracking-[0.12em] text-paper backdrop-blur-md">
            0{service.order}
          </span>
          <span className="absolute right-5 top-5 bg-paper/90 px-2.5 py-1 text-[0.58rem] font-semibold tracking-[0.1em] text-ink backdrop-blur-sm">
            空間示意
          </span>
        </button>
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-5 border-b border-line py-6">
        <div>
          <Link href={`/services/${service.slug}`} className="block">
            <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted">
              {service.eyebrow}
            </p>
            <h3 className="mt-2 font-display text-[1.55rem] font-medium tracking-[-0.025em] text-ink transition-colors group-hover:text-muted">
              {service.title}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
              {service.summary}
            </p>
          </Link>
        </div>
        <Link
          href={`/services/${service.slug}`}
          aria-label={`查看${service.title}服務詳情`}
          className="mt-1 grid size-11 place-items-center border border-line text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
        >
          <ArrowUpRight
            aria-hidden="true"
            className="size-4"
            strokeWidth={1.5}
          />
        </Link>
      </div>

      <ImagePreviewLightbox
        src={service.image}
        alt={service.imageAlt}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </article>
  );
}
