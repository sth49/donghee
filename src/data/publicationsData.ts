export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'workshop' | 'preprint';
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
  {
    title: "Advanced Neural Architecture for Natural Language Understanding",
    authors: ["Donghee Hong", "Minjae Kim", "Sunghoon Lee", "Prof. Kim"],
    venue: "AAAI Conference on Artificial Intelligence",
    year: 2025,
    type: "conference",
    isFirstAuthor: true,
    links: {
      pdf: "/papers/aaai2025.pdf",
      arxiv: "https://arxiv.org/abs/2024.12345",
      github: "https://github.com/yourusername/aaai2025"
    },
    abstract: "We propose a novel neural architecture that significantly improves natural language understanding tasks..."
  },
  {
    title: "Efficient Transformer Optimization for Large-Scale Models",
    authors: ["Donghee Hong", "Jiwoo Park", "Prof. Kim"],
    venue: "International Conference on Machine Learning (ICML)",
    year: 2024,
    type: "conference",
    isFirstAuthor: true,
    links: {
      pdf: "/papers/icml2024.pdf",
      arxiv: "https://arxiv.org/abs/2024.11111",
      github: "https://github.com/yourusername/efficient-transformer"
    },
    abstract: "This paper presents an efficient optimization technique for training large-scale transformer models..."
  },
  {
    title: "Deep Learning Approaches for Korean NLP: A Comprehensive Survey",
    authors: ["Minjae Kim", "Donghee Hong", "Prof. Lee"],
    venue: "IEEE Access",
    year: 2024,
    type: "journal",
    links: {
      doi: "10.1109/ACCESS.2024.123456",
      pdf: "/papers/ieee2024.pdf"
    },
    abstract: "We provide a comprehensive survey of deep learning methods applied to Korean natural language processing..."
  },
  {
    title: "Multi-Modal Learning for Vision and Language Tasks",
    authors: ["Donghee Hong", "Hyejin Choi", "Prof. Kim"],
    venue: "Workshop on Multimodal Learning @ NeurIPS",
    year: 2024,
    type: "workshop",
    isFirstAuthor: true,
    links: {
      pdf: "/papers/neurips2024w.pdf",
      project: "https://multimodal-project.github.io"
    },
    abstract: "We introduce a multi-modal learning framework that jointly processes vision and language information..."
  },
  {
    title: "Attention Mechanisms in Computer Vision: Recent Advances",
    authors: ["Sunghoon Lee", "Donghee Hong", "Minjae Kim"],
    venue: "Korea Software Congress (KSC)",
    year: 2024,
    type: "conference",
    links: {
      pdf: "/papers/ksc2024.pdf"
    },
    abstract: "This paper reviews recent advances in attention mechanisms for computer vision applications..."
  },
  {
    title: "Scaling Laws for Korean Language Models",
    authors: ["Donghee Hong", "Prof. Kim"],
    venue: "arXiv preprint",
    year: 2024,
    type: "preprint",
    isFirstAuthor: true,
    links: {
      arxiv: "https://arxiv.org/abs/2024.99999"
    },
    abstract: "We investigate the scaling properties of language models trained on Korean text corpora..."
  }
];