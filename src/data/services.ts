import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "interior-design",
    title: "室內設計及全屋裝修",
    shortTitle: "設計及全屋裝修",
    eyebrow: "空間・設計・工程",
    summary:
      "空間規劃、全屋設計、新樓及舊樓裝修，連材料選擇與施工。",
    description:
      "提供空間規劃、全屋設計、新樓裝修、舊屋翻新及施工跟進，按現場條件及實際需要安排工程。",
    image: "/images/services/interior-design.jpg",
    imageAlt: "自然光下的現代簡約客廳及室內空間",
    imageSource:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    scope: [
      "空間規劃",
      "全屋設計",
      "新樓裝修",
      "舊屋翻新",
      "客廳及睡房裝修",
      "廚房及浴室翻新",
      "材料選擇",
      "施工及安裝",
    ],
    process: [
      "初步溝通",
      "免費上門度尺及諮詢",
      "設計及選材",
      "工程報價及確認",
      "施工及工程跟進",
      "完工驗收及售後服務",
    ],
    relatedPortfolioCategories: [
      "whole-home",
      "living-room",
      "bedroom-furniture",
      "kitchen-bathroom",
    ],
    order: 1,
    visible: true,
    seoDescription:
      "順興提供室內設計及全屋裝修服務，涵蓋空間規劃、新樓裝修、舊屋翻新、材料選擇與施工跟進。",
  },
  {
    slug: "custom-furniture",
    title: "家具訂製",
    shortTitle: "家具訂製",
    eyebrow: "尺寸・收納・細節",
    summary:
      "按現場尺寸及收納需要，訂製衣櫃、床架、電視櫃、餐枱及廚櫃。",
    description:
      "先確認尺寸、收納需要及款式，再提供衣櫃、床架、電視櫃、餐枱、收納櫃、廚櫃及其他客製化家具方案。",
    image: "/images/services/custom-furniture.jpg",
    imageAlt: "米白色及淺木色調的簡約家居家具",
    imageSource:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    scope: [
      "訂製衣櫃",
      "訂製床架",
      "電視櫃",
      "餐桌及收納櫃",
      "廚櫃",
      "其他客製化家具",
    ],
    process: [
      "了解客戶需求",
      "尺寸及空間確認",
      "款式及材料選擇",
      "提供報價",
      "製作及安裝",
    ],
    relatedPortfolioCategories: [
      "bedroom-furniture",
      "custom-furniture",
    ],
    order: 2,
    visible: true,
    seoDescription:
      "順興家具訂製服務包括衣櫃、床架、電視櫃、餐枱、收納櫃及廚櫃，按空間尺寸與生活需要度身規劃。",
  },
  {
    slug: "flooring",
    title: "地板及地面工程",
    shortTitle: "地板及地面工程",
    eyebrow: "材質・觸感・施工",
    summary:
      "木地板、SPC 地板及地磚工程，包括選材、安裝及完工檢查。",
    description:
      "按現場狀況及使用需要選擇木地板、SPC 地板、地磚或其他材料，並安排地板更換、安裝及完工檢查。",
    image: "/images/services/flooring-v2.jpg",
    imageAlt: "淺木色地板及明亮簡約家居空間",
    imageSource:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d",
    scope: [
      "木地板",
      "SPC 地板",
      "地磚",
      "其他地面材料",
      "地板更換及安裝",
    ],
    process: [
      "現場了解及評估",
      "地板類型及材料選擇",
      "提供報價",
      "安排施工",
      "完工檢查",
    ],
    relatedPortfolioCategories: ["flooring", "whole-home"],
    order: 3,
    visible: true,
    seoDescription:
      "順興提供木地板、SPC 地板、地磚及其他地面工程，包括材料選擇、地板更換、安裝及完工檢查。",
  },
  {
    slug: "partial-renovation",
    title: "局部裝修及工程",
    shortTitle: "局部裝修",
    eyebrow: "改善・更新・活用",
    summary:
      "針對客廳、睡房、廚房、浴室及牆身進行局部翻新。",
    description:
      "按實際範圍處理客廳、睡房、廚房、浴室及牆身等局部工程，毋須全屋翻新。",
    image: "/images/services/partial-renovation-v2.jpg",
    imageAlt: "明亮簡約的現代住宅局部空間",
    imageSource:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
    scope: [
      "客廳翻新",
      "睡房翻新",
      "廚房改造",
      "浴室翻新",
      "牆身及相關工程",
    ],
    process: [
      "了解客戶需求",
      "現場評估",
      "設計及報價",
      "安排施工",
      "完工驗收",
    ],
    relatedPortfolioCategories: [
      "living-room",
      "bedroom-furniture",
      "kitchen-bathroom",
    ],
    order: 4,
    visible: true,
    seoDescription:
      "順興局部裝修服務涵蓋客廳、睡房、廚房、浴室及牆身工程，針對實際需要改善現有家居空間。",
  },
];

export const visibleServices = services
  .filter((service) => service.visible)
  .sort((a, b) => a.order - b.order);

export function getServiceBySlug(slug: string) {
  return services.find(
    (service) => service.visible && service.slug === slug,
  );
}
