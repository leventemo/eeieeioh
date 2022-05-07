import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Utils } from '../utils';
import rewordCollection from '../../assets/activities/rewordarray.json';

interface Data {
  id: number;
  title: string;
  language: string;
  instructions: string;
  cards: string[];
}

@Component({
  selector: 'app-reword',
  templateUrl: './reword.component.html',
  styleUrls: ['./reword.component.css']
})
export class RewordComponent implements OnInit {

  data: Data = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    cards: []
  };

  currentPack: string[] = [];
  instructions = () => this.data.instructions;
  cardsTotal = () => this.data.cards.length;
  btnValue = 'Start';
  currentCard = '';
  currentCardCounter = 0;

  constructor(
    public router: Router,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    // get the id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const cardIdFromRoute = Number(routeParams.get('id'));

    // find the deck for id we got from the route
    this.data = rewordCollection.find((array: { id: number; }) => Number(array.id) === cardIdFromRoute);

    this.currentPack = this.data.cards;
  }

  next() {
    const rando = Utils.getRandom(this.currentPack.length - 1);
    this.currentCard = this.currentPack[rando];
    this.currentPack = this.currentPack.filter((card: string) => card !== this.currentCard);
    this.currentCardCounter++;
    this.btnValue = 'Next';
  }

  isGameOver() {
    return this.currentPack.length === 0;
  }

  redirect() {
    this.router.navigate(['contents']);
  }
}
