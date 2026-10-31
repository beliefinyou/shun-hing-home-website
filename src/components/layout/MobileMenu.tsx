"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";

import { Navigation } from "@/components/layout/Navigation";
import { ContactAction } from "@/components/ui/ContactAction";
import { SiteLogo } from "@/components/ui/SiteLogo";
import { siteConfig } from "@/data/site";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const menu = (
    <div
      id="mobile-menu"
      className="fixed inset-x-0 bottom-0 top-[var(--header-height)] z-40 overflow-y-auto bg-paper px-5 pb-8 pt-7"
      aria-hidden={!isOpen}
    >
      <div className="container-shell flex min-h-full flex-col">
        <Navigation mobile onNavigate={() => setIsOpen(false)} />

        <div className="mt-auto pt-10">
          <p className="mb-4 max-w-sm text-sm leading-7 text-muted">
            {siteConfig.summary}
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ContactAction
              channel="whatsapp"
              intent="general"
              variant="primary"
              className="px-3"
            />
            <ContactAction
              channel="phone"
              variant="secondary"
              className="px-3"
            />
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <SiteLogo compact />
        </div>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "關閉選單" : "開啟選單"}
        className="grid size-11 place-items-center border border-line text-ink"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
        ) : (
          <Menu aria-hidden="true" className="size-5" strokeWidth={1.5} />
        )}
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(menu, document.body)
        : null}
    </div>
  );
}
