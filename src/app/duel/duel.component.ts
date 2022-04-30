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

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {

  title = data.title;
  instructions = data.instructions;
  counterA: number = 0;
  counterB: number = 0;
  timerA: number = 0;
  timerB: number = 0;
  clickedOnce = false;
  pack = data.cards;
  currentCard = [''];
  currentCardNumber = 0;
  cardsTotal = data.cards.length;
  tyotyo = {};

  constructor() { }

  ngOnInit(): void { }

  start() {

    const secondsCounter = interval(1000);
    const subscription = secondsCounter.subscribe((n) => {
      this.timerA = n;
    });

    const rando = Utils.getRandom(this.pack.length - 1);
    this.currentCard = this.pack[rando];
    this.pack = this.pack.filter(card => card !== this.currentCard);
    this.currentCardNumber++;
    const optionsRando = Utils.getRandom(10, 1);
    if (optionsRando % 2) {
      [this.currentCard[0], this.currentCard[1]] = [this.currentCard[1], this.currentCard[0]]
    }
    this.clickedOnce = true;

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

