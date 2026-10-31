import { ActionLink } from "@/components/ui/ActionLink";
import { PortfolioGallery } from "@/components/ui/PortfolioGallery";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { visiblePortfolioItems } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section className="section-space bg-paper">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle
            index="03"
            eyebrow="工程作品"
            title="工程作品集"
            description="按空間分類瀏覽。現階段圖片為示意素材，稍後會替換為公司實拍照片。"
          />
          <ActionLink href="/portfolio" variant="text">
            查看更多作品
          </ActionLink>
        </div>
        <PortfolioGallery items={visiblePortfolioItems} limit={6} />
      </div>
    </section>
  );
}
