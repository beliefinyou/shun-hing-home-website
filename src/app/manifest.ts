import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "順興家居裝飾公司",
    short_name: "順興",
    description:
      "香港住宅室內設計、全屋裝修、家具訂製及地板工程服務。",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F2EA",
    theme_color: "#F5F2EA",
    lang: "zh-Hant-HK",
  };
}
