import { siteConfig } from "@/data/site";
import {
  whatsappMessages,
  type WhatsAppIntent,
} from "@/data/whatsapp";

export function getWhatsAppHref(intent: WhatsAppIntent): string | null {
  if (!siteConfig.contact.whatsapp) {
    return null;
  }

  const number = siteConfig.contact.whatsapp.replace(/[^\d]/g, "");
  if (!number) {
    return null;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(
    whatsappMessages[intent],
  )}`;
}
