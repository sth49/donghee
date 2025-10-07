export type NewsItem = {
  date: string;
  title: string;
  description?: string;
  link?: string;
  type: 'publication' | 'award' | 'talk' | 'general' | 'position';
};

export const newsData: NewsItem[] = [
  {
    date: "2024.12",
    title: "Paper accepted at AAAI 2025",
    description: "Our paper 'Advanced Neural Architecture for NLP' has been accepted",
    type: "publication"
  },
  {
    date: "2024.11",
    title: "Best Paper Award at KSC 2024",
    description: "Received best paper award at Korea Software Congress",
    type: "award"
  },
  {
    date: "2024.10",
    title: "Invited Talk at AI Workshop",
    description: "Presented research on deep learning applications at Seoul AI Workshop",
    type: "talk"
  },
  {
    date: "2024.09",
    title: "Started Graduate Studies",
    description: "Joined Prof. Kim's lab as a graduate student",
    type: "position"
  },
  {
    date: "2024.06",
    title: "Paper accepted at ICML 2024",
    description: "Our work on transformer optimization has been accepted",
    type: "publication"
  },
  {
    date: "2024.03",
    title: "Graduated with Honors",
    description: "Completed B.S. in Computer Science, Summa Cum Laude",
    type: "general"
  }
];