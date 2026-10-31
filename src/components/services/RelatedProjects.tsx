import { SectionTitle } from "@/components/ui/SectionTitle";
import { PortfolioGallery } from "@/components/ui/PortfolioGallery";
import { visiblePortfolioItems } from "@/data/portfolio";

export function RelatedProjects({
  categories,
}: {
  categories: string[];
}) {
  const relatedItems = visiblePortfolioItems
    .filter((item) => categories.includes(item.category))
    .slice(0, 6);

  if (!relatedItems.length) {
    return null;
  }

  return (
    <section className="section-space border-t border-line bg-paper">
      <div className="container-shell">
        <SectionTitle
          eyebrow="相關作品"
          title="相關空間作品"
          description="以下為示意圖片，只作空間風格參考。"
        />
        <PortfolioGallery
          items={relatedItems}
          showFilters={false}
        />
      </div>
    </section>
  );
}
