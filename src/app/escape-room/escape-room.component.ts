import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { delay, filter, scan, takeUntil } from 'rxjs/operators';

import allCardDecksCollection from '../../assets/activities/escaperoomarray.json';
import { Utils } from '../utils';
import { Validators } from '../validators'

interface Card {
  question: string;
  correct: string[];
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
  currentCard: Card = { question: '', correct: [] };
  currentCardCounter = 0;
  cardsTotal = () => this.data.cards.length;
  secondsPerSolution = 0;

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
    return this.escapeForm.value.question || '';
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
    const startTime = new Date();

    this.escapeForm = new FormGroup({
      question: new FormControl(this.currentCard?.question),
      correct: new FormControl(this.currentCard?.correct),
      response: new FormControl('')
    }, [
      Validators.stringMatchInArray('response', 'correct')
    ]);

    this.escapeForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      scan((acc) => {
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime,
          endTime: Number(new Date().getTime() - startTime.getTime())
        }
      }, { numberSolved: 0, startTime: startTime, endTime: 0 }),
      delay(400),
    ).subscribe(({ numberSolved, endTime }) => {
      this.secondsPerSolution = Number(endTime) / numberSolved / 1000;

      this.selectCurrentCard();

      this.escapeForm.setValue({
        question: this.currentCard.question,
        correct: this.currentCard.correct,
        response: ''
      })

    });
  }

  private selectCurrentCard() {
    if (this.currentPack.length === 0) {
      this.areQnsDone = true;
      return;
    }
    const rando = Utils.getRandom(this.currentPack.length - 1);
    this.currentCard = this.currentPack[rando];
    this.currentPack = this.currentPack.filter(card => card !== this.currentCard);
    this.currentCardCounter++;
  };

  redirect() {
    this.router.navigate(['contents']);
  }

}
