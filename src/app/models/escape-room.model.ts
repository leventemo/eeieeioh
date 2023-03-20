export interface Card {
  question: string;
  correct: string[];
}

export interface EscapeRoomModel {
  id: number;
  title: string;
  language: string;
  instructions: string;
  cards: Card[];
}
