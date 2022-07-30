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
  new: boolean;
}

const ELEMENT_DATA: Contents[] = [
  /*   { level: 'A1', title: 'Hotel Check-in', skill: 'SP', language: 'alphabet, numbers', slug: '/check-in', id: '', activity: 'Check-in' }, */
  { level: 'A2', title: 'When did you last ...? (1)', skill: 'SP', language: 'Past Simple, Past Time Expressions', slug: '/cards', id: 3, activity: 'Cards', new: true },
  { level: 'A2', title: 'When did you last ...? (2)', skill: 'SP', language: 'Past Simple, Past Time Expressions', slug: '/cards', id: 4, activity: 'Cards', new: false },
  { level: 'A2', title: 'Have you ever ...?', skill: 'SP', language: 'Present Perfect, Past Simple', slug: '/cards', id: 1, activity: 'Cards', new: false },
  { level: 'A2', title: 'How long have you ...?', skill: 'SP', language: 'for/since', slug: '/cards', id: 2, activity: 'Cards', new: false },
  { level: 'A2', title: 'Tim\'s a very good example', skill: 'SP', language: 'personality adjectives', slug: '/cards', id: 12, activity: 'Cards', new: false },

  { level: 'A2', title: 'ERR: Email to a friend', skill: 'WR', language: 'GR, VOC, SPEL', slug: '/expandables', id: 1, activity: 'Expandables', new: true },
  { level: 'A2', title: 'ERR: Email to a friend', skill: 'WR', language: 'GR, VOC, SPEL', slug: '/duels', id: 1, activity: 'Duels', new: true },

  { level: 'B1', title: 'What would you do ...?', skill: 'SP', language: '2nd Conditional', slug: '/cards', id: 5, activity: 'Cards', new: false },
  { level: 'B1', title: 'Exam questions B1 (1)', skill: 'SP', language: 'conversation', slug: '/cards', id: 6, activity: 'Cards', new: false },
  { level: 'B1', title: 'Should have asked mom', skill: 'SP', language: 'should have done', slug: '/cards', id: 9, activity: 'Cards', new: false },

  { level: 'B1', title: 'ERR: Somebody I know', skill: 'WR', language: 'GR, VOC, SPEL', slug: '/expandables', id: 2, activity: 'Expandables', new: true },
  { level: 'B1', title: 'ERR: Somebody I know', skill: 'WR', language: 'VOC, GR, SPEL', slug: '/duels', id: 2, activity: 'Duels', new: true },

  { level: 'B2', title: 'Education is like football (1)', skill: 'SP', language: 'talking about education', slug: '/cards', id: 10, activity: 'Cards', new: false },
  { level: 'B2', title: 'Education is like football (2)', skill: 'SP', language: 'talking about education', slug: '/cards', id: 11, activity: 'Cards', new: false },
  { level: 'B2', title: 'Body Idioms', skill: 'SP', language: 'idioms', slug: '/reword', id: 2, activity: 'Reword', new: false },
  { level: 'B2', title: 'Colour Idioms', skill: 'SP', language: 'idioms', slug: '/reword', id: 1, activity: 'Reword', new: false },
  { level: 'B2', title: 'Exam questions B2 (1)', skill: 'SP', language: 'conversation', slug: '/cards', id: 7, activity: 'Cards', new: false },
  { level: 'B2', title: 'Yes-No Game', skill: 'SP', language: 'fillers, hesitating', slug: '/cards', id: 13, activity: 'Cards', new: false },

  { level: 'B2', title: 'ERR: My Dream House', skill: 'WR', language: 'GR, VOC, SPEL', slug: '/expandables', id: 3, activity: 'Expandables', new: true },
  { level: 'B2', title: 'ERR: My Dream House', skill: 'WR', language: 'VOC, GR, SPEL', slug: '/duels', id: 3, activity: 'Duels', new: true },
  { level: 'B2', title: 'ERR: Story', skill: 'WR', language: 'GR, VOC, SPEL', slug: '/expandables', id: 4, activity: 'Expandables', new: true },
  { level: 'B2', title: 'ERR: Story', skill: 'WR', language: 'VOC, GR, SPEL', slug: '/duels', id: 4, activity: 'Duels', new: true },

  { level: 'C1', title: 'Exam questions C1 (1)', skill: 'SP', language: 'conversation', slug: '/cards', id: 8, activity: 'Cards', new: false },
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
