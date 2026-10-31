export interface SiteContact {
  phone: string | null;
  whatsapp: string | null;
}

export interface SiteHours {
  time: string;
  days: string | null;
  note: string;
}

export interface Store {
  district: string | null;
  nearbyLandmark: string | null;
  note: string;
}
