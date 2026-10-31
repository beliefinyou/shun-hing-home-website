import { ContactSection } from "@/components/sections/ContactSection";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { visibleServices } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "服務項目",
  description:
    "了解順興的室內設計及全屋裝修、家具訂製、地板工程及局部裝修服務。",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services / 服務項目"
        title="室內設計及家居工程"
        description="提供室內設計及全屋裝修、家具訂製、地板工程及局部裝修。"
        note="四項服務可獨立安排或整合處理，所有工程按實際需求個別報價。"
      />
      <section className="section-space bg-paper">
        <div className="container-shell">
          <div className="grid gap-x-7 gap-y-14 md:grid-cols-2">
            {visibleServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
