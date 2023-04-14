export interface ContextModel {
  id: number;
  title: string;
  language: string;
  instructions: string;
  timeAllowed: number;
  cards: Card[];
}

export interface Card {
  prompts: string[];
  options: string[];
}

export interface Player {
  name: string;
  score: number;
  timer: number;
}

export interface ResultsThisTurn {
  prompts: string[];
  correctOption: string;
  incorrectOptions: string[];
  clickingPlayer: string;
  pointsForThis: number;
}
