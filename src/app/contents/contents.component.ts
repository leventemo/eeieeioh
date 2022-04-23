import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Contents {
  level: string;
  title: string;
  skill: string;
  language: string;
  slug: string;
  activity: string;
  /*   done: boolean; */
}

const ELEMENT_DATA: Contents[] = [
  { level: 'A1', title: 'Hotel Check-in', skill: 'SP', language: 'the alphabet, numbers', slug: 'check-in', activity: 'Hotel Check-in' },
  { level: 'B1', title: 'Ask me anything', skill: 'SP', language: 'qn forms', slug: 'cards', activity: 'Cards' },
  { level: 'A2', title: 'Spellcheck', skill: 'WR', language: 'spelling', slug: 'duel', activity: 'Duel' },
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
