import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';

const data =
{
  id: 1,
  title: 'Have you ever ...?',
  language: 'Present Perfect for life experiences, Past Simple for telling a story',
  instructions: 'Work in pairs using one phone between you. Take turns to ask and answer the questions. Don\'t accept a short answer.',
  cards: [
    'Have you ever been in a newspaper?',
    'Have you ever forgotten someone\'s birthday ?',
    'Have you ever travelled by plane?',
    'Have you ever won a competition?',
    'Have you ever found any money in the street?',
    'Have you ever had a broken bone?',
    'Have you ever tried a dangerous or extreme sport?',
    'Have you ever cooked a meal for more than 5 people?',
    'Have you ever tried to learn to play a musical instrument?',
    'Have you ever talked with a famous person?',
    'Have you ever spent a whole night without sleep?',
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
