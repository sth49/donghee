export type NewsType =
  | "award"
  | "paper"
  | "presentation"
  | "scholarship"
  | "position"
  | "graduation"
  | "conference";

export type NewsItem = {
  date: string;
  content: string;
  type: NewsType;
  link?: string;
};

export const newsData: NewsItem[] = [
  {
    date: "2026.01",
    content: "One paper accepted to **CHI 2026**. See you in Barcelona!",
    type: "paper",
  },
  {
    date: "2025.12",
    content:
      "Received **Honorable Mention** at SKKU Graduate Student Paper Award",
    type: "award",
  },
  {
    date: "2025.11",
    content: "Presented a poster at **IEEE VIS 2025** in Vienna, Austria",
    type: "presentation",
  },
  {
    date: "2025.08",
    content: "One poster accepted to **IEEE VIS 2025**",
    type: "paper",
  },
  {
    date: "2024.09",
    content: "Selected as **SBS Cultural Foundation** Graduate Scholar",
    type: "scholarship",
  },
  {
    date: "2024.06",
    content: "Presented at **Korea Computer Congress (KCC) 2024**",
    type: "presentation",
  },
  {
    date: "2024.03",
    content: "Started **M.S. in Artificial Intelligence** at SKKU",
    type: "position",
  },
  {
    date: "2024.02",
    content: "Graduated with B.S. in Computer Science, **Summa Cum Laude**",
    type: "graduation",
  },
];
