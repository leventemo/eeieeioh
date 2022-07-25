import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

import allDuelsDecksCollection from '../../assets/activities/duelsarray.json';

export interface PeriodicElement {
  name: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Hydrogen',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    name: 'Helium',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
];

interface Data {
  id: number;
  title: string;
  language: string;
  instructions: string;
  cards: string[][];
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

  data: Data = { id: 0, title: '', language: '', instructions: '', cards: [[]] };
  cards: string[][] = [[]];
  arrayOfObjects: PeriodicElement[] = [];

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;
  ELEMENT_DATA: PeriodicElement[] = [];

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
    this.arrayOfObjects = this.cards.map(x => ({
      name: x[0],
      description: x[1]
    }));

    this.ELEMENT_DATA = this.arrayOfObjects;

  }

  /*   openDialog() {
      this.dialog.open(DialogInfoComponent, { data: { title: this.data.title, instr: this.data.instructions } });
    } */

}

