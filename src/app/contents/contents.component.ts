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
  { level: 'A1', title: 'Hotel Check-in', skill: 'SP', language: 'alphabet, numbers', slug: '/check-in', id: '', activity: 'Check-in' },
  { level: 'A2', title: 'When did you last ...?', skill: 'SP', language: 'Past Simple, Past Time Expressions', slug: '/cards', id: 3, activity: 'Cards' },
  { level: 'A2', title: 'Have you ever ...?', skill: 'SP', language: 'Present Perfect, Past Simple', slug: '/cards', id: 1, activity: 'Cards' },
  { level: 'A2', title: 'How long have you ...?', skill: 'SP', language: 'for/since', slug: '/cards', id: 2, activity: 'Cards' },
  { level: 'B1', title: 'What would you do ...?', skill: 'SP', language: '2nd Conditional', slug: '/cards', id: 4, activity: 'Cards' },
  { level: 'A2', title: 'Error Correction', skill: 'WR', language: 'spelling', slug: '/duel', id: 1, activity: 'Duel' },
  { level: 'B2', title: 'Spellcheck', skill: 'WR', language: 'WD Form', slug: '/duel', id: 2, activity: 'Duel' },
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

  displayedColumns: string[] = ['title', 'language', 'skill', 'level', 'activity'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
