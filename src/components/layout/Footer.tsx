import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SiteLogo } from "@/components/ui/SiteLogo";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { store } from "@/data/store";
import { formatPhoneDisplay } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();
  const phone = formatPhoneDisplay(siteConfig.contact.phone);
  const whatsapp = formatPhoneDisplay(siteConfig.contact.whatsapp);

  return (
    <footer className="bg-ink text-paper">
      <div className="container-shell pb-8 pt-16 md:pt-20">
        <div className="grid gap-14 border-b border-paper/15 pb-14 lg:grid-cols-[1.35fr_0.7fr_0.9fr] lg:gap-20">
          <div>
            <SiteLogo inverse />
            <p className="mt-7 max-w-md text-sm leading-7 text-paper/65">
              {siteConfig.introduction}
            </p>
          </div>

          <div>
            <p className="mb-6 text-[0.68rem] font-semibold tracking-[0.18em] text-paper/45">
              網站導覽
            </p>
            <nav aria-label="頁尾導覽" className="grid gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  {item.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3 opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-6 text-[0.68rem] font-semibold tracking-[0.18em] text-paper/45">
              聯絡及店鋪
            </p>
            <dl className="grid gap-4 text-sm">
              <div>
                <dt className="text-paper/45">WhatsApp</dt>
                <dd className="mt-0.5 text-paper/85">
                  {whatsapp ?? "待提供"}
                </dd>
              </div>
              <div>
                <dt className="text-paper/45">電話</dt>
                <dd className="mt-0.5 text-paper/85">
                  {phone ?? "待提供"}
                </dd>
              </div>
              <div>
                <dt className="text-paper/45">店鋪地區</dt>
                <dd className="mt-0.5 text-paper/85">
                  {store.district ?? "待補充"}
                </dd>
              </div>
              <div>
                <dt className="text-paper/45">一般營業時間</dt>
                <dd className="mt-0.5 text-paper/85">
                  {siteConfig.hours.time}
                </dd>
                <dd className="mt-1 text-xs leading-5 text-paper/45">
                  {siteConfig.hours.note}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}。保留所有權利。
          </p>
          <p>網站內容及圖片不得擅自轉載或作商業用途。</p>
        </div>
      </div>
    </footer>
  );
}
