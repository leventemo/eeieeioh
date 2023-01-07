import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { Utils } from '../utils';
import allCardDecksCollection from '../../assets/activities/rankingarray.json';

import { CdkDragDrop } from '@angular/cdk/drag-drop/';
import { moveItemInArray } from '@angular/cdk/drag-drop';

interface Data {
  id: number;
  title: string;
  language: string;
  instructions: string;
  cards: string[];
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  data: Data = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    cards: []
  };

  currentPack: string[] = [];
  currentCard = '';

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    // get the id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const cardIdFromRoute = Number(routeParams.get('id'));

    // find the deck for id we got from the route
    this.data = allCardDecksCollection.find((array: { id: number; }) => Number(array.id) === cardIdFromRoute);

    this.currentPack = Utils.shuffleStringsArray(this.data.cards);
  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.data.title, instr: this.data.instructions } });
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.currentPack, event.previousIndex, event.currentIndex);
  }

  redirect() {
    this.router.navigate(['contents']);
  }

}
