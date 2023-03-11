import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { DialogBoardGameComponent } from '../dialog-board-game/dialog-board-game.component';

import { ActivityService } from '../activity.service';
import { Utils } from '../utils';

interface BoardGameModel {
  id: number;
  title: string;
  language: string;
  instructions: string;
  cards: string[];
}

interface Player {
  name: string;
  position: number;
  takingOn: number;
}

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.css']
})
export class BoardGameComponent implements OnInit {

  activityData: BoardGameModel = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    cards: []
  };

  currentPack: string[] = [];
  instructions = () => this.activityData.instructions;
  currentCard = '';
  isItAllDone = false;
  winner = '';

  dashBtn = 'Start';
  hasGameStarted = false;
  activeSquare = 0;
  isNextBtnDisabled = false;

  playerA: Player = {
    name: 'A',
    position: 0,
    takingOn: 0
  };
  playerB: Player = {
    name: 'B',
    position: 0,
    takingOn: 0
  };
  activePlayer: Player = this.playerA;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {

    const activityId = Number(this.route.snapshot.url[1].path);

    this.activityService.fetchBoardGameActivity(activityId)
      .subscribe((result) => {
        this.activityData = result;
        this.currentPack = this.activityData.cards;
      });

  }

  openDialogInfo() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.activityData.title, instr: this.activityData.instructions, preview: this.activityData.cards } });
  }

  openDialogBoardGame(index: number) {
    let dialogRef = this.dialog.open(DialogBoardGameComponent, { data: { question: this.activityData.cards[index], activePlayer: this.activePlayer } });

    dialogRef.afterClosed().subscribe(result => {
      this.isNextBtnDisabled = false;
      if (result === 'true') {
        this.calcScore();
      } else if (this.activePlayer === this.playerA) {
        this.playerA.takingOn = 0;
      } else if (this.activePlayer === this.playerB) {
        this.playerB.takingOn = 0;
      }
      this.switchPlayers();
    })
  }

  start() {
    this.activePlayer.takingOn = Utils.getRandom(2, 1);
    this.hasGameStarted = true;
    this.isNextBtnDisabled = true;
    this.dashBtn = 'Next';
  }

  private calcScore() {
    if (this.activePlayer === this.playerA) {
      this.playerA.position = this.activePlayer.takingOn;
      this.playerA.takingOn = 0;
    } else if ((this.activePlayer === this.playerB)) {
      this.playerB.position = this.activePlayer.takingOn;
      this.playerB.takingOn = 0;
    }
  }

  private switchPlayers() {
    this.activePlayer = this.activePlayer === this.playerA ? this.playerB : this.playerA;
    this.activePlayer.takingOn = 0;
    this.activeSquare = 0;
  }

  rollDice() {
    this.isNextBtnDisabled = true;
    this.activePlayer.takingOn = this.activePlayer.position + Utils.getRandom(2, 1);
    if (this.activePlayer.takingOn > 18) {
      this.isItAllDone = true;
      this.chooseWinner();
    }
  }

  private chooseWinner() {
    if (this.playerA.takingOn > this.playerB.takingOn) {
      this.winner = `A wins. Congratulations!`;
    } else {
      this.winner = `B wins. Congratulations!`;
    }
  }

  redirect() {
    this.router.navigate(['contents']);
  }
}
