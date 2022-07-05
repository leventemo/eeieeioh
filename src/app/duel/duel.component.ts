import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import { interval, take } from 'rxjs';

const data = {
  title: 'Spellcheck',
  language: 'spelling',
  instructions: 'Click on the correct word.',
  cards: [
    ['beginning', 'begining'],
    ['beginning', 'beggining'],
    ['useless', 'useles'],
    ['useful', 'usefull'],
    ['decision', 'dicision'],
    ['decision', 'descision'],
    ['successful', 'succesful'],
    ['harmful', 'harmfull'],
    ['destination', 'destinion'],
    ['worthless', 'wortless'],
  ]
}

interface Player {
  name: string;
  counter: number;
  timer: number;
}

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {

  title = data.title;
  instructions = data.instructions;
  pack = data.cards;
  currentCard = [''];
  clickedOnce = false;
  currentCardNumber = 0;
  cardsTotal = data.cards.length;
  timeAllowed = 4;

  playerA: Player = { name: 'playerA', counter: 1, timer: 0 };
  playerB: Player = { name: 'playerB', counter: 2, timer: 0 };
  currentPlayer: Player = this.playerA;
  currentCorrectCard = '';

  constructor() { }

  ngOnInit(): void { }

  start() {
    const observable = interval(1000);

    observable.subscribe((value) => {
      this.currentPlayer.timer = value;
      console.log(`${this.currentPlayer.name}: ${this.currentPlayer.timer}`);

      if (value >= this.timeAllowed) {
        this.switchPlayers();
      }
    })
  };

  switchPlayers() {

    // toggle players
    this.currentPlayer = this.currentPlayer === this.playerA ? this.playerB : this.playerA;

    this.displayCard();
    console.log('new question is coming here not elsewhere');
  }

  displayCard() {
    this.selectCurrentCard();
    this.currentCorrectCard = this.currentCard[0];
    this.randomizeCardsDisplay();
  }

  onClick(val: string) {
    console.log(this.currentCard); //this is already shuffled/randomized for display; need to create a variable for randomizedCurrentCard (for display & check)
    console.log(val);
    if (val === this.currentCard[0]) {
      console.log('correct');
    } else {
      console.log('incorrect');
    }
    this.calcScore();
    this.switchPlayers();
  };

  selectCurrentCard() {
    const rando = Utils.getRandom(this.pack.length - 1);
    this.currentCard = this.pack[rando];
    this.pack = this.pack.filter(card => card !== this.currentCard);
    this.currentCardNumber++;
  };

  randomizeCardsDisplay() {
    const optionsRando = Utils.getRandom(10, 1);
    if (optionsRando % 2) {
      this.swapCards();
    }
  };

  swapCards() {
    [this.currentCard[0], this.currentCard[1]] = [this.currentCard[1], this.currentCard[0]]
  };

  calcScore() {

  }
}

