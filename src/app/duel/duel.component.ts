import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { Utils } from '../utils';
import { interval } from 'rxjs';
import allDuelsDecksCollection from '../../assets/activities/duelsarray.json';

interface Data {
  id: number;
  title: string;
  language: string;
  instructions: string;
  cards: string[][]; // OK?
}

interface Player {
  name: string;
  score: number;
  timer: number;
}

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {

  data: Data = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    cards: [[]], // OK?
  };

  // from CARDS
  isItAllDone = false;

  // DUELS
  title = this.data.title;
  instructions = this.data.instructions;
  pack: string[][] = []; // OK?
  currentCard = [''];
  clickedOnce = false;
  currentCardNumber = 0;
  cardsTotal = this.data.cards.length;
  timeAllowed = 500;

  playerA: Player = { name: 'playerA', score: 0, timer: 0 };
  playerB: Player = { name: 'playerB', score: 0, timer: 0 };
  currentPlayer: Player = this.playerA;
  currentCorrectCard = '';

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
    this.data = allDuelsDecksCollection.find((array: { id: number; }) => Number(array.id) === cardIdFromRoute);

    this.pack = this.data.cards;

  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.data.title, instr: this.data.instructions } });
  }

  startTimer() {
    this.startRound();

    const observable = interval(10);

    observable.subscribe(() => {
      ++this.currentPlayer.timer;
      if (this.currentPlayer.timer >= this.timeAllowed) {
        this.endRound();
        this.startRound();
      }
    })
  };

  onClick(val: string) {
    this.endRound(val);
    this.startRound();
  };

  startRound() {
    if (this.pack.length === 0) {
      return;
    }

    this.displayCard();
  }

  endRound(val: string | null = null) {
    this.calcScore(val);
    this.switchPlayers();
    this.currentPlayer.timer = 0;
  }

  switchPlayers() {
    this.currentPlayer = this.currentPlayer === this.playerA ? this.playerB : this.playerA;
    console.log(`${this.currentPlayer.name}`);
  }

  displayCard() {
    this.selectCurrentCard();
    this.randomizeCardsDisplay();
  }

  selectCurrentCard() {
    const rando = Utils.getRandom(this.pack.length - 1);
    this.currentCard = this.pack[rando];
    this.currentCorrectCard = this.currentCard[0];
    this.pack = this.pack.filter(card => card !== this.currentCard);
    this.currentCardNumber++;
  };

  randomizeCardsDisplay() {
    const optionsRando = Utils.getRandom(10, 1);
    if (optionsRando % 2) {
      this.swapCards();
    }
  };

  swapCards() {
    [this.currentCard[0], this.currentCard[1]] = [this.currentCard[1], this.currentCard[0]]
  };

  calcScore(val: string | null = null) {

    if (val === this.currentCorrectCard) {
      this.currentPlayer.score = this.currentPlayer.score + 500 + (500 - this.currentPlayer.timer);
    } else {
      console.log('incorrect');
    }
  }

}

