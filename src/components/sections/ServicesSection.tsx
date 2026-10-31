import { ActionLink } from "@/components/ui/ActionLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { visibleServices } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="section-space bg-sand/55">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle
            index="02"
            eyebrow="核心服務"
            title="四項核心家居服務"
            description="設計、訂造、地板及局部工程，可獨立安排或整合處理。"
          />
          <ActionLink href="/services" variant="text">
            查看全部服務
          </ActionLink>
        </div>

        <div className="mt-14 grid gap-x-7 gap-y-12 md:grid-cols-2">
          {visibleServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
