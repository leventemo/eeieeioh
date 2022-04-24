import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import cardContent from '../../assets/activities/cards.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  data = cardContent;

  title = this.data.title;
  instructions = this.data.instructions;
  pack = this.data.cards;
  cardsTotal = this.data.cards.length;
  btnValue = 'Start';
  currentCard = '';
  currentCardNumber = 0;

  constructor(public router: Router) {

  }

  ngOnInit(): void {
  }

  next() {
    const rando = Utils.getRandom(this.pack.length - 1);
    this.currentCard = this.pack[rando];
    this.pack = this.pack.filter((card: string) => card !== this.currentCard);
    this.currentCardNumber++;
    this.btnValue = 'Next';

    if (this.currentCardNumber - 1 === this.cardsTotal) {
      this.currentCard = 'Game over';
      this.btnValue = 'Back to Contents';
    }
  }

  redirect() {
    this.router.navigate(['contents']);
  }
}
