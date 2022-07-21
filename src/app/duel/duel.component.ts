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

interface ResultsThisTurn {
  correctOption: string;
  incorrectOption: string;
  clickingPlayer: string;
  pointsForThis: number;
}

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit { // do I need "implement OnDestroy" above?

  data: Data = { id: 0, title: '', language: '', instructions: '', cards: [[]] };
  pack: string[][] = [];
  cardsTotal = () => this.data.cards.length;
  timeAllowed = 500;

  hasItStarted = false; // to hide "Start" btns
  isItAllDone = false;

  playerA: Player = { name: 'playerA', score: 0, timer: 0 };
  playerB: Player = { name: 'playerB', score: 0, timer: 0 };
  currentCard = [''];
  currentCardNumber = 0;
  currentPlayer: Player = this.playerA;
  currentCorrectCard = '';
  currentIncorrectCard = '';

  pointsEarnedThisTurn = 0;
  result: ResultsThisTurn = {
    correctOption: '',
    incorrectOption: '',
    clickingPlayer: '',
    pointsForThis: 0,
  };
  resultsAll: ResultsThisTurn[] = [];

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
    if (this.pack.length === 0) {
      // do what?
    }

    this.displayCard();
    this.subscription = interval(10).subscribe(() => {
      this.tiktok();
    })

    this.hasItStarted = true;
  };

  tiktok() {
    ++this.currentPlayer.timer;

    if (this.currentPlayer.timer >= this.timeAllowed) {
      this.switchPlayers();
    }
  }

  onClick(val: string) {
    if (this.pack.length === 0) {
      this.subscription.unsubscribe();

      // hide duel, show feddback
      return;
    }
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
    this.currentIncorrectCard = this.currentCard[1];
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
      this.pointsEarnedThisTurn = 500 + (500 - this.currentPlayer.timer);
    } else {
      this.pointsEarnedThisTurn = 0;
    }
    this.currentPlayer.score = this.currentPlayer.score + this.pointsEarnedThisTurn;

    let resultObjThisTurn: ResultsThisTurn = {
      correctOption: this.currentCorrectCard,
      incorrectOption: this.currentIncorrectCard,
      clickingPlayer: this.currentPlayer.name,
      pointsForThis: this.pointsEarnedThisTurn
    }

    this.resultsAll.push(resultObjThisTurn);
    console.log(this.resultsAll);

  }

  redirect() {
    this.router.navigate(['contents']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

