import { ContactAction } from "@/components/ui/ContactAction";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section className="bg-paper pb-5 pt-5">
      <div className="container-shell relative overflow-hidden bg-wood px-6 py-14 text-ink sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div
          className="pointer-events-none absolute -right-24 -top-32 size-[28rem] rounded-full border border-ink/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-52 right-8 size-[34rem] rounded-full border border-ink/10"
          aria-hidden="true"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-ink/55">
              查詢及預約
            </p>
            <h2 className="mt-5 max-w-[14ch] font-display text-[clamp(2.25rem,5vw,4.8rem)] leading-[1.15] tracking-[-0.045em]">
              查詢裝修，預約度尺。
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-ink/65">
              告訴我們服務類型、地區及基本需求，職員會回覆安排。
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ContactAction
                channel="whatsapp"
                intent="general"
                variant="primary"
                className="bg-ink text-paper hover:bg-paper hover:text-ink"
              />
              <ContactAction
                channel="phone"
                variant="secondary"
                className="border-ink/30 text-ink hover:bg-ink hover:text-paper"
              />
            </div>
            <p className="mt-5 text-xs leading-6 text-ink/55">
              {siteConfig.contact.whatsapp && siteConfig.contact.phone
                ? "如未能接通，歡迎透過 WhatsApp 留言。"
                : "聯絡資料更新中；如尚未顯示聯絡方式，請稍後再回來查詢。"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
