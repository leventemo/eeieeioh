import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import contentsData from '../../assets/activities/contentsarray.json';

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
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  isMothFlying = true;

  numberOfDaysUntilNew = 31;
  data: ContentsModel[] = contentsData;

  dataSource = new MatTableDataSource(this.data);
  displayedColumns: string[] = ['title', 'language', 'level', 'activity'];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  checkIfNew(date: string) {
    const today = Number(new Date());
    const dateCreated = Number(new Date(date));
    const timePassed = (today - dateCreated) / (1000 * 60 * 60 * 24);
    return timePassed < this.numberOfDaysUntilNew;
  }

  smashMoth() {
    this.isMothFlying = false;
  }

}
