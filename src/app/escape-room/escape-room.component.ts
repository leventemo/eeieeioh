import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

import allCardDecksCollection from '../../assets/activities/escaperoomarray.json';
import { Utils } from '../utils';
import { Validators } from '../validators'

interface Card {
  question: string;
  correct: string;
}

interface Data {
  id: number;
  title: string;
  language: string;
  instructions: string;
  cards: Card[];
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

  currentPack: Card[] = [];
  hasItStarted = false;
  areQnsDone = false;
  isItAllDone = false;
  currentCard: Card = { question: '', correct: '' };
  currentCardCounter = 0;
  cardsTotal = () => this.data.cards.length;

  /* escapeForm!: FormGroup; */

  escapeForm = new FormGroup({
    question: new FormControl(this.currentCard?.question),
    correct: new FormControl(this.currentCard?.correct),
    response: new FormControl('')
  });

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
  }

  get question(): string {
    return this.escapeForm.value.question;
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
    this.selectCurrentCard();
    this.hasItStarted = true;

    this.escapeForm = new FormGroup({
      question: new FormControl(this.currentCard?.question),
      correct: new FormControl(this.currentCard?.correct),
      response: new FormControl('')
    }, [
      Validators.stringMatch('response', 'correct')
    ]);

  }

  private selectCurrentCard() {
    const rando = Utils.getRandom(this.currentPack.length - 1);
    this.currentCard = this.currentPack[rando];
    /*     this.currentCorrectCard = this.currentCard[0];
        this.currentIncorrectCard = this.currentCard[1]; */
    this.currentPack = this.currentPack.filter(card => card !== this.currentCard);
    this.currentCardCounter++;
  };

  redirect() {
    this.router.navigate(['contents']);
  }

}
