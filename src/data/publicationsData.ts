export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "conference" | "poster" | "workshop" | "preprint";
  links?: {
    pdf?: string;
    arxiv?: string;
    github?: string;
    project?: string;
    doi?: string;
  };
  bibtex?: string;
  isFirstAuthor?: boolean;
};

export const publicationsData: Publication[] = [
  // To Appear
  {
    title: "HyPockeTuner: Bringing Hyperparameter Optimization to Mobile Devices",
    authors: ["Donghee Hong", "Bongshin Lee", "Jinwook Seo", "Jaemin Jo"],
    venue: "CHI (To Appear)",
    year: 2026,
    type: "conference",
    isFirstAuthor: true,
  },
  {
    title:
      "Symetra: Visual Analytics for the Parameter Tuning Process of Symbolic Execution Engines",
    authors: ["Donghee Hong", "Minjong Kim", "Sooyoung Cha", "Jaemin Jo"],
    venue: "EuroVis (under review)",
    year: 2026,
    type: "preprint",
    isFirstAuthor: true,
  },

  // Published
  {
    title: "Symetra: Visual Analytics for Tuning Symbolic Execution Engines",
    authors: ["Donghee Hong", "Minjong Kim", "Sooyoung Cha", "Jaemin Jo"],
    venue: "IEEE VIS (Poster)",
    year: 2025,
    type: "poster",
    isFirstAuthor: true,
  },
  {
    title:
      "A System for Generating Image Prompts Using Large Language Models for Wheelchair Spoke Guard Design",
    authors: ["Sungwan Park", "Jihyeol Park", "Donghee Hong"],
    venue: "Proceedings of the Korean Computer Science Society Conference",
    year: 2024,
    type: "conference",
  },
  {
    title: "Deepfake Detection for Facial Images With Facemasks",
    authors: [
      "Donggeun Ko",
      "Sangjun Lee",
      "Jinyong Park",
      "Saebyeol Shin",
      "Donghee Hong",
      "Simon S. Woo",
    ],
    venue:
      "Proceedings of the 1st Workshop on Security Implications of Deepfakes and Cheapfakes",
    year: 2022,
    type: "workshop",
  },
  {
    title:
      "VFP290k: A Large-Scale Benchmark Dataset for Vision-Based Fallen Person Detection",
    authors: [
      "Jaeju An",
      "Jeongho Kim",
      "Hanbeen Lee",
      "Jinbeom Kim",
      "Junhyung Kang",
      "Minha Kim",
      "Saebyeol Shin",
      "Donghee Hong",
      "Simon S. Woo",
    ],
    venue:
      "The Thirty-Fifth Conference on Neural Information Processing Systems Datasets and Benchmarks Track (Round 2)",
    year: 2021,
    type: "conference",
    // links: {
    //   project: "https://neurips.cc/virtual/2021/poster/34573",
    // },
  },
];
