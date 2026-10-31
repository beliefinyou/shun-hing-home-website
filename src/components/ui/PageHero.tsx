import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  note,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("paper-grain border-b border-line", className)}>
      <div className="container-shell grid gap-10 pb-14 pt-12 sm:pt-16 lg:grid-cols-[1fr_0.58fr] lg:items-end lg:gap-20 lg:pb-20 lg:pt-20">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-title mt-7 max-w-[12ch] text-ink">{title}</h1>
        </div>
        <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="max-w-lg text-[0.95rem] leading-8 text-muted">
            {description}
          </p>
          {note ? (
            <p className="mt-5 text-xs leading-6 tracking-[0.04em] text-muted/75">
              {note}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
