import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import allCardDecksCollection from '../../assets/activities/storypuzzlearray.json';

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
  instructionsOne: string;
  instructionsTwo: string;
  instructionsThree: string;
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
    instructionsOne: '',
    instructionsTwo: '',
    instructionsThree: '',
    cards: []
  };

  currentPack: string[] = [];
  instructions = () => this.data.instructions;
  cardsTotal = () => this.data.cards.length;
  currentCardCounter = 0;
  btnValue = '';


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
    console.log(this.data.cards)
    /* this.currentPack = this.data.cards; */
  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.data.title, instr: this.data.instructions } });
  }

  next() {
    this.btnValue = 'nextButton';
  }

  redirect() {
    this.router.navigate(['contents']);
  }

}
