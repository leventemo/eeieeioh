import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-board-game',
  templateUrl: './dialog-board-game.component.html',
  styleUrls: ['./dialog-board-game.component.css']
})
export class DialogBoardGameComponent implements OnInit {

  activePlayer = this.data.activePLayer.name;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
