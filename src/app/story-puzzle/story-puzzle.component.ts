import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { Utils } from '../utils';

import allCardDecksCollection from '../../assets/activities/storypuzzlearray.json';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface Chunks {
  before: string;
  chunk: string;
  after: string;
}

interface Data {
  id: number;
  title: string;
  language: string;
  instructions: string;
  url: string;
  tasks: string[]
  cards: Chunks[];
}

@Component({
  selector: 'app-story-puzzle',
  templateUrl: './story-puzzle.component.html',
  styleUrls: ['./story-puzzle.component.css']
})

export class StoryPuzzleComponent implements OnInit {

  data: Data = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    url: '',
    tasks: [''],
    cards: []
  };

  chunkArray: string[] = [];
  instructions = () => this.data.instructions;
  cardsTotal = () => this.data.cards.length;
  stepper = 0;
  highlightChunks = false;

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

    this.chunkArray = Utils.shuffleStringsArray(this.data.cards.map(item => item.chunk));

  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.data.title, instr: this.data.instructions } });
  }

  next() {
    ++this.stepper;
  }

  getChunkClass() {
    if (this.stepper === 1) {
      return 'highlight';
    } else {
      return '';
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.chunkArray, event.previousIndex, event.currentIndex);
    console.log(this.chunkArray);
  }

  redirect() {
    this.router.navigate(['contents']);
  }

}
