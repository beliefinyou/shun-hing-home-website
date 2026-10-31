import { siteConfig } from "@/data/site";
import type { Store } from "@/types/site";

const environmentValue = (value: string | undefined) =>
  value?.trim() ? value.trim() : null;

export const store: Store & {
  features: string[];
  image: string;
  imageAlt: string;
  imageSource: string;
} = {
  district: environmentValue(process.env.NEXT_PUBLIC_STORE_DISTRICT),
  nearbyLandmark: environmentValue(process.env.NEXT_PUBLIC_STORE_LANDMARK),
  note: "店鋪詳細地址及營業日待公司補充；到訪前可先透過 WhatsApp 或電話確認。",
  image: "/images/store/store-space.jpg",
  imageAlt: "家具及家居佈置空間的店鋪示意",
  imageSource:
    "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20",
  features: [
    "現成及訂製家具",
    "裝修材料",
    "地板樣板",
    "室內設計樣板",
    "客戶諮詢及設計討論空間",
  ],
};

export const displayHours = siteConfig.hours;
