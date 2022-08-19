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

  /*COUNTER states:
  – disabled: grey, no border
  - disabled currentPlayer: add grey border
  - active current: red with red border, flashing
  */

  data: Data = { cards: [] };
  currentPack: Card[] = [];
  currentCard: Card = {};
  isClueDisplayed = false;
  isAnswerDisplayed = false;
  currentCardCounter = 0;
  instructions = () => this.data.instructions;
  cardsTotal = () => this.data.cards.length;

  playerA: Player = { name: 'playerA', score: 0 };
  playerB: Player = { name: 'playerB', score: 0 };
  currentPlayer: Player = this.playerA;

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
  }

  onCounterClick(event: Event) {
    const target = event.target as HTMLInputElement;

    if (Number(target.value) === this.data.cards.length) {
      // display Game Over
      return;
    }

    if (this.isClueDisplayed) {
      target.value = (Number(target.value) + 1).toString();
    } else {
      target.value = (Number(target.value) + 2).toString();
    }

    target.textContent = target.value;
    this.switchPlayers();
    this.displayNextCard();

  }

  getCounterClassPlayerA(): string[] {
    const classes = [];
    if (this.currentPlayer === this.playerA) {
      classes.push('countercurrentplayer');
    }
    if (this.isAnswerDisplayed && this.currentPlayer === this.playerA) {
      classes.push('countercurrentplayeractive');
    }
    return classes;
  }

  getCounterClassPlayerB(): string[] {
    const classes = [];
    if (this.currentPlayer === this.playerB) {
      classes.push('countercurrentplayer');
    }
    if (this.isAnswerDisplayed && this.currentPlayer === this.playerB) {
      classes.push('countercurrentplayeractive');
    }
    return classes;
  }

  private switchPlayers() {
    this.currentPlayer = this.currentPlayer === this.playerA ? this.playerB : this.playerA;
    console.log(this.currentPlayer);
  }


  redirect() {
    this.router.navigate(['contents']);
  }
}
