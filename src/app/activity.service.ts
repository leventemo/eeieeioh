import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import allCardDecks from '../assets/activities/cardsarray.json';
import allContextDecks from '../assets/activities/contextarray.json';
import allTimedCardDecks from '../assets/activities/timedcardsarray.json';
import allEscapeRoomDecks from '../assets/activities/escaperoomarray.json';
import allDuelsDecks from '../assets/activities/duelsarray.json';
import allRankingDecks from '../assets/activities/rankingarray.json';
import allStoryPuzzleDecks from '../assets/activities/storypuzzlearray.json';
import allBoardGameDecks from '../assets/activities/boardgamearray.json';
import allRewordDecks from '../assets/activities/rewordarray.json';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})

export class ActivityService {
  importedData!: [];
  activityData!: any;
  delayTime: number = 200;

  constructor() { }

  fetchCardsActivity(Id: number): Observable<any> {
    return of(Utils.selectActivity(Id, allCardDecks))
      .pipe(delay(this.delayTime));
  }

  fetchTimedCardsActivity(Id: number): Observable<any> {
    return of(Utils.selectActivity(Id, allTimedCardDecks))
      .pipe(delay(this.delayTime));
  }

  fetchContextActivity(Id: number): Observable<any> {
    return of(Utils.selectActivity(Id, allContextDecks))
      .pipe(delay(this.delayTime));
  }

  fetchEscapeRoomActivity(Id: number): Observable<any> {
    return of(Utils.selectActivity(Id, allEscapeRoomDecks))
      .pipe(delay(this.delayTime));
  }

  fetchExpandablesActivity(Id: number): Observable<any> {
    return of(Utils.selectActivity(Id, allDuelsDecks))
      .pipe(delay(this.delayTime));
  }

  fetchDuelsActivity(Id: number): Observable<any> {
    return of(Utils.selectActivity(Id, allDuelsDecks))
      .pipe(delay(this.delayTime));
  }

  fetchRankingActivity(Id: number): Observable<any> {
    return of(Utils.selectActivity(Id, allRankingDecks))
      .pipe(delay(this.delayTime));
  }

  fetchStoryPuzzleActivity(Id: number): Observable<any> {
    return of(Utils.selectActivity(Id, allStoryPuzzleDecks))
      .pipe(delay(this.delayTime));
  }

  fetchBoardGameActivity(Id: number): Observable<any> {
    return of(Utils.selectActivity(Id, allBoardGameDecks))
      .pipe(delay(this.delayTime));
  }

  fetchRewordActivity(Id: number): Observable<any> {
    return of(Utils.selectActivity(Id, allRewordDecks))
      .pipe(delay(this.delayTime));
  }

}
