import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { DialogBoardGameComponent } from '../dialog-board-game/dialog-board-game.component';

import { Utils } from '../utils';
import allCardDecksCollection from '../../assets/activities/boardgamearray.json';

interface Data {
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

  data: Data = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    cards: []
  };

  currentPack: string[] = [];
  instructions = () => this.data.instructions;
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
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // get the id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const cardIdFromRoute = Number(routeParams.get('id'));

    // find the deck for id we got from the route
    this.data = allCardDecksCollection.find((array: { id: number; }) => Number(array.id) === cardIdFromRoute);

    this.currentPack = this.data.cards;
  }

  openDialogInfo() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.data.title, instr: this.data.instructions, preview: this.data.cards } });
  }

  openDialogBoardGame(index: number) {
    let dialogRef = this.dialog.open(DialogBoardGameComponent, { data: { question: this.data.cards[index], activePlayer: this.activePlayer } });

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
