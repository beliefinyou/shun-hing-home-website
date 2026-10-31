import { Check } from "lucide-react";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";

const principles = [
  "一站式家居服務",
  "由設計到施工的整體配套",
  "按實際需要制定合適方案",
  "注重材料、施工及日常實用性",
];

export function AboutSection() {
  return (
    <section
      id="brand-introduction"
      className="section-space border-t border-line bg-paper"
    >
      <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <SectionTitle
          index="01"
          eyebrow="公司簡介"
          title="一站式家居服務"
        />
        <div>
          <p className="font-display text-[clamp(1.4rem,2.7vw,2.15rem)] leading-[1.65] tracking-[-0.025em] text-ink">
            {siteConfig.introduction}
          </p>
          <ul className="mt-10 grid gap-0 border-t border-line sm:grid-cols-2">
            {principles.map((principle, index) => (
              <li
                key={principle}
                className="flex items-center gap-3 border-b border-line py-4 text-sm text-ink sm:odd:pr-5 sm:even:border-l sm:even:pl-5"
              >
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-sand">
                  <Check
                    aria-hidden="true"
                    className="size-3"
                    strokeWidth={1.8}
                  />
                </span>
                <span>{principle}</span>
                <span className="ml-auto text-[0.62rem] text-muted">
                  0{index + 1}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
