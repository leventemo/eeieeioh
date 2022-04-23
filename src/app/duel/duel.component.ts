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
  counterA = 'you win with 10 points';
  counterB = 'you lose with 0 points';

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    const rando = Utils.getRandom(this.pack.length - 1);
    this.currentCard = this.pack[rando];
    console.log(this.currentCard);
    this.pack = this.pack.filter(card => card !== this.currentCard);
    this.currentCardNumber++;
    this.btnValue = 'Next';
  }

  onClick() {
    alert('You clicked me, hey!');
  }

}
