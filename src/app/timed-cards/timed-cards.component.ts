import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { ActivityService } from '../activity.service';
import { Utils } from '../utils';
import { interval, take, Subscription } from 'rxjs';
import { TimeCardsModel } from '../models/timed-cards.model';

@Component({
  selector: 'app-timed-cards',
  templateUrl: './timed-cards.component.html',
  styleUrls: ['./timed-cards.component.css']
})
export class TimedCardsComponent implements OnInit {

  activityData: TimeCardsModel = { id: 0, title: '', language: '', instructions: '', timeAllowed: 0, cards: [] };
  currentPack: string[] = [];
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
    public dialog: MatDialog,
    private activityService: ActivityService) {
  }

  ngOnInit(): void {

    const activityId = Number(this.route.snapshot.url[1].path);

    this.activityService.getTimedCards(activityId)
      .subscribe((result) => {
        this.activityData = result;
        this.currentPack = this.activityData.cards;
        this.timeIsUp = false;
      });

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
    const rando = Utils.getRandom(this.currentPack.length - 1);
    this.currentCard = this.currentPack[rando];
    this.currentPack = this.currentPack.filter((card: string) => card !== this.currentCard);
    this.currentCardCounter++;
    this.btnValue = this.currentPack.length === 0 ? 'Done' : 'Next';
  }

  tiktok() {
    this.timer = this.timer + 1000;

    if (this.timer >= (this.activityData.timeAllowed)) {
      this.timeIsUp = true;
      this.timer = 0;
    }
  }

  clickNext() {
    if (this.currentPack.length === 0) {
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
