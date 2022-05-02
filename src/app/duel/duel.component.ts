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

interface CurrentPlayer {
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
  clickedOnce = false;
  pack = data.cards;
  currentCard = [''];
  currentCardNumber = 0;
  cardsTotal = data.cards.length;

  playerA: CurrentPlayer = { name: 'playerA', counter: 1, timer: 0 };
  playerB: CurrentPlayer = { name: 'playerB', counter: 2, timer: 0 };
  currentPlayer: CurrentPlayer = this.playerA;

  constructor() { }

  ngOnInit(): void { }

  start() {
    if (this.currentPlayer === this.playerA) {
      const counter = interval(1);
      const subscription = counter.pipe(take(1000));
      subscription.subscribe((n) => {
        this.currentPlayer.timer = n;
        console.log(`${this.currentPlayer.name}: ${n}`);
        if (n >= 999) {
          this.currentPlayer.timer = 0;
          this.currentPlayer = this.playerB;
          if (this.pack.length === 0) {
            return;
          }
          this.start();
        }
      });
    } else if (this.currentPlayer === this.playerB) {
      const counter = interval(1);
      const subscription = counter.pipe(take(1000));
      subscription.subscribe((n) => {
        this.currentPlayer.timer = n;
        console.log(`${this.currentPlayer.name}: ${n}`);
        if (n >= 999) {
          this.currentPlayer.timer = 0;
          this.currentPlayer = this.playerA;
          if (this.pack.length === 0) {
            return;
          }
          this.start();
        }
      });
    }

    this.displayCard();
    this.clickedOnce = true;

  }

  displayCard() {
    const rando = Utils.getRandom(this.pack.length - 1);
    this.currentCard = this.pack[rando];
    this.pack = this.pack.filter(card => card !== this.currentCard);
    this.currentCardNumber++;
    const optionsRando = Utils.getRandom(10, 1);
    if (optionsRando % 2) {
      [this.currentCard[0], this.currentCard[1]] = [this.currentCard[1], this.currentCard[0]]
    }
  }

  onClick(event: Event) {

    // toggle timers


    const btnclicked = (event.target as HTMLInputElement);
    console.log(this.currentCard); //this is already shuffled/randomized for display; need to create a variable for randomizedCurrentCard (for display & check)
    console.log(btnclicked.textContent);
    if (btnclicked.textContent === this.currentCard[0]) {
      console.log('correct');
    } else {
      console.log('incorrect');
    }
  }
}

