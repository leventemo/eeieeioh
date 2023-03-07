import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { delay, from, Observable, of } from 'rxjs';

import allContextDecksCollection from '../assets/activities/contextarray.json';
import allCardDecksCollection from '../assets/activities/cardsarray.json';

@Injectable({
  providedIn: 'root'
})

export class FetchActivityService {
  importedData!: [];
  activityData!: any;

  constructor() { }

  fetchActivity(segment: string, Id: number): Observable<any> {

    switch (segment) {
      case 'cards':
        this.importedData = allCardDecksCollection;
        break;
      case 'context':
        this.importedData = allContextDecksCollection;
        break;
      /* the other activities */
    }

    this.activityData = this.importedData.find((array: { id: number; }) => Number(array.id) === Id);

    return of(this.activityData).pipe(
      delay(500),
    );
  }
}
