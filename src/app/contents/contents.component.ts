import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Contents {
  level: string;
  title: string;
  skill: string;
  language: string;
  slug: string;
  activity: string;
  done: boolean;
}

const ELEMENT_DATA: Contents[] = [
  { level: 'A1', title: 'Hotel Check-in', skill: 'SP', language: 'the alphabet, numbers', slug: 'check-in', activity: 'Hotel Check-in', done: true },
  { level: 'B1', title: 'ES', skill: 'SP', language: 'picture talk', slug: 'check-in', activity: 'study', done: true },
  { level: 'B2', title: 'ES', skill: 'WR', language: 'spelling', slug: 'check-in', activity: 'gapfill', done: false },
  { level: 'B2', title: 'ES', skill: 'WR', language: 'spelling', slug: 'check-in', activity: 'study', done: true },
  { level: 'B2', title: 'ES', skill: 'WR', language: 'spelling', slug: 'check-in', activity: 'study', done: true },
  { level: 'B1', title: 'PIO B2 U1', skill: 'WD form', language: 'adjectives', slug: 'check-in', activity: '5Lives', done: true },
  { level: 'B1', title: 'PIO B2 U1 review', skill: 'VOC', language: 'misc', slug: 'check-in', activity: 'Jeopardy', done: true },
  { level: 'B1', title: 'PIO B2 U1 review', skill: 'GR', language: 'quantifiers', slug: 'check-in', activity: 'Shoebox', done: false },
  { level: 'C1', title: 'PIO B2 U3 review', skill: 'VOC', language: 'body idioms', slug: 'check-in', activity: 'Shoebox', done: true },
  { level: 'C2', title: 'PIO B2 U2 review', skill: 'GR', language: 'hypothetical meaning', slug: 'check-in', activity: 'Shoebox', done: true }
];

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['title', 'skill+language', 'level', 'activity'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
