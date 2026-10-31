import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.heroImage.src,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title}｜${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "zh_HK",
      type: "website",
      images: [
        {
          url: image,
          width: 2000,
          height: 1500,
          alt: `${siteConfig.name}家居空間`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title}｜${siteConfig.name}`,
      description,
      images: [image],
    },
  };
}
