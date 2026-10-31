import {
  CircleDollarSign,
  Hammer,
  Headphones,
  Layers3,
  PencilRuler,
  ShieldCheck,
} from "lucide-react";

import { SectionTitle } from "@/components/ui/SectionTitle";

const features = [
  {
    icon: Layers3,
    title: "一站式家居服務",
    description:
      "設計、裝修、家具及地面工程，可透過同一團隊整合安排。",
  },
  {
    icon: CircleDollarSign,
    title: "合理價格及高性價比",
    description:
      "先了解需求及工程範圍，再按實際內容提供個別報價。",
  },
  {
    icon: ShieldCheck,
    title: "重視施工及材料品質",
    description:
      "兼顧材料選擇、施工細節與長遠耐用程度。",
  },
  {
    icon: PencilRuler,
    title: "個人化設計與訂製",
    description:
      "由生活習慣、收納需要及空間條件出發，制定合用方案。",
  },
  {
    icon: Hammer,
    title: "專業工程團隊",
    description:
      "按確認方案安排施工，並持續跟進工程進度。",
  },
  {
    icon: Headphones,
    title: "售後跟進及客戶支援",
    description:
      "完工後繼續跟進工程事宜，協助處理客戶遇到的問題。",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-space bg-ink text-paper">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionTitle
            index="04"
            eyebrow="為何選擇順興"
            title="選擇順興的理由"
            description="一站式處理設計、選材、施工及售後跟進。"
            inverse
          />
          <div className="grid border-t border-paper/15 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="border-b border-paper/15 py-7 sm:px-5 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0 lg:px-7 lg:odd:pl-0"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-wood"
                      strokeWidth={1.35}
                    />
                    <span className="text-[0.62rem] tracking-[0.14em] text-paper/30">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl leading-snug text-paper">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-paper/55">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
