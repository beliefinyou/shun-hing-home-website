import Image from "next/image";
import { ArrowDown } from "lucide-react";

import { ActionLink } from "@/components/ui/ActionLink";
import { ContactAction } from "@/components/ui/ContactAction";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="paper-grain overflow-hidden">
      <div className="container-shell grid min-h-[calc(100svh-var(--header-height))] items-stretch gap-0 pb-5 pt-7 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:pb-10 lg:pt-9">
        <div className="flex flex-col justify-between pb-10 pt-2 lg:pb-3 lg:pr-7 lg:pt-7">
          <div>
            <div className="flex items-center gap-4 text-[0.68rem] font-semibold tracking-[0.2em] text-muted">
              <span className="h-px w-8 bg-wood" />
              <span>{siteConfig.name}</span>
            </div>
            <h1 className="display-title mt-8 text-ink">
              <span className="block whitespace-nowrap">室內設計</span>
              <span className="block whitespace-nowrap text-muted">
                及全屋裝修
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-[0.95rem] leading-8 text-muted">
              {siteConfig.summary}
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-col gap-3 sm:flex-row">
              <ContactAction
                channel="whatsapp"
                intent="measure"
                label="預約免費上門度尺及諮詢"
                className="px-6"
              />
              <ActionLink href="/portfolio" variant="secondary">
                瀏覽工程作品
              </ActionLink>
            </div>
            <div className="mt-9 grid grid-cols-3 border-t border-line pt-5 text-[0.68rem] tracking-[0.08em] text-muted">
              <span>室內設計</span>
              <span className="border-l border-line pl-4">全屋裝修</span>
              <span className="border-l border-line pl-4">家具訂製</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[34rem] lg:min-h-[38rem]">
          <div className="absolute inset-y-0 right-0 w-full overflow-hidden bg-sand">
            <Image
              src={siteConfig.heroImage.src}
              alt={siteConfig.heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-ink/5" />
          </div>

          <div className="absolute bottom-5 left-5 max-w-[17rem] bg-paper p-5 text-ink shadow-[0_16px_50px_rgb(55_55_55_/_0.12)] sm:bottom-7 sm:left-7">
            <p className="text-[0.63rem] font-semibold tracking-[0.18em] text-muted">
              一站式家居服務
            </p>
            <p className="mt-2 font-display text-xl leading-snug">
              設計、家具、地板及施工
            </p>
            <a
              href={siteConfig.heroImage.source}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[0.55rem] text-muted/70 underline decoration-line underline-offset-4 hover:text-ink"
            >
              空間風格示意・圖片來源 Unsplash
            </a>
          </div>

          <a
            href="#brand-introduction"
            aria-label="向下瀏覽品牌介紹"
            className="absolute bottom-7 right-5 hidden size-12 place-items-center border border-paper/50 bg-ink/15 text-paper backdrop-blur-md transition-colors hover:bg-paper hover:text-ink md:grid lg:right-7"
          >
            <ArrowDown aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
