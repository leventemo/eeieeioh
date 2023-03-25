import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../../dialog-info/dialog-info.component';

import { ActivityService } from '../../activity.service';
import { Utils } from '../../utils';


import { CdkDragDrop } from '@angular/cdk/drag-drop/';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { RankingModel } from '../../models/ranking.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  activityData: RankingModel = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    cards: []
  };

  currentPack: string[] = [];
  currentCard = '';

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private activityService: ActivityService) { }

  ngOnInit(): void {

    const activityId = Number(this.route.snapshot.url[1].path);

    this.activityService.getRanking(activityId)
      .subscribe((result) => {
        this.activityData = result;
        this.currentPack = Utils.shuffleStringsArray(this.activityData.cards);
      });
  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.activityData.title, instr: this.activityData.instructions } });
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.currentPack, event.previousIndex, event.currentIndex);
  }

  redirect() {
    this.router.navigate(['contents']);
  }

}
