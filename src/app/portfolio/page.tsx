import { ContactSection } from "@/components/sections/ContactSection";
import { PageHero } from "@/components/ui/PageHero";
import { PortfolioGallery } from "@/components/ui/PortfolioGallery";
import { visiblePortfolioItems } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "工程作品集",
  description:
    "瀏覽順興家居工程作品分類，包括全屋裝修、客廳及飯廳、睡房及家具、廚房及浴室、地板工程及家具訂製。",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio / 工程作品集"
        title="家居工程作品集"
        description="按全屋、客廳、睡房、廚廁、地板及家具分類瀏覽。現階段圖片為示意素材。"
        note="示意圖片不代表順興實際工程。點擊圖片可放大，手機可左右滑動。"
      />

      <section className="section-space bg-paper">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-5 border-b border-line pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.66rem] font-semibold tracking-[0.18em] text-muted">
                精選空間分類
              </p>
              <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
                選擇分類查看示意空間；點擊任何圖片可放大，並使用按鈕或手機左右滑動切換。
              </p>
            </div>
            <p className="shrink-0 text-[0.62rem] tracking-[0.12em] text-muted">
              圖片狀態：示意素材
            </p>
          </div>

          <PortfolioGallery items={visiblePortfolioItems} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
