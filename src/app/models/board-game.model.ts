export interface BoardGameModel {
  id: number;
  title: string;
  language: string;
  instructions: string;
  cards: string[];
}

export interface Player {
  name: string;
  position: number;
  takingOn: number;
}
