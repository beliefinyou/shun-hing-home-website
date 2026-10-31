import type {
  PortfolioCategory,
  PortfolioCategoryOption,
  PortfolioItem,
} from "@/types/portfolio";

export const portfolioCategories: PortfolioCategoryOption[] = [
  { value: "whole-home", label: "全屋裝修" },
  { value: "living-room", label: "客廳及飯廳" },
  { value: "bedroom-furniture", label: "睡房及家具" },
  { value: "kitchen-bathroom", label: "廚房及浴室" },
  { value: "flooring", label: "地板工程" },
  { value: "custom-furniture", label: "家具訂製" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "placeholder-whole-home",
    title: "全屋空間示意",
    category: "whole-home",
    image: "/images/portfolio/placeholder-whole-home-v2.jpg",
    width: 1600,
    height: 1090,
    description: "全屋裝修展示位置，待整理順興實際工程照片後替換。",
    imageSource:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
    imageSourceLabel: "Unsplash",
    isPlaceholder: true,
    visible: true,
    order: 1,
  },
  {
    id: "placeholder-living-dining",
    title: "客廳及飯廳示意",
    category: "living-room",
    image: "/images/portfolio/placeholder-living-dining.jpg",
    width: 1600,
    height: 1067,
    description: "客廳及飯廳作品展示位置，待替換為公司實拍照片。",
    imageSource:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    imageSourceLabel: "Unsplash",
    isPlaceholder: true,
    visible: true,
    order: 2,
  },
  {
    id: "placeholder-bedroom",
    title: "睡房空間示意",
    category: "bedroom-furniture",
    image: "/images/portfolio/placeholder-bedroom-v2.jpg",
    width: 1600,
    height: 1067,
    description: "睡房及家具作品展示位置，待替換為公司實拍照片。",
    imageSource:
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
    imageSourceLabel: "Unsplash",
    isPlaceholder: true,
    visible: true,
    order: 3,
  },
  {
    id: "placeholder-kitchen-bathroom",
    title: "廚房空間示意",
    category: "kitchen-bathroom",
    image: "/images/portfolio/placeholder-kitchen-bathroom-v2.jpg",
    width: 1600,
    height: 1054,
    description: "廚房及浴室作品展示位置，待替換為公司實拍照片。",
    imageSource:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf",
    imageSourceLabel: "Unsplash",
    isPlaceholder: true,
    visible: true,
    order: 4,
  },
  {
    id: "placeholder-flooring",
    title: "地板工程示意",
    category: "flooring",
    image: "/images/portfolio/placeholder-flooring-v2.jpg",
    width: 1600,
    height: 1600,
    description: "地板工程作品展示位置，待替換為公司實拍照片。",
    imageSource:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d",
    imageSourceLabel: "Unsplash",
    isPlaceholder: true,
    visible: true,
    order: 5,
  },
  {
    id: "placeholder-furniture",
    title: "家具訂製示意",
    category: "custom-furniture",
    image: "/images/portfolio/placeholder-furniture.jpg",
    width: 1600,
    height: 2133,
    description: "家具訂製作品展示位置，待替換為公司實拍照片。",
    imageSource:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
    imageSourceLabel: "Unsplash",
    isPlaceholder: true,
    visible: true,
    order: 6,
  },
  {
    id: "placeholder-living-room-02",
    title: "客廳設計示意",
    category: "living-room",
    image: "/images/services/interior-design.jpg",
    width: 1400,
    height: 933,
    description: "客廳設計作品展示位置，待替換為公司實拍照片。",
    imageSource:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    imageSourceLabel: "Unsplash",
    isPlaceholder: true,
    visible: true,
    order: 7,
  },
  {
    id: "placeholder-whole-home-02",
    title: "住宅空間示意",
    category: "whole-home",
    image: "/images/services/partial-renovation-v2.jpg",
    width: 1400,
    height: 954,
    description: "住宅空間作品展示位置，待替換為公司實拍照片。",
    imageSource:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
    imageSourceLabel: "Unsplash",
    isPlaceholder: true,
    visible: true,
    order: 8,
  },
];

export const visiblePortfolioItems = portfolioItems
  .filter((item) => item.visible)
  .sort((a, b) => a.order - b.order);

export function getPortfolioCategoryLabel(category: PortfolioCategory) {
  return (
    portfolioCategories.find((item) => item.value === category)?.label ??
    category
  );
}
