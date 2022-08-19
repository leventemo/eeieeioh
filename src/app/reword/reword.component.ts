import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { Utils } from '../utils';
import rewordCollection from '../../assets/activities/rewordarray.json';

interface Card {
  sentence?: string;
  keyword?: string;
  targetLanguage?: string;
  answer?: string;
}

interface Data {
  id?: number;
  title?: string;
  language?: string;
  instructions?: string;
  cards: Card[];
}

interface Player {
  name: string;
  score: number;
}

@Component({
  selector: 'app-reword',
  templateUrl: './reword.component.html',
  styleUrls: ['./reword.component.css']
})

export class RewordComponent implements OnInit {

  data: Data = { cards: [] };

  currentPack: Card[] = [];
  instructions = () => this.data.instructions;
  cardsTotal = () => this.data.cards.length;
  currentCard: Card = {};
  isClueDisplayed = false;
  isAnswerDisplayed = false;
  currentCardCounter = 0;
  currentPlayer = 'A';
  showStartBtn = true;

  hasGameStarted() { return this.currentCardCounter !== 0; }
  /*   isNextBtnVisible() { return !this.isGameOver() && (this.isAnswerDisplayed || !this.hasGameStarted()) } */
  /* isGameOver() { return this.currentPack.length === 0; } */

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
  }
  ngOnInit(): void {
    // get the id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const cardIdFromRoute = Number(routeParams.get('id'));

    // find the deck for id we got from the route
    this.data = rewordCollection.find((array: { id: number; }) => Number(array.id) === cardIdFromRoute);

    this.currentPack = this.data.cards;
    console.log(this.currentCardCounter);

  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.data.title, instr: this.data.instructions } });
  }

  displayNextCard() {
    const rando = Utils.getRandom(this.currentPack.length - 1);
    this.currentCard = this.currentPack[rando];
    this.isClueDisplayed = false;
    this.isAnswerDisplayed = false;
    this.currentPack = this.currentPack.filter((card) => card !== this.currentCard);
    this.currentCardCounter++;
    this.showStartBtn = false;
  }

  increment(event: Event) {
    const target = event.target as HTMLInputElement;

    if (Number(target.value) === this.data.cards.length) {
      // call GameOver fn
      return;
    }

    if (this.isClueDisplayed) {
      target.value = (Number(target.value) + 1).toString();
    } else {
      target.value = (Number(target.value) + 2).toString();
    }


    target.textContent = target.value;

    this.displayNextCard();

  }

  redirect() {
    this.router.navigate(['contents']);
  }
}
