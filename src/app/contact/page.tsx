import { StoreSection } from "@/components/sections/StoreSection";
import { ContactAction } from "@/components/ui/ContactAction";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";
import type { WhatsAppIntent } from "@/data/whatsapp";
import { formatPhoneDisplay } from "@/lib/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "聯絡我們",
  description:
    "透過 WhatsApp 或電話聯絡順興家居裝飾公司，查詢室內設計、全屋裝修、家具訂製、地板工程，或預約免費上門度尺。",
  path: "/contact",
});

const enquiryOptions: Array<{
  label: string;
  description: string;
  intent: WhatsAppIntent;
}> = [
  {
    label: "一般服務查詢",
    description: "查詢設計、裝修、家具或地板工程。",
    intent: "general",
  },
  {
    label: "免費上門度尺",
    description: "預約現場度尺及初步諮詢。",
    intent: "measure",
  },
];

export default function ContactPage() {
  const phone = formatPhoneDisplay(siteConfig.contact.phone);
  const whatsapp = formatPhoneDisplay(siteConfig.contact.whatsapp);

  return (
    <>
      <PageHero
        eyebrow="Contact / 聯絡我們"
        title="聯絡順興"
        description="查詢服務，或預約免費上門度尺。"
        note="請先透過 WhatsApp 或電話安排；網站不提供自動預約。"
      />

      <section id="contact-details" className="section-space bg-paper">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <SectionTitle
              index="01"
              eyebrow="聯絡方式"
              title="WhatsApp 或電話"
              description="WhatsApp 訊息會按用途預填，傳送前仍可修改。"
            />

            <div>
              <div className="grid border-l border-t border-line sm:grid-cols-2">
                <article className="border-b border-r border-line p-6 sm:p-8">
                  <p className="text-[0.66rem] font-semibold tracking-[0.14em] text-muted">
                    WhatsApp
                  </p>
                  <p className="mt-3 font-display text-2xl text-ink">
                    {whatsapp ?? "待公司提供"}
                  </p>
                  <p className="mt-3 text-xs leading-6 text-muted">
                    一般查詢及免費度尺預約。
                  </p>
                  <ContactAction
                    channel="whatsapp"
                    intent="general"
                    variant="text"
                    className="mt-5"
                  />
                </article>

                <article className="border-b border-r border-line p-6 sm:p-8">
                  <p className="text-[0.66rem] font-semibold tracking-[0.14em] text-muted">
                    電話
                  </p>
                  <p className="mt-3 font-display text-2xl text-ink">
                    {phone ?? "待公司提供"}
                  </p>
                  <p className="mt-3 text-xs leading-6 text-muted">
                    手機用戶可直接點擊按鈕撥打。
                  </p>
                  <ContactAction
                    channel="phone"
                    variant="text"
                    className="mt-5"
                  />
                </article>

                <article className="border-b border-r border-line p-6 sm:p-8">
                  <p className="text-[0.66rem] font-semibold tracking-[0.14em] text-muted">
                    服務地區
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ink">
                    {siteConfig.serviceArea}
                  </p>
                </article>

                <article className="border-b border-r border-line p-6 sm:p-8">
                  <p className="text-[0.66rem] font-semibold tracking-[0.14em] text-muted">
                    上門度尺及諮詢
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ink">
                    客戶先透過 WhatsApp 或電話聯絡，由職員了解需求及安排時間。
                  </p>
                </article>
              </div>

              {!whatsapp || !phone ? (
                <div className="mt-5 border border-line bg-sand/55 p-5">
                  <p className="text-xs leading-6 text-muted">
                    公司正更新聯絡資料。為確保資訊準確，網站暫未提供電話及
                    WhatsApp 連結，敬請稍後再回來查詢。
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-20">
            <SectionTitle
              index="02"
              eyebrow="WhatsApp"
              title="選擇查詢用途"
              description="選擇後會開啟對應的 WhatsApp 預填訊息。"
            />
            <div className="mt-10 grid border-l border-t border-line md:grid-cols-2">
              {enquiryOptions.map((option, index) => (
                <article
                  key={option.intent}
                  className="flex min-h-48 flex-col border-b border-r border-line p-6 sm:p-7"
                >
                  <span className="text-[0.64rem] tracking-[0.14em] text-muted">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 font-display text-xl text-ink">
                    {option.label}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted">
                    {option.description}
                  </p>
                  <ContactAction
                    channel="whatsapp"
                    intent={option.intent}
                    variant="secondary"
                    label="WhatsApp 查詢"
                    className="mt-auto"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StoreSection />
    </>
  );
}
