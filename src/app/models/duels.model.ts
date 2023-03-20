export interface DuelsModel {
  id: number;
  title: string;
  language: string;
  instructionsForDuels: string;
  cards: string[][];
}

export interface Player {
  name: string;
  score: number;
  timer: number;
}

export interface ResultsThisTurn {
  correctOption: string;
  incorrectOption: string;
  clickingPlayer: string;
  pointsForThis: number;
}
