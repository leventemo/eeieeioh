import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Contents {
  level: string;
  title: string;
  skill: string;
  language: string;
  slug: string;
  id: number | string;
  activity: string;
  /*   done: boolean; */
}

const ELEMENT_DATA: Contents[] = [
  { level: 'A1', title: 'Hotel Check-in', skill: 'SP', language: 'alphabet, numbers', slug: '/check-in', id: '', activity: 'Hotel Check-in' },
  { level: 'A2', title: 'AMA', skill: 'SP', language: 'Pres. Perf. – Past Simple', slug: '/cards', id: 1, activity: 'Cards' },
  { level: 'A2', title: 'AMA', skill: 'SP', language: 'for/since', slug: '/cards', id: 2, activity: 'Cards' },
  { level: 'A2', title: 'Error Correction', skill: 'WR', language: 'spelling', slug: '/duel', id: 1, activity: 'Duel' },
  { level: 'B2', title: 'Error Correction', skill: 'WR', language: 'WD Form', slug: '/duel', id: 2, activity: 'Duel' },
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
