import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

import { Utils } from '../utils';
import { ActivityService } from '../activity.service';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '../validators';
import { delay, filter, first } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { Chunks } from '../models/story-puzzle.model';

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
    public dialog: MatDialog,
    private activityService: ActivityService) { }

  ngOnInit(): void {

    const activityId = Number(this.route.snapshot.url[1].path);

    this.activityService.getStoryPuzzle(activityId)
      .subscribe((result) => {
        this.activityData = result;
        this.chunkArray = Utils.shuffleStringsArray(this.activityData.cards.map(item => item.chunk));
        this.passCode = Utils.getPassCode();
      });

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
