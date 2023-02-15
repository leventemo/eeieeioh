import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { Utils } from '../utils';

import allCardDecksCollection from '../../assets/activities/storypuzzlearray.json';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '../validators';
import { delay, filter, first } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

interface Chunks {
  before: string;
  chunk: string;
  after: string;
}

export interface StoryPuzzleModel {
  id: number;
  title: string;
  language: string;
  instructions: string;
  url: string;
  tasks: string[]
  cards: Chunks[];
}

@Component({
  selector: 'app-story-puzzle',
  templateUrl: './story-puzzle.component.html',
  styleUrls: ['./story-puzzle.component.css']
})

export class StoryPuzzleComponent implements OnInit {

  activityData: StoryPuzzleModel = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    url: '',
    tasks: [''],
    cards: []
  };

  chunkArray: string[] = [];
  instructions = () => this.activityData.instructions;
  cardsTotal = () => this.activityData.cards.length;
  stepper = 0;
  passCode!: number;
  accepted = false;

  passcodeForm = new FormGroup({
    passcode: new FormControl(JSON.stringify(this.passCode)),
    response: new FormControl('')
  });

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    // get the id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const cardIdFromRoute = Number(routeParams.get('id'));

    // find the deck for id we got from the route
    this.activityData = allCardDecksCollection.find((array: { id: number; }) => Number(array.id) === cardIdFromRoute);

    this.chunkArray = Utils.shuffleStringsArray(this.activityData.cards.map(item => item.chunk));

    this.passCode = Utils.getPassCode();

  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.activityData.title, instr: this.activityData.instructions } });
  }

  next() {
    ++this.stepper;

    if (this.stepper === 3) {
      this.showPasscodeForm();
    }
  }

  async showPasscodeForm() {
    this.passcodeForm = new FormGroup({
      passcode: new FormControl(JSON.stringify(this.passCode)),
      response: new FormControl('')
    }, [
      Validators.stringMatch('passcode', 'response')
    ]);

    await firstValueFrom(
      this.passcodeForm.statusChanges.pipe(
        filter(value => value === 'VALID'),
        delay(500))
    )

    this.passcodeForm.controls['response'].patchValue('');
    this.accepted = true;
  }


  getChunkClass() {
    if (this.stepper === 1) {
      return 'highlight';
    } else {
      return '';
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.chunkArray, event.previousIndex, event.currentIndex);
  }

  back() {
    --this.stepper;
  }

  redirect() {
    this.router.navigate(['contents']);
  }

}
