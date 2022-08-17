import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { MatTableDataSource } from '@angular/material/table';

import { Utils } from '../utils';
import { interval, Observable, Subscription } from 'rxjs';
import allContextDecksCollection from '../../assets/activities/contextarray.json';

interface Data {
  id: number;
  title: string;
  language: string;
  instructionsForDuels: string;
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
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {

  data: Data = { id: 0, title: '', language: '', instructionsForDuels: '', cards: [[]] };
  pack: string[][] = [];
  cardsTotal = () => this.data.cards.length;
  timeAllowed = 500;

  // to hide "Start" & "Contents" btns
  hasItStarted = false;
  // to display feedback table & winner
  areQnsDone = false;

  playerA: Player = { name: 'playerA', score: 0, timer: 0 };
  playerB: Player = { name: 'playerB', score: 0, timer: 0 };
  currentCard = [''];
  currentCardNumber = 0;
  currentPlayer: Player = this.playerA;
  currentCorrectCard = '';
  currentIncorrectCard = '';
  winner: string = '';

  pointsEarnedThisTurn = 0;
  result: ResultsThisTurn = {
    correctOption: '',
    incorrectOption: '',
    clickingPlayer: '',
    pointsForThis: 0,
  };
  resultsAll: ResultsThisTurn[] = [];

  subscription!: Subscription;

  // for feedback table
  displayedColumns: string[] = ['correct', 'incorrect', 'playerA', 'playerB'];
  dataSource = new MatTableDataSource(this.resultsAll);

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
    this.data = allContextDecksCollection.find((array: { id: number; }) => Number(array.id) === cardIdFromRoute);

    this.pack = this.data.cards;
  }

  openDialog() {
    this.dialog.open(
      DialogInfoComponent,
      { data: { title: this.data.title, instr: this.data.instructionsForDuels } }
    );
  }

  start() {
    this.displayNextCard();
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
      this.subscription?.unsubscribe();
      this.areQnsDone = true;
      this.calcScore(val);
      this.chooseWinner();
      return;
    }
    this.calcScore(val);
    this.switchPlayers();
    this.displayNextCard();
  };

  private displayNextCard() {
    this.selectCurrentCard();
    this.randomizeCardsDisplay();
  }

  private calcScore(val: string | null = null) {
    if (val === this.currentCorrectCard) {
      this.pointsEarnedThisTurn = 500 + (500 - this.currentPlayer.timer);
    } else {
      this.pointsEarnedThisTurn = 0;
    }
    this.currentPlayer.score = this.currentPlayer.score + this.pointsEarnedThisTurn;

    this.saveResults();
  }

  private switchPlayers() {
    this.currentPlayer = this.currentPlayer === this.playerA ? this.playerB : this.playerA;
    this.currentPlayer.timer = 0;
  }

  private selectCurrentCard() {
    const rando = Utils.getRandom(this.pack.length - 1);
    this.currentCard = this.pack[rando];
    this.currentCorrectCard = this.currentCard[0];
    this.currentIncorrectCard = this.currentCard[1];
    this.pack = this.pack.filter(card => card !== this.currentCard);
    this.currentCardNumber++;
  };

  private randomizeCardsDisplay() {
    if (Utils.getRandom(0, 1)) { // high, low: param1 = 1 is enough – test it
      [this.currentCard[0], this.currentCard[1]] = [this.currentCard[1], this.currentCard[0]];
    }
  };

  private saveResults() {
    this.resultsAll.push({
      correctOption: this.currentCorrectCard,
      incorrectOption: this.currentIncorrectCard,
      clickingPlayer: this.currentPlayer.name,
      pointsForThis: this.pointsEarnedThisTurn
    });
  }

  private chooseWinner() {
    if (this.playerA.score === this.playerB.score) {
      this.winner = `No winner: it's a draw.`
    } else if (this.playerA.score > this.playerB.score) {
      this.winner = `A wins. Congratulations!`;
    } else {
      this.winner = `B wins. Congratulations!`;
    }
  }

  redirect() {
    this.router.navigate(['contents']);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
