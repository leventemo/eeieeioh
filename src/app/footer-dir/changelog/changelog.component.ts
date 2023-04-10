import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import contentsData from '../../../assets/activities/contentsarray.json';

export interface ContentsModel {
  level: string;
  title: string;
  skill: string;
  language: string;
  slug: string;
  id: number;
  activity: string;
  datePublished: string;
}

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})

export class ChangelogComponent implements OnInit {

  changelogData: ContentsModel[] = contentsData;
  dataSource = new MatTableDataSource(this.changelogData);
  displayedColumns: string[] = ['datePublished', 'title', 'language', 'level', 'activity'];
  constructor() { }

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void { }

}
