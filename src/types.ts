export interface PortfolioItem {
  id: string;
  title: string;
  category: 'restoration' | 'colorization' | 'animation' | 'complex' | string;
  categories?: string[];
  categoryLabel: string;
  year: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  isVideo?: boolean;
  videoUrl?: string;
  animatedVideoUrl?: string;
  damageTags: string[];
  workDone: string[];
}

export interface Advantage {
  id: string;
  iconName: string;
  title: string;
  description: string;
  badge?: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  iconName: string;
  tip?: string;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  date: string;
  avatar: string;
  photoTitle: string;
  text: string;
  rating: number;
  resultImg?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
