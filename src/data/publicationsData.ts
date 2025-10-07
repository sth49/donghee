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
  abstract?: string;
  bibtex?: string;
  isFirstAuthor?: boolean;
};

export const publicationsData: Publication[] = [
  // Under Review
  {
    title:
      "HyPockeTuner: enabling mobile hyperparameter optimization through a novel event sequence visualization",
    authors: ["Donghee Hong", "Bongshin Lee", "Jinwook Seo", "Jaemin Jo"],
    venue: "CHI (under review)",
    year: 2026,
    type: "preprint",
    isFirstAuthor: true,
    abstract:
      "We present HyPockeTuner, a mobile interactive HPO system featuring EventCrumb, a novel event sequence visualization tailored for smartphones that unified HPO progress, user interventions, and outcomes on a single timeline.",
  },
  {
    title:
      "Symetra: visual analytics for the parameter tuning process of symbolic execution engines",
    authors: ["Donghee Hong", "Minjong Kim", "Sooyoung Cha", "Jaemin Jo"],
    venue: "IEEE PacificVis (under review)",
    year: 2026,
    type: "preprint",
    isFirstAuthor: true,
    abstract:
      "We present Symetra, a visualization system for analyzing hyperparameters and their impact on symbolic execution engines, designed in collaboration with domain experts in software testing.",
  },

  // Published
  {
    title: "Symetra: visual analytics for tuning symbolic execution engines",
    authors: ["Donghee Hong", "Minjong Kim", "Sooyoung Cha", "Jaemin Jo"],
    venue: "IEEE VIS (Poster)",
    year: 2025,
    type: "poster",
    isFirstAuthor: true,
    abstract:
      "A visual analytics system for tuning symbolic execution engines through interactive parameter exploration.",
  },
  {
    title:
      "A system for generating image prompts using large language models for wheelchair spoke guard design",
    authors: ["Sungwan Park", "Jihyeol Park", "Donghee Hong"],
    venue: "Proceedings of the Korean Computer Science Society Conference",
    year: 2024,
    type: "conference",
    abstract:
      "An AI system that converts Korean design descriptions into appropriate image-generation prompts for young wheelchair users, addressing accessibility gaps for children with disabilities.",
  },
  {
    title: "Deepfake detection for facial images with facemasks",
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
    abstract:
      "A deepfake detection model capable of identifying fake faces regardless of mask usage.",
  },
  {
    title:
      "VFP290k: a large-scale benchmark dataset for vision-based fallen person detection",
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
    abstract:
      "A large-scale benchmark dataset containing 290k images for vision-based fallen person detection, contributing to real-world safety applications.",
  },
];
