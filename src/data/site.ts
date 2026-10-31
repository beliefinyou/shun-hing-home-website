import type { SiteContact, SiteHours } from "@/types/site";

const environmentValue = (value: string | undefined) =>
  value?.trim() ? value.trim() : null;

export const siteConfig = {
  name: "順興家居裝飾公司",
  shortName: "順興",
  subtitle: "家居裝飾公司",
  summary: "室內設計、全屋裝修、家具訂製及地板工程。",
  seoDescription:
    "順興家居裝飾公司提供香港住宅室內設計、全屋裝修、家具訂製及地板工程，一站式處理設計、材料及施工。",
  introduction:
    "順興提供一站式家居服務，處理設計、選材、施工及完工跟進，按實際需要安排合適方案。",
  serviceArea:
    "會按工程地點、規模及實際人手安排，歡迎先聯絡我們了解。",
  heroImage: {
    src: "/images/hero/home-hero.jpg",
    alt: "自然光線下的現代米白色家居空間",
    source:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  },
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000",
  contact: {
    phone: environmentValue(process.env.NEXT_PUBLIC_PHONE),
    whatsapp: environmentValue(process.env.NEXT_PUBLIC_WHATSAPP),
  } satisfies SiteContact,
  hours: {
    time: "11:30am–18:30pm",
    days: null,
    note: "店鋪營業日及實際營業時間待公司補充。",
  } satisfies SiteHours,
  social: {
    whatsappLabel: "WhatsApp",
  },
  brandColors: {
    paper: "#F5F2EA",
    ink: "#373737",
    wood: "#C6AE90",
    sand: "#EBE6DC",
    muted: "#77736D",
    line: "#DDD9D0",
  },
} as const;
