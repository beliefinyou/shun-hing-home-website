export type ServiceSlug =
  | "interior-design"
  | "custom-furniture"
  | "flooring"
  | "partial-renovation";

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  imageSource: string;
  scope: string[];
  process: string[];
  relatedPortfolioCategories: string[];
  order: number;
  visible: boolean;
  seoDescription: string;
}
