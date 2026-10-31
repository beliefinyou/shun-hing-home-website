import Image from "next/image";
import { CalendarClock, MapPin } from "lucide-react";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";
import { store } from "@/data/store";

export function StoreSection() {
  return (
    <section className="section-space bg-sand/50">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative min-h-[28rem] overflow-hidden bg-sand lg:min-h-[41rem]">
            <Image
              src={store.image}
              alt={store.imageAlt}
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 bg-paper px-4 py-3 text-ink">
              <p className="text-[0.62rem] tracking-[0.13em] text-muted">
                店鋪空間示意
              </p>
              <p className="mt-1 font-display text-lg">順興店鋪</p>
              <a
                href={store.imageSource}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-[0.58rem] text-muted underline decoration-line underline-offset-4 hover:text-ink"
              >
                圖片來源：Unsplash・示意用途
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between py-2 lg:py-8">
            <div>
              <SectionTitle
                index="03"
                eyebrow="店鋪"
                title="順興店鋪"
                description="店內設有家具、裝修材料、地板及室內設計樣板，可到店了解產品及討論需求。"
              />

              <div className="mt-9 grid gap-0 border-t border-line sm:grid-cols-2">
                <div className="border-b border-line py-5 sm:border-r sm:pr-5">
                  <div className="flex items-center gap-2 text-[0.66rem] tracking-[0.12em] text-muted">
                    <MapPin
                      aria-hidden="true"
                      className="size-3.5"
                      strokeWidth={1.5}
                    />
                    所在地區
                  </div>
                  <p className="mt-2 text-sm text-ink">
                    {store.district ?? "待公司補充"}
                  </p>
                </div>
                <div className="border-b border-line py-5 sm:pl-5">
                  <div className="flex items-center gap-2 text-[0.66rem] tracking-[0.12em] text-muted">
                    <MapPin
                      aria-hidden="true"
                      className="size-3.5"
                      strokeWidth={1.5}
                    />
                    附近地標
                  </div>
                  <p className="mt-2 text-sm text-ink">
                    {store.nearbyLandmark ?? "待公司補充"}
                  </p>
                </div>
                <div className="border-b border-line py-5 sm:border-r sm:pr-5">
                  <div className="flex items-center gap-2 text-[0.66rem] tracking-[0.12em] text-muted">
                    <CalendarClock
                      aria-hidden="true"
                      className="size-3.5"
                      strokeWidth={1.5}
                    />
                    一般營業時間
                  </div>
                  <p className="mt-2 text-sm text-ink">
                    {siteConfig.hours.time}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    {siteConfig.hours.days ?? "營業日待補充"}
                  </p>
                </div>
                <div className="border-b border-line py-5 sm:pl-5">
                  <p className="text-[0.66rem] tracking-[0.12em] text-muted">
                    詳細地址
                  </p>
                  <p className="mt-2 text-sm text-ink">待公司提供</p>
                  <p className="mt-1 text-xs text-muted">
                    到訪前可先聯絡確認
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-paper p-5">
                <p className="text-xs leading-6 text-muted">
                  {store.note}
                </p>
                <p className="mt-2 text-xs leading-6 text-muted/70">
                  {siteConfig.hours.note}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
