import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import { interval } from 'rxjs';

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
  score: number;
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

  playerA: Player = { name: 'playerA', score: 0, timer: 0 };
  playerB: Player = { name: 'playerB', score: 0, timer: 0 };
  currentPlayer: Player = this.playerA;
  currentCorrectCard = '';

  constructor() { }

  ngOnInit(): void { }

  startTimer() {
    this.startRound();

    const observable = interval(1000);

    observable.subscribe(() => {
      ++this.currentPlayer.timer;
      if (this.currentPlayer.timer >= this.timeAllowed) {
        this.endRound();
        this.startRound();
      }
    })
  };

  onClick(val: string) {
    this.endRound(val);
    this.startRound();
  };

  startRound() {
    if (this.pack.length === 0) {
      return;
    }

    this.displayCard();
  }

  endRound(val: string | null = null) {
    this.calcScore(val);
    this.switchPlayers();
    this.currentPlayer.timer = 0;
  }

  switchPlayers() {
    this.currentPlayer = this.currentPlayer === this.playerA ? this.playerB : this.playerA;
    console.log(`${this.currentPlayer.name}`);
  }

  displayCard() {
    this.selectCurrentCard();
    this.randomizeCardsDisplay();
  }

  selectCurrentCard() {
    const rando = Utils.getRandom(this.pack.length - 1);
    this.currentCard = this.pack[rando];
    this.currentCorrectCard = this.currentCard[0];
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

  calcScore(val: string | null = null) {
    console.log(val);

    if (val === this.currentCorrectCard) {
      console.log(this.currentCorrectCard);
    } else {
      console.log('incorrect');
    }
  }

}

