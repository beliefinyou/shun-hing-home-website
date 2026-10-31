import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

import { RelatedProjects } from "@/components/services/RelatedProjects";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ContactAction } from "@/components/ui/ContactAction";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Service } from "@/types/service";
import type { WhatsAppIntent } from "@/data/whatsapp";

const serviceIntents: Record<Service["slug"], WhatsAppIntent> = {
  "interior-design": "renovation",
  "custom-furniture": "furniture",
  flooring: "flooring",
  "partial-renovation": "general",
};

export function ServiceDetailLayout({ service }: { service: Service }) {
  const intent = serviceIntents[service.slug];

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="container-shell pb-6 pt-8">
          <Link
            href="/services"
            className="inline-flex min-h-10 items-center gap-2 text-xs tracking-[0.08em] text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft aria-hidden="true" className="size-3.5" />
            返回服務項目
          </Link>
        </div>

        <div className="container-shell grid gap-10 pb-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-16 lg:pb-20">
          <div className="flex flex-col justify-between py-5">
            <div>
              <p className="eyebrow">{service.eyebrow}</p>
              <h1 className="display-title mt-7 max-w-[10ch] text-ink">
                {service.title}
              </h1>
              <p className="mt-8 max-w-lg text-[0.95rem] leading-8 text-muted">
                {service.description}
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3">
              <ContactAction
                channel="whatsapp"
                intent={intent}
                label="聯絡我們查詢報價"
              />
              <ContactAction
                channel="whatsapp"
                intent="measure"
                variant="secondary"
                label="預約免費上門度尺及諮詢"
              />
              <ContactAction
                channel="phone"
                variant="text"
                label="電話聯絡"
              />
            </div>
          </div>

          <div className="relative min-h-[29rem] overflow-hidden bg-sand lg:min-h-[42rem]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
            <div className="absolute bottom-5 right-5 bg-paper px-4 py-3">
              <p className="text-[0.6rem] tracking-[0.14em] text-muted">
                服務內容
              </p>
              <p className="mt-1 font-display text-lg text-ink">
                {service.shortTitle}
              </p>
              <a
                href={service.imageSource}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-[0.56rem] text-muted underline decoration-line underline-offset-4 hover:text-ink"
              >
                空間示意・圖片來源 Unsplash
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-sand/45">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <SectionTitle
            index="01"
            eyebrow="可選服務"
            title="服務範圍"
            description="實際內容及工序按現場條件和需求確認。"
          />
          <ul className="grid border-t border-line sm:grid-cols-2">
            {service.scope.map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-line py-5 text-sm text-ink sm:odd:pr-5 sm:even:border-l sm:even:pl-5"
              >
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-paper">
                  <Check
                    aria-hidden="true"
                    className="size-3"
                    strokeWidth={1.8}
                  />
                </span>
                <span>{item}</span>
                <span className="ml-auto text-[0.6rem] text-muted">
                  0{index + 1}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="container-shell">
          <SectionTitle
            index="02"
            eyebrow="步驟"
            title="服務流程"
            description="實際安排會按工程內容、現場情況及確認方案調整。"
          />
          <ServiceProcess steps={service.process} />
          <div className="mt-8 flex flex-col justify-between gap-5 border border-line bg-sand/35 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-xl text-ink">
                想了解哪一種安排適合您的空間？
              </p>
              <p className="mt-1 text-sm text-muted">
                所有工程均按實際需求個別報價，網站不公開固定價格。
              </p>
            </div>
            <ContactAction
              channel="whatsapp"
              intent={intent}
              label="WhatsApp 查詢"
              className="shrink-0"
            />
          </div>
        </div>
      </section>

      <RelatedProjects categories={service.relatedPortfolioCategories} />
    </>
  );
}
