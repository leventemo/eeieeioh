import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { MatTableDataSource } from '@angular/material/table';

import { Utils } from '../../utils';
import { interval, Observable, Subscription } from 'rxjs';
import { ActivityService } from '../../activity.service';
import { DuelsModel, Player, ResultsThisTurn } from '../../models/duels.model';

@Component({
  selector: 'app-duels',
  templateUrl: './duels.component.html',
  styleUrls: ['./duels.component.css']
})
export class DuelsComponent implements OnInit {

  activityData: DuelsModel = { id: 0, title: '', language: '', instructionsForDuels: '', cards: [[]] };
  currentPack: string[][] = [];
  cardsTotal = () => this.activityData.cards.length;
  timeAllowed = 600;

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
    public dialog: MatDialog,
    private activityService: ActivityService) {
  }

  ngOnInit(): void {

    const activityId = Number(this.route.snapshot.url[1].path);

    this.activityService.getDuels(activityId)
      .subscribe((result) => {
        this.activityData = result;
        this.currentPack = this.activityData.cards;
      });

  }

  openDialog() {
    this.dialog.open(
      DialogInfoComponent,
      { data: { title: this.activityData.title, instr: this.activityData.instructionsForDuels } }
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
    if (this.currentPack.length === 0) {
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
      this.pointsEarnedThisTurn = 600 + (600 - this.currentPlayer.timer);
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
    const rando = Utils.getRandom(this.currentPack.length - 1);
    this.currentCard = this.currentPack[rando];
    this.currentCorrectCard = this.currentCard[0];
    this.currentIncorrectCard = this.currentCard[1];
    this.currentPack = this.currentPack.filter(card => card !== this.currentCard);
    this.currentCardNumber++;
  };

  private randomizeCardsDisplay() {
    if (Utils.getRandom(1, 0)) {
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

