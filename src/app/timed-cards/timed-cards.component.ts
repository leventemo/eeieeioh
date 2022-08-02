import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { Utils } from '../utils';
import { interval, take, Subscription } from 'rxjs';
import allCardDecksCollection from '../../assets/activities/timedcardsarray.json';

interface Data {
  id: number;
  title: string;
  language: string;
  instructions: string;
  timeAllowed: number;
  cards: string[];
}

interface Player {
  name: string;
  score: number;
  timer: number;
}

@Component({
  selector: 'app-timed-cards',
  templateUrl: './timed-cards.component.html',
  styleUrls: ['./timed-cards.component.css']
})
export class TimedCardsComponent implements OnInit {

  data: Data = { id: 0, title: '', language: '', instructions: '', timeAllowed: 0, cards: [] };
  pack: string[][] = [];
  cardsTotal = () => this.data.cards.length;
  currentPack: string[] = [];
  instructions = () => this.data.instructions;
  subscription!: Subscription;
  timeIsUp = false;
  currentCard = '';
  currentCardCounter = 0;
  timer = 0;

  // to handle btns
  hasItStarted = false;
  btnValue = 'Next';
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
    this.data = allCardDecksCollection.find((array: { id: number; }) => Number(array.id) === cardIdFromRoute);

    this.currentPack = this.data.cards;
  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.data.title, instr: this.data.instructions } });
  }


  start() {
    this.displayNextScreen();
    this.subscription = interval(100).pipe(take(this.data.timeAllowed)).subscribe(() => {
      this.tiktok();
    })

    this.hasItStarted = true;
    console.log(Date);
  }

  displayNextScreen() {
    const rando = Utils.getRandom(this.currentPack.length - 1);
    this.currentCard = this.currentPack[rando];
    this.currentPack = this.currentPack.filter((card: string) => card !== this.currentCard);
    this.currentCardCounter++;
    this.btnValue = this.currentPack.length === 0 ? 'Done' : 'Next';
  }

  tiktok() {
    ++this.timer;
    console.log(this.timer);
    if (this.timer >= this.data.timeAllowed) {
      this.subscription.unsubscribe();
      this.timeIsUp = true;
    }
  }

  clickNext() {
    this.timer === 0; // ?

  }

  redirect() {
    this.router.navigate(['contents']);
  }

}
