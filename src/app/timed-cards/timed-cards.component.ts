import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { Utils } from '../utils';
import { interval, take, Subscription } from 'rxjs';
import allCardDecksCollection from '../../assets/activities/timedcardsarray.json';

interface TimeCardsModel {
  id: number;
  title: string;
  language: string;
  instructions: string;
  timeAllowed: number;
  cards: string[];
}

@Component({
  selector: 'app-timed-cards',
  templateUrl: './timed-cards.component.html',
  styleUrls: ['./timed-cards.component.css']
})
export class TimedCardsComponent implements OnInit {

  activityData: TimeCardsModel = { id: 0, title: '', language: '', instructions: '', timeAllowed: 0, cards: [] };
  pack: string[] = [];
  cardsTotal = () => this.activityData.cards.length;
  instructions = () => this.activityData.instructions;
  subscription!: Subscription;
  currentCard = '';
  currentCardCounter = 0;
  timer = 0;
  /*
  1min = 60 * 1000ms */

  // to hide "Start" btn
  hasItStarted = false;
  // "Next" btn
  btnValue = '';
  timeIsUp = false;
  // ???
  isItAllDone = false;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // get the id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const cardIdFromRoute = Number(routeParams.get('id'));

    // find the deck for id we got from the route
    this.activityData = allCardDecksCollection.find((array: { id: number; }) => Number(array.id) === cardIdFromRoute);

    this.pack = this.activityData.cards;
    this.timeIsUp = false;
  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.activityData.title, instr: this.activityData.instructions, preview: this.activityData.cards } });
  }


  go() {
    this.displayNextCard();
    this.subscription = interval(1000)
      .pipe(take(this.activityData.timeAllowed / 1000))
      .subscribe(() => {
        this.tiktok();
      })

    this.hasItStarted = true;
  }

  displayNextCard() {
    const rando = Utils.getRandom(this.pack.length - 1);
    this.currentCard = this.pack[rando];
    this.pack = this.pack.filter((card: string) => card !== this.currentCard);
    this.currentCardCounter++;
    this.btnValue = this.pack.length === 0 ? 'Done' : 'Next';
  }

  tiktok() {
    this.timer = this.timer + 1000;

    if (this.timer >= (this.activityData.timeAllowed)) {
      this.timeIsUp = true;
      this.timer = 0;
    }
  }

  clickNext() {
    if (this.pack.length === 0) {
      this.isItAllDone = true;
      return;
    }
    this.timeIsUp = false;
    this.go();
  }

  redirect() {
    this.router.navigate(['contents']);
  }

}
