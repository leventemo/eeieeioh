import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';

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
  btnValue = 'Start';
  pack = data.cards;
  currentCard = [''];
  currentCardNumber = 0;
  cardsTotal = data.cards.length;
  counterA = 0;
  counterB = 0;
  timerA = 0;
  timerB = 0;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    const rando = Utils.getRandom(this.pack.length - 1);
    this.currentCard = this.pack[rando];
    this.pack = this.pack.filter(card => card !== this.currentCard);
    this.currentCardNumber++;
    this.btnValue = 'Next';
    const optionsRando = Utils.getRandom(10, 1);
    if (optionsRando % 2) {
      [this.currentCard[0], this.currentCard[1]] = [this.currentCard[1], this.currentCard[0]]
    }
  }

  onClick() {
    const now = Date.now();
    console.log(now);

    const count = setInterval(() => {
      const timePassed = Math.round((Date.now() - now));
      console.log(timePassed)
      this.timerA = timePassed;

      if (timePassed === 120) {
        clearInterval(count);
        return;
      }

      const minutes = Math.floor(timePassed / 60);
      const seconds = timePassed % 60;


    }, 1000)
  }
}

