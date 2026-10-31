import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  index?: string;
  inverse?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  index,
  inverse = false,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-5",
          align === "center" && "justify-center",
          inverse ? "text-paper/55" : "text-muted",
        )}
      >
        {index ? (
          <span className="text-[0.68rem] tracking-[0.16em]">{index}</span>
        ) : null}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "section-title mt-6",
          inverse ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-[0.95rem] leading-8",
            align === "center" && "mx-auto",
            inverse ? "text-paper/60" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
