import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { Utils } from '../utils';
import { interval, Subscription } from 'rxjs';
import allDuelsDecksCollection from '../../assets/activities/duelsarray.json';

interface Data {
  id: number;
  title: string;
  language: string;
  instructions: string;
  cards: string[][];
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
    cards: [[]],
  };

  hasItStarted = false;
  gameEnded = false;
  isItAllDone = false;
  pack: string[][] = [];
  currentCard = [''];
  currentCardNumber = 0;
  cardsTotal = () => this.data.cards.length;
  timeAllowed = 500;

  playerA: Player = { name: 'playerA', score: 0, timer: 0 };
  playerB: Player = { name: 'playerB', score: 0, timer: 0 };
  currentPlayer: Player = this.playerA;
  currentCorrectCard = '';

  subscription!: Subscription;

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

  start() {
    this.displayCard();

    this.subscription = interval(10).subscribe((x) => {
      console.log(x);
      this.tiktok();
    })

    this.hasItStarted = true;
  };

  tiktok() {
    ++this.currentPlayer.timer;
    if (this.gameEnded) {
      this.subscription.unsubscribe();
    }
    if (this.currentPlayer.timer >= this.timeAllowed) {
      this.switchPlayers();
    }
  }

  onClick(val: string) {
    this.calcScore(val);
    this.switchPlayers();
    this.displayCard();
  };

  switchPlayers() {
    this.currentPlayer = this.currentPlayer === this.playerA ? this.playerB : this.playerA;
    this.currentPlayer.timer = 0;
  }

  displayCard() {
    if (this.pack.length === 0) {
      this.subscription.unsubscribe();
      return;
    }
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
    }
  }

  redirect() {
    this.router.navigate(['contents']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

