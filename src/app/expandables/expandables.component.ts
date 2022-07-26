import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Utils } from '../utils';
import allDuelsDecksCollection from '../../assets/activities/duelsarray.json';

interface Data {
  id: number;
  title: string;
  language: string;
  instructionsForExpandables: string;
  cards: string[][];
}

interface ExpandablePair {
  visible: string;
  expandable: string;
}

@Component({
  selector: 'app-expandables',
  templateUrl: './expandables.component.html',
  styleUrls: ['./expandables.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ExpandablesComponent implements OnInit {

  data: Data = { id: 0, title: '', language: '', instructionsForExpandables: '', cards: [[]] };
  cards: string[][] = [[]];
  arrayOfObjects: ExpandablePair[] = [];

  columnsToDisplay = ['visible'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: ExpandablePair | null;

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
    this.data = allDuelsDecksCollection.find((array: { id: number; }) => Number(array.id) === cardIdFromRoute);

    this.cards = this.data.cards;

    // convert this.cards (array of arrays) into an array of objects
    this.arrayOfObjects = Utils
      .shuffle(this.cards)
      .map(x => ({
        visible: x[1],
        expandable: x[0]
      }));

  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.data.title, instr: this.data.instructionsForExpandables } });
  }

  redirect() {
    this.router.navigate(['contents']);
  }

}

