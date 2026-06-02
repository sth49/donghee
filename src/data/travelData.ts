export type TravelCity = {
  city: string;
  country: string;
  lat: number;
  lng: number;
  events: string[];
  type: "conference" | "program" | "travel";
  milestone?: string;
};

// Cities visited for conferences, talks, and programs.
export const travelData: TravelCity[] = [
  {
    city: "Barcelona",
    country: "Spain",
    lat: 41.39,
    lng: 2.16,
    events: ["CHI 2026 — Presented HyPockeTuner"],
    type: "conference",
    milestone: "First CHI",
  },
  {
    city: "Nottingham",
    country: "UK",
    lat: 52.95,
    lng: -1.15,
    events: ["EuroVis 2026 — Symetra"],
    type: "conference",
    milestone: "First EuroVis",
  },
  {
    city: "Vienna",
    country: "Austria",
    lat: 48.21,
    lng: 16.37,
    events: ["IEEE VIS 2025 — Symetra (Poster)"],
    type: "conference",
    milestone: "First VIS",
  },
  {
    city: "Seoul",
    country: "Korea",
    lat: 37.46,
    lng: 126.95,
    events: [
      "IEEE PacificVis 2023",
      "K-VIS 2024 — Presented ViSTrics at Seoul National University",
    ],
    type: "conference",
  },
  {
    city: "Pohang",
    country: "Korea",
    lat: 36.01,
    lng: 129.32,
    events: ["K-VIS Workshop 2025 at POSTECH"],
    type: "conference",
  },
  {
    city: "Busan",
    country: "Korea",
    lat: 35.18,
    lng: 129.08,
    events: ["K-VIS Workshop 2023"],
    type: "conference",
  },
  {
    city: "London",
    country: "UK",
    lat: 51.51,
    lng: -0.13,
    events: ["SKKU BA-DIVE Program (2023)"],
    type: "program",
  },
  {
    city: "Silicon Valley",
    country: "USA",
    lat: 37.39,
    lng: -122.08,
    events: ["Global Challenge Program (2022)"],
    type: "program",
  },
  {
    city: "College Park",
    country: "USA",
    lat: 38.99,
    lng: -76.94,
    events: ["UMD Visit Day"],
    type: "program",
  },
  {
    city: "Shanghai",
    country: "China",
    lat: 31.23,
    lng: 121.47,
    events: ["Travel"],
    type: "travel",
  },
  {
    city: "Huangshan",
    country: "China",
    lat: 29.71,
    lng: 118.31,
    events: ["Travel"],
    type: "travel",
  },
  {
    city: "Osaka",
    country: "Japan",
    lat: 34.69,
    lng: 135.5,
    events: ["Travel"],
    type: "travel",
  },
  {
    city: "Tokyo",
    country: "Japan",
    lat: 35.68,
    lng: 139.65,
    events: ["Travel"],
    type: "travel",
  },
  {
    city: "Taipei",
    country: "Taiwan",
    lat: 25.03,
    lng: 121.57,
    events: ["Travel"],
    type: "travel",
  },
  {
    city: "Kota Kinabalu",
    country: "Malaysia",
    lat: 5.98,
    lng: 116.07,
    events: ["Travel"],
    type: "travel",
  },
  {
    city: "Paris",
    country: "France",
    lat: 48.86,
    lng: 2.35,
    events: ["Travel"],
    type: "travel",
  },
];
