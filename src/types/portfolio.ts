export type PortfolioCategory =
  | "whole-home"
  | "living-room"
  | "bedroom-furniture"
  | "kitchen-bathroom"
  | "flooring"
  | "custom-furniture";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  width: number;
  height: number;
  description: string;
  imageSource: string | null;
  imageSourceLabel: string;
  isPlaceholder: boolean;
  visible: boolean;
  order: number;
}

export interface PortfolioCategoryOption {
  value: PortfolioCategory;
  label: string;
}
