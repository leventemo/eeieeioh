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

  getCards(Id: number, decks: [] = allCardDecks): Observable<any> {
    return of(Utils.selectActivity(Id, decks))
      .pipe(delay(this.delayTime));
  }

  getTimedCards(Id: number, decks: [] = allTimedCardDecks): Observable<any> {
    return of(Utils.selectActivity(Id, decks))
      .pipe(delay(this.delayTime));
  }

  getContext(Id: number, decks: [] = allContextDecks): Observable<any> {
    return of(Utils.selectActivity(Id, decks))
      .pipe(delay(this.delayTime));
  }

  getEscapeRoom(Id: number, decks: [] = allEscapeRoomDecks): Observable<any> {
    return of(Utils.selectActivity(Id, decks))
      .pipe(delay(this.delayTime));
  }

  getExpandables(Id: number, decks: [] = allDuelsDecks): Observable<any> {
    return of(Utils.selectActivity(Id, decks))
      .pipe(delay(this.delayTime));
  }

  getDuels(Id: number, decks: [] = allDuelsDecks): Observable<any> {
    return of(Utils.selectActivity(Id, decks))
      .pipe(delay(this.delayTime));
  }

  getRanking(Id: number, decks: [] = allRankingDecks): Observable<any> {
    return of(Utils.selectActivity(Id, decks))
      .pipe(delay(this.delayTime));
  }

  getStoryPuzzle(Id: number, decks: [] = allStoryPuzzleDecks): Observable<any> {
    return of(Utils.selectActivity(Id, decks))
      .pipe(delay(this.delayTime));
  }

  getBoardGame(Id: number, decks: [] = allBoardGameDecks): Observable<any> {
    return of(Utils.selectActivity(Id, decks))
      .pipe(delay(this.delayTime));
  }

  getReword(Id: number, decks: [] = allRewordDecks): Observable<any> {
    return of(Utils.selectActivity(Id, decks))
      .pipe(delay(this.delayTime));
  }

}
