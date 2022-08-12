import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { DateDefinitions } from '@faker-js/faker';
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

/*   { level: 'A1', title: 'Hotel Check-in', skill: 'SP', language: 'alphabet, numbers', slug: '/check-in', id: '', activity: 'Check-in' }, */

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  numberOfDaysUntilNew = 60;
  data: Contents[] = contentsData;

  dataSource = new MatTableDataSource(this.data);
  displayedColumns: string[] = ['title', 'language', 'skill', 'level', 'activity'];

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

}
