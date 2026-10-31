import { siteConfig } from "@/data/site";

const digitsOnly = (value: string) => value.replace(/[^\d+]/g, "");

export function getPhoneHref(): string | null {
  if (!siteConfig.contact.phone) {
    return null;
  }

  return `tel:${digitsOnly(siteConfig.contact.phone)}`;
}

export function formatPhoneDisplay(value: string | null): string | null {
  if (!value) {
    return null;
  }

  return value.trim();
}
