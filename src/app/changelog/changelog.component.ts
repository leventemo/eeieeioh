import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import contentsData from '../../assets/activities/contentsarray.json';

export interface Contents {
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

  data: Contents[] = contentsData;
  dataSource = new MatTableDataSource(this.data);
  displayedColumns: string[] = ['datePublished', 'title', 'language', 'activity'];
  constructor() { }

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void { }

}
