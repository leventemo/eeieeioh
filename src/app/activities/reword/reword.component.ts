import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { ActivityService } from '../../activity.service';
import { Utils } from '../../utils';
import { Card, RewordModel, Player } from '../../models/reword.model';

@Component({
  selector: 'app-reword',
  templateUrl: './reword.component.html',
  styleUrls: ['./reword.component.css']
})

export class RewordComponent implements OnInit {

  activityData: RewordModel = { cards: [] };
  currentPack: Card[] = [];
  currentCard: Card = {};
  isClueDisplayed = false;
  isAnswerDisplayed = false;
  areQnestionsDone = false;
  currentCardCounter = 0;
  instructions = () => this.activityData.instructions;
  cardsTotal = () => this.activityData.cards.length;

  playerA: Player = { name: 'playerA', score: 0 };
  playerB: Player = { name: 'playerB', score: 0 };
  currentPlayer: Player = this.playerB;
  pointsEarnedThisTurn = 0;
  gameResults: string = '';

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {

    const activityId = Number(this.route.snapshot.url[1].path);

    this.activityService.getReword(activityId)
      .subscribe((result) => {
        this.activityData = result;
        this.currentPack = this.activityData.cards;
      });

  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.activityData.title, instr: this.activityData.instructions } });
  }

  displayNextCard() {
    if (this.currentPack.length === 0) {
      this.areQnestionsDone = true;
      this.chooseWinner();
      return;
    }
    this.switchPlayers();
    const rando = Utils.getRandom(this.currentPack.length - 1);
    this.currentCard = this.currentPack[rando];
    this.isClueDisplayed = false;
    this.isAnswerDisplayed = false;
    this.currentPack = this.currentPack.filter((card) => card !== this.currentCard);
    this.currentCardCounter++;
  }

  onCounterClick(event: Event) {
    const target = event.target as HTMLInputElement;
    const val = target.value;

    this.calcScore();
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
  }

  private calcScore(val: string | null = null) {
    let value = Number(val);

    if (this.isClueDisplayed) {
      this.pointsEarnedThisTurn = value + 1;
    } else {
      this.pointsEarnedThisTurn = value + 2;
    }
    this.currentPlayer.score = this.currentPlayer.score + this.pointsEarnedThisTurn;
  }

  private chooseWinner() {
    if (this.playerA.score === this.playerB.score) {
      this.gameResults = `No winner: it's a draw.`
    } else if (this.playerA.score > this.playerB.score) {
      this.gameResults = `A wins. Congratulations!`;
    } else {
      this.gameResults = `B wins. Congratulations!`;
    }
  }

  redirect() {
    this.router.navigate(['contents']);
  }
}
