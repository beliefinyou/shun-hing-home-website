import type { ImageLoaderProps } from "next/image";

export default function imageLoader({ src }: ImageLoaderProps) {
  if (/^https?:\/\//.test(src)) {
    return src;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;

  return `${basePath}${normalizedSrc}`;
}
