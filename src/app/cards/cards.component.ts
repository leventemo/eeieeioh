import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';

const data = {
  title: 'Ask me anything',
  instructions: 'this would the instructions',
  cards: [
    'Where were you born?',
    'What\'s the blabla?',
    'Which side are you on?',
    'What\'s the craic?',
    'Where have you been all day?'
  ]
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  title = data.title;
  instructions = data.instructions;
  btnValue = 'Start';
  pack = data.cards;
  currentCard = '';
  done = 0;
  cardsTotal = data.cards.length;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    const rando = Utils.getRandom(this.pack.length - 1);
    this.currentCard = this.pack[rando];
    this.pack = this.pack.filter(card => card !== this.currentCard);
    this.done++;
    this.btnValue = 'Next';
  }
}
