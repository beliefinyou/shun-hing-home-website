interface ServiceProcessProps {
  steps: string[];
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <ol className="mt-12 grid border-l border-t border-line md:grid-cols-2">
      {steps.map((step, index) => (
        <li
          key={step}
          className="group flex min-h-32 gap-5 border-b border-r border-line p-5 transition-colors hover:bg-sand/45 sm:gap-7 sm:p-7"
        >
          <span className="mt-0.5 font-display text-2xl text-wood">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-lg text-ink">{step}</h3>
            <p className="mt-2 text-xs leading-6 text-muted">
              {index === 0
                ? "先了解您的空間、需要及計劃。"
                : index === steps.length - 1
                  ? "完成後繼續跟進相關工程事宜。"
                  : "按實際情況推進及保持溝通。"}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
