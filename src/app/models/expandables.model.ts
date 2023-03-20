export interface ExpandablesModel {
  id: number;
  title: string;
  language: string;
  instructionsForExpandables: string;
  cards: string[][];
}

export interface ExpandablePair {
  visible: string;
  expandable: string;
}
