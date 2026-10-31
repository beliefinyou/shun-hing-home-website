"use client";

import Link from "next/link";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";

import type { WhatsAppIntent } from "@/data/whatsapp";
import { getPhoneHref } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { getWhatsAppHref } from "@/lib/whatsapp";

interface ContactActionProps {
  channel: "whatsapp" | "phone";
  intent?: WhatsAppIntent;
  label?: string;
  variant?: "primary" | "secondary" | "light" | "text";
  className?: string;
}

const variantClasses = {
  primary: "bg-ink text-paper hover:bg-wood hover:text-ink",
  secondary:
    "border border-ink/35 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  light:
    "border border-paper/35 bg-paper/10 text-paper hover:bg-paper hover:text-ink",
  text: "min-h-10 justify-start px-0 text-ink hover:text-muted",
};

export function ContactAction({
  channel,
  intent = "general",
  label,
  variant = "primary",
  className,
}: ContactActionProps) {
  const externalHref =
    channel === "whatsapp" ? getWhatsAppHref(intent) : getPhoneHref();
  const defaultLabel =
    channel === "whatsapp" ? "WhatsApp 查詢" : "電話聯絡";
  const content = label ?? defaultLabel;
  const Icon = channel === "whatsapp" ? MessageCircle : Phone;
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2.5 px-5 text-[0.8rem] font-semibold tracking-[0.06em] transition-colors duration-200",
    variantClasses[variant],
    className,
  );

  if (!externalHref) {
    return (
      <Link
        href="/contact#contact-details"
        className={classes}
        title="聯絡資料暫未提供，請查看聯絡頁面"
      >
        <Icon aria-hidden="true" className="size-4" strokeWidth={1.7} />
        <span>{content}</span>
        <ArrowUpRight aria-hidden="true" className="size-3.5" />
      </Link>
    );
  }

  return (
    <a
      href={externalHref}
      target={channel === "whatsapp" ? "_blank" : undefined}
      rel={channel === "whatsapp" ? "noopener noreferrer" : undefined}
      className={classes}
    >
      <Icon aria-hidden="true" className="size-4" strokeWidth={1.7} />
      <span>{content}</span>
      <ArrowUpRight aria-hidden="true" className="size-3.5" />
    </a>
  );
}
