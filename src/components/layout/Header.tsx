import { ContactAction } from "@/components/ui/ContactAction";
import { SiteLogo } from "@/components/ui/SiteLogo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navigation } from "@/components/layout/Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/75 bg-paper/92 backdrop-blur-md">
      <div className="container-shell flex h-[var(--header-height)] items-center justify-between gap-6">
        <SiteLogo />
        <Navigation />
        <div className="hidden items-center gap-5 lg:flex">
          <ContactAction
            channel="whatsapp"
            intent="general"
            label="WhatsApp 查詢"
            className="min-h-11 px-5"
          />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
