import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Utils } from '../utils';
import { ActivityService } from '../activity.service';
import { ExpandablesModel, ExpandablePair } from '../models/expandables.model';

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

  activityData: ExpandablesModel = { id: 0, title: '', language: '', instructionsForExpandables: '', cards: [[]] };
  currentPack: string[][] = [[]];
  arrayOfObjects: ExpandablePair[] = [];

  columnsToDisplay = ['visible'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: ExpandablePair | null;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private activityService: ActivityService) {
  }

  ngOnInit(): void {

    const activityId = Number(this.route.snapshot.url[1].path);

    this.activityService.getExpandables(activityId)
      .subscribe((result) => {
        this.activityData = result;
        this.currentPack = this.activityData.cards;

        // convert this.currentPack (array of arrays) into an array of objects
        this.arrayOfObjects = Utils
          .shuffle(this.currentPack)
          .map(x => ({
            visible: x[1],
            expandable: x[0]
          }));
      });

  }

  openDialog() {
    this.dialog.open(DialogInfoComponent, { data: { title: this.activityData.title, instr: this.activityData.instructionsForExpandables } });
  }

  redirect() {
    this.router.navigate(['contents']);
  }

}

