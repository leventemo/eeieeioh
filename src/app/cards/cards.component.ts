import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Utils } from '../utils';
import allCardDecksCollection from '../../assets/activities/cardsarray.json';

interface Data {
  id: number;
  title: string;
  language: string;
  instructions: string;
  cards: string[];
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  data: Data = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    cards: []
  };

  title = this.data.title;
  instructions = this.data.instructions;
  pack = this.data.cards;
  cardsTotal = this.data.cards.length;
  btnValue = 'Start';
  currentCard = '';
  currentCardNumber = 0;

  constructor(
    public router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // get the id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const cardIdIdFromRoute = Number(routeParams.get('id'));
    console.log(cardIdIdFromRoute);

    // find the deck for id we got from the route
    this.data = allCardDecksCollection.find((array: { id: number; }) => Number(array.id) === cardIdIdFromRoute);
    console.log(this.data);
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
