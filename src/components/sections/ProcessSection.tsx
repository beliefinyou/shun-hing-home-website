import { SectionTitle } from "@/components/ui/SectionTitle";

const processSteps = [
  {
    title: "客戶聯絡及初步溝通",
    description: "先了解空間、預算考慮及希望處理的家居需要。",
  },
  {
    title: "免費上門度尺及諮詢",
    description: "按現場環境、尺寸及實際情況，初步整理可行方向。",
  },
  {
    title: "設計方案及材料選擇",
    description: "因應生活習慣與空間條件，討論設計及合適材料。",
  },
  {
    title: "提供工程報價及確認方案",
    description: "根據實際需求及工程內容提供個別報價。",
  },
  {
    title: "安排施工及工程跟進",
    description: "按確認方案協調工序，持續跟進施工進度。",
  },
  {
    title: "完工驗收及售後服務",
    description: "完工後檢查工程，並繼續跟進客戶遇到的問題。",
  },
];

export function ProcessSection() {
  return (
    <section className="section-space bg-paper">
      <div className="container-shell">
        <SectionTitle
          index="05"
          eyebrow="如何開始"
          title="服務流程"
          description="先了解需要，再安排度尺、報價、施工及驗收。"
        />

        <ol className="mt-14 grid border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="group min-h-52 border-b border-r border-line p-6 transition-colors hover:bg-sand/45 sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-4xl text-wood">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 h-px w-8 bg-line transition-all group-hover:w-12 group-hover:bg-wood" />
              </div>
              <h3 className="mt-8 font-display text-xl leading-snug text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 border border-line bg-sand/35 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <p className="font-display text-xl text-ink">售後服務</p>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
              完工後會繼續跟進工程事宜，協助處理客戶遇到的問題，並按需要提供維修及支援。具體保養期限及保障範圍以個別工程合約為準。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
