import { ActionLink } from "@/components/ui/ActionLink";

export default function NotFound() {
  return (
    <section className="paper-grain grid min-h-[70svh] place-items-center py-20">
      <div className="container-shell text-center">
        <p className="eyebrow justify-center">404 / 找不到頁面</p>
        <h1 className="display-title mx-auto mt-7 max-w-[12ch] text-ink">
          找不到頁面
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-8 text-muted">
          您前往的頁面可能已經移動或不存在。可以返回首頁，或繼續查看順興的服務及工程作品。
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ActionLink href="/">返回首頁</ActionLink>
          <ActionLink href="/services" variant="secondary">
            瀏覽服務
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
