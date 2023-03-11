import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { ActivityService } from '../activity.service';
import { Utils } from '../utils';

export interface CardsModel {
  id: number;
  title: string;
  language: string;
  instructions: string;
  cards: string[];
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  activityData: CardsModel = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    cards: []
  };

  currentPack: string[] = [];
  instructions = () => this.activityData.instructions;
  cardsTotal = () => this.activityData.cards.length;
  btnValue = 'Start';
  currentCard = '';
  currentCardCounter = 0;
  isItAllDone = false;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {

    const routeSegment = this.route.snapshot.url[0].path;
    const activityId = Number(this.route.snapshot.url[1].path);

    /*     this.activityService.fetchActivity(routeSegment, activityId)
          .subscribe((result) => {
            this.activityData = result;
            this.currentPack = this.activityData.cards;
          }); */

    this.activityService.fetchCardsActivity(activityId)
      .subscribe((result) => {
        this.activityData = result;
        this.currentPack = this.activityData.cards;
      });

  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.activityData.title, instr: this.activityData.instructions, preview: this.activityData.cards } });
  }

  next() {
    if (this.btnValue === 'Done') {
      this.isItAllDone = true;
      return;
    }

    const rando = Utils.getRandom(this.currentPack.length - 1);
    this.currentCard = this.currentPack[rando];
    this.currentPack = this.currentPack.filter((card: string) => card !== this.currentCard);
    this.currentCardCounter++;
    this.btnValue = this.currentPack.length === 0 ? 'Done' : 'Next';
  }

  redirect() {
    this.router.navigate(['contents']);
  }
}
