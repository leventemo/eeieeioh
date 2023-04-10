import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { MatTableDataSource } from '@angular/material/table';

import { ActivityService } from '../../activity.service';
import { Utils } from '../../utils';
import { interval, Subscription } from 'rxjs';
import { ContextModel, Card, Player, ResultsThisTurn } from '../../models/context.model';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {

  activityData: ContextModel = { id: 0, title: '', language: '', instructionsForDuels: '', cards: [{ prompts: [], options: [] }] };
  currentPack: Card[] = [];
  cardsTotal = () => this.activityData.cards.length;
  timeAllowed = 600;

  // to hide "Start" & "Contents" btns
  hasItStarted = false;
  // to display feedback table & winner
  areQnsDone = false;

  playerA: Player = { name: 'playerA', score: 0, timer: 0 };
  playerB: Player = { name: 'playerB', score: 0, timer: 0 };
  currentCard: Card = { prompts: ['', ''], options: ['...', '...'] };
  currentCardNumber = 0;
  currentPlayer: Player = this.playerA;
  currentCorrectOption = '';
  currentIncorrectOptions = [''];
  winner: string = '';
  clickedValue: string | null = '';

  pointsEarnedThisTurn = 0;
  result: ResultsThisTurn = {
    prompts: [],
    correctOption: '',
    incorrectOptions: [''],
    clickingPlayer: '',
    pointsForThis: 0,
  };
  feedback: ResultsThisTurn[] = [];

  subscription!: Subscription;

  // for feedback table
  displayedColumns: string[] = ['prompts', 'correct', 'incorrect', 'playerA', 'playerB'];
  dataSource = new MatTableDataSource(this.feedback);

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private activityService: ActivityService) {
  }

  ngOnInit(): void {

    const activityId = Number(this.route.snapshot.url[1].path);

    this.activityService.getContext(activityId)
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

  onClick(value: string) {
    this.calcScore(value);

    if (this.currentPack.length === 0) {
      this.subscription?.unsubscribe();
      this.chooseWinner();
      this.areQnsDone = true;
      return;
    }
    this.switchPlayers();
    this.displayNextCard();
  };

  private displayNextCard() {
    this.selectCurrentCard();
    this.randomizeOptionsDisplay();
  }

  private calcScore(val: string | null = null) {
    const isWin = val === this.currentCorrectOption;
    this.pointsEarnedThisTurn = isWin ? 600 + (600 - this.currentPlayer.timer) : 0;
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
    this.currentCorrectOption = this.currentCard.options[0];
    this.currentIncorrectOptions = this.currentCard.options.slice(1);
    this.currentPack = this.currentPack.filter(card => card !== this.currentCard);
    this.currentCardNumber++;
  };

  private randomizeOptionsDisplay() {
    if (Utils.getRandom(1, 0)) { // high, low: param1 = 1 is enough – test it
      Utils.shuffleStringsArray(this.currentCard.options);
    }
  };

  private saveResults() {
    this.feedback.push({
      prompts: this.currentCard.prompts,
      correctOption: this.currentCorrectOption,
      incorrectOptions: this.currentIncorrectOptions,
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
