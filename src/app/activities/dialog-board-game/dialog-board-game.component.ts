import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Player {
  name: string;
  position: number;
  takingOn: number;
}

@Component({
  selector: 'app-dialog-board-game',
  templateUrl: './dialog-board-game.component.html',
  styleUrls: ['./dialog-board-game.component.css']
})
export class DialogBoardGameComponent implements OnInit {

  activePlayer!: Player;
  question!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.activePlayer = this.data.activePlayer;
    this.question = this.data.question;
  }

  ngOnInit(): void {
  }

}
