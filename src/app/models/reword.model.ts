export interface Card {
  sentence?: string;
  keyword?: string;
  targetLanguage?: string;
  answer?: string;
}

export interface RewordModel {
  id?: number;
  title?: string;
  language?: string;
  instructions?: string;
  cards: Card[];
}

export interface Player {
  name: string;
  score: number;
}
