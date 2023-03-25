import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../../dialog-info/dialog-info.component';

import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { delay, filter, scan, takeUntil } from 'rxjs/operators';

import { ActivityService } from '../../activity.service';
import { Utils } from '../../utils';
import { Validators } from '../../validators'
import { EscapeRoomModel, Card } from '../../models/escape-room.model';

@Component({
  selector: 'app-escape-room',
  templateUrl: './escape-room.component.html',
  styleUrls: ['./escape-room.component.css']
})
export class EscapeRoomComponent implements OnInit {

  activityData: EscapeRoomModel = {
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
  cardsTotal = () => this.activityData.cards.length;
  secondsPerSolution = 0;

  escapeForm = new FormGroup({
    question: new FormControl(this.currentCard?.question),
    correct: new FormControl(this.currentCard?.correct),
    response: new FormControl('')
  });

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private activityService: ActivityService) {
  }

  get question(): string {
    return this.escapeForm.value.question || '';
  }

  ngOnInit(): void {

    const activityId = Number(this.route.snapshot.url[1].path);

    this.activityService.getEscapeRoom(activityId)
      .subscribe((result) => {
        this.activityData = result;
        this.currentPack = this.activityData.cards;
      });

  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.activityData.title, instr: this.activityData.instructions } });
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
