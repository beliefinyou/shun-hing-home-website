export const whatsappMessages = {
  general:
    "你好，我想查詢順興家居裝飾公司的家居服務，請問可以提供更多資料嗎？",
  renovation:
    "你好，我想查詢室內設計及全屋裝修服務，想了解下一步安排。",
  furniture:
    "你好，我想查詢家具訂製服務，請問可以協助了解尺寸及款式嗎？",
  flooring:
    "你好，我想查詢地板及地面工程服務，請問可以協助了解材料及安排嗎？",
  measure:
    "你好，我想預約免費上門度尺及諮詢，請問如何安排？",
} as const;

export type WhatsAppIntent = keyof typeof whatsappMessages;
