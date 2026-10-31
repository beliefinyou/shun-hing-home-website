# 順興家居裝飾公司網站

面向香港住宅客戶的一站式家居服務網站，涵蓋室內設計及全屋裝修、家具訂製、地板工程、局部裝修、工程作品集及聯絡資訊。

網站以 Next.js App Router、TypeScript 及 Tailwind CSS 建立，所有主要頁面可在沒有資料庫的情況下靜態產生，可直接部署至 Vercel 或一般 Node.js 主機。

![順興網站桌面版首頁](docs/previews/home-desktop.png)

## 目前版本

- Next.js `16.4.3`
- React `19.3.1`
- TypeScript `5.9.3`
- Tailwind CSS `4.3.3`
- 香港繁體中文內容
- 桌面、平板及手機響應式版面
- 全站沒有價格、購物、會員、表格或自動預約功能

## 本機啟動

需要 Node.js 20.9 或以上。

```bash
npm install
npm run dev
```

瀏覽 `http://localhost:3000`。

如使用 pnpm：

```bash
pnpm install
pnpm dev
```

## 正式建置

```bash
npm run build
npm run start
```

建置前請先建立 `.env.local`，內容參考 `.env.example`。

```bash
npm run lint
```

`npm run lint` 會執行 TypeScript 嚴格檢查。

## 專案結構

```text
src/
├── app/                    # 路由、頁面、SEO、Sitemap、Robots
├── components/
│   ├── layout/             # Header、Navigation、MobileMenu、Footer
│   ├── sections/           # 首頁及聯絡頁區塊
│   ├── services/           # 服務詳情共用模板
│   └── ui/                 # 按鈕、卡片、Lightbox、標題
├── data/                   # 公司、服務、作品、店鋪及 WhatsApp 文案
├── lib/                    # Metadata、電話及 WhatsApp 連結工具
├── styles/                 # 品牌設計 token
└── types/                  # TypeScript 資料型別
public/images/              # 網站圖片
docs/previews/              # 桌面、手機及 Lightbox 驗收截圖
```

主要檔案職責：

| 檔案 | 用途 |
| --- | --- |
| `src/data/site.ts` | 公司名稱、簡介、電話、WhatsApp、營業時間、品牌色 |
| `src/data/navigation.ts` | 主導覽連結 |
| `src/data/services.ts` | 四項服務內容、範圍、流程及相關作品分類 |
| `src/data/portfolio.ts` | 作品分類、圖片、來源、顯示狀態及排序 |
| `src/data/store.ts` | 店鋪地區、地標及資料補充提醒 |
| `src/data/whatsapp.ts` | 五種預填 WhatsApp 查詢訊息；聯絡頁只顯示兩種 |
| `src/lib/contact.ts` | 電話連結格式 |
| `src/lib/whatsapp.ts` | WhatsApp 號碼清理及訊息編碼 |
| `src/styles/theme.css` | 全站唯一品牌顏色及字體 CSS Variables |

## 必須先補充的公司資料

現時網站**沒有加入虛構電話、WhatsApp 號碼、地址、成立年份、工程數量、獎項、保養年期或價格**。

正式上線前請補充以下資料：

- [ ] 正式網站域名：`NEXT_PUBLIC_SITE_URL`
- [ ] 公司電話：`NEXT_PUBLIC_PHONE`
- [ ] 公司 WhatsApp：`NEXT_PUBLIC_WHATSAPP`，建議包含香港區號 `852`
- [ ] 店鋪所在地區：`NEXT_PUBLIC_STORE_DISTRICT`
- [ ] 店鋪附近地標：`NEXT_PUBLIC_STORE_LANDMARK`
- [ ] 哪些日子營業，以及實際到店時間
- [ ] 已整理及獲授權使用的順興工程實拍照片
- [ ] 每張正式作品照片的名稱、分類及簡短描述
- [ ] 如公司希望公開，才補充成立年份、獎項或保養年期

公司未提供完整店鋪地址，網站現時不會顯示虛構地址，亦沒有加入 Google Maps。日後提供地址後，可再加入 `src/data/store.ts`。

## 聯絡功能設定

複製 `.env.example` 為 `.env.local`：

```bash
NEXT_PUBLIC_SITE_URL=https://www.your-domain.com
NEXT_PUBLIC_PHONE=你的電話號碼
NEXT_PUBLIC_WHATSAPP=852你的WhatsApp號碼
NEXT_PUBLIC_STORE_DISTRICT=店鋪地區
NEXT_PUBLIC_STORE_LANDMARK=附近地標
```

這些是公開聯絡資料，使用 `NEXT_PUBLIC_` 前綴是刻意設計。不要在這些變數加入密碼、API Key 或其他敏感資料。

電話或 WhatsApp 未設定時：

- 不會生成虛假的 `tel:` 或 `wa.me` 連結。
- CTA 會前往聯絡頁的聯絡資料區。
- 聯絡頁會如實顯示「待公司提供」。

設定環境變數並重新建置後，所有 Header、首頁及服務頁 CTA 會同步啟用。

## 修改公司資料

1. 公司名稱、簡介、服務地區、營業時間及品牌色：修改 `src/data/site.ts`。
2. WhatsApp 預填訊息：修改 `src/data/whatsapp.ts`。
3. 店鋪地區及附近地標：修改 `src/data/store.ts`，亦可透過環境變數覆寫。
4. 導覽項目：修改 `src/data/navigation.ts`。
5. 服務內容：修改 `src/data/services.ts`。
6. 全部品牌顏色：修改 `src/styles/theme.css` 的 CSS Variables；`site.ts` 的 `brandColors` 只作資料參考。

不要在頁面元件內重複寫死電話、WhatsApp、公司名稱或營業時間。

## 替換服務圖片

最簡單方法是沿用現有檔名，直接替換 `public/images/services/` 內圖片：

```text
interior-design.jpg
custom-furniture.jpg
flooring-v2.jpg
partial-renovation-v2.jpg
```

如圖片比例、主題或來源改變，請同步更新 `src/data/services.ts` 的 `imageAlt`、`imageSource` 及相關 SEO 文字。網站使用 Next.js Image 自動產生合適尺寸。

## 新增工程作品

1. 將圖片放入 `public/images/portfolio/`。
2. 在 `src/data/portfolio.ts` 的 `portfolioItems` 新增資料：

```ts
{
  id: "project-001",
  title: "實際工程名稱",
  category: "living-room",
  image: "/images/portfolio/project-001.jpg",
  width: 1600,
  height: 1067,
  description: "按實際工程提供的簡短描述。",
  imageSource: null,
  imageSourceLabel: "順興家居裝飾公司",
  isPlaceholder: false,
  visible: true,
  order: 9
}
```

3. `width` 及 `height` 必須是圖片原始像素尺寸，才能保持比例及避免版面跳動。
4. 設為 `visible: false` 可暫時隱藏，不建議直接刪除資料。
5. `order` 控制排序；作品會按數字由小至大顯示。
6. 使用 `category` 指定現有六個分類之一。
7. 完成後執行 `npm run lint` 及 `npm run build`。

## 圖片狀態及來源

現時網站使用 Unsplash 圖庫照片作**空間示意**，不是順興真實工程案例。

- Header／首頁已標示「空間風格示意」。
- 服務卡片及詳情頁已標示示意狀態。
- 作品集卡片、Lightbox 及說明文字均清楚標示「示意圖片」。
- 店鋪圖片已標示「空間示意」。
- 每張作品及店鋪圖片來源可在 Lightbox、頁面或中央資料檔案查閱。

正式上線前應替換為公司持有或已取得授權的照片，並重新確認 Unsplash 授權條款及網站所需署名。圖片資料集中在 `src/data/portfolio.ts`、`src/data/services.ts`、`src/data/store.ts` 及 `src/data/site.ts`。

## 部署

### GitHub Pages

推送到 `main` 分支後，GitHub Actions 會自動建置靜態網站並發佈至：

```text
https://beliefinyou.github.io/shun-hing-home-website/
```

部署工作流程位於 `.github/workflows/deploy-pages.yml`。Repository 必須為公開，或在 GitHub 方案中允許私人儲存庫使用 Pages。

### 一般 Node.js 主機

```bash
npm install
npm run build
npm run start
```

正式環境必須將 `NEXT_PUBLIC_SITE_URL` 設為最終 HTTPS 域名，否則 Sitemap 與 Canonical URL 會使用本機網址。

## 驗收

本專案已檢查：

- 首頁、服務總覽、四個服務詳情頁、作品集及聯絡頁
- 桌面及 390px 手機寬度沒有橫向溢出
- 手機選單可開啟、關閉及跳轉
- 作品分類篩選正常
- Lightbox 可放大、上一張、下一張、鍵盤左右鍵、Escape 及手機左右滑動
- Header、Footer 及全部 CTA 有實際用途
- TypeScript 嚴格檢查通過
- Next.js 正式建置通過
- Sitemap、Robots、Manifest、每頁 Metadata 及 Open Graph 正常產生
