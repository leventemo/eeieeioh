import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { FormGroup, FormControl } from '@angular/forms';

import allCardDecksCollection from '../../assets/activities/escaperoomarray.json';

interface Data {
  id: number;
  title: string;
  language: string;
  instructions: string;
  cards: string[];
}

@Component({
  selector: 'app-escape-room',
  templateUrl: './escape-room.component.html',
  styleUrls: ['./escape-room.component.css']
})
export class EscapeRoomComponent implements OnInit {

  data: Data = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    cards: []
  };
  currentPack: string[] = [];
  isItAllDone = false;
  currentCard = '';
  currentCardCounter = 0;
  cardsTotal = () => this.data.cards.length;
  btnValue = 'Start';

  escapeForm = new FormGroup({
    question: new FormControl(''),
    answer: new FormControl('')
  });


  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
  }

  get question(): number {
    return this.escapeForm.value.a;
  }

  ngOnInit(): void {
    // get the id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const cardIdFromRoute = Number(routeParams.get('id'));

    // find the deck for id we got from the route
    this.data = allCardDecksCollection.find((array: { id: number; }) => Number(array.id) === cardIdFromRoute);

    this.currentPack = this.data.cards;
  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.data.title, instr: this.data.instructions } });
  }

  next() {
    console.log('hey!')
  }

  redirect() {
    this.router.navigate(['contents']);
  }

}
