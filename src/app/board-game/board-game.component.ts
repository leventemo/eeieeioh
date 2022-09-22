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

  hasGameStarted = false;
  activeSquare = 0;

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
    this.dialog.open(DialogInfoComponent, { data: { title: this.data.title, instr: this.data.instructions } });
  }

  openDialogBoardGame(index: number) {
    let dialogRef = this.dialog.open(DialogBoardGameComponent, { data: { question: this.data.cards[index], activePLayer: this.activePlayer } });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result is: ${result}`);
      console.log(this.activePlayer);
    })
  }

  start() {
    this.activePlayer.position = 1;
    this.activePlayer.takingOn = 1;
    this.hasGameStarted = true;
  }


  redirect() {
    this.router.navigate(['contents']);
  }
}
