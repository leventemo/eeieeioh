import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DateDefinitions } from '@faker-js/faker';

export interface Contents {
  level: string;
  title: string;
  skill: string;
  language: string;
  slug: string;
  id: number | string;
  activity: string;
  datePublished: string;
}

const ELEMENT_DATA: Contents[] = [
  /*   { level: 'A1', title: 'Hotel Check-in', skill: 'SP', language: 'alphabet, numbers', slug: '/check-in', id: '', activity: 'Check-in' }, */
  { level: 'A2', title: 'When did you last ...? (1)', skill: 'SP', language: 'Past Simple, Past Time Expressions', slug: '/cards', id: 3, activity: 'Cards', datePublished: '2022, 05, 05' },
  { level: 'A2', title: 'When did you last ...? (2)', skill: 'SP', language: 'Past Simple, Past Time Expressions', slug: '/cards', id: 4, activity: 'Cards', datePublished: '2022, 05, 05' },
  { level: 'A2', title: 'Have you ever ...?', skill: 'SP', language: 'Present Perfect, Past Simple', slug: '/cards', id: 1, activity: 'Cards', datePublished: '2022, 05, 05' },
  { level: 'A2', title: 'How long have you ...?', skill: 'SP', language: 'for/since', slug: '/cards', id: 2, activity: 'Cards', datePublished: '2022, 05, 05' },
  { level: 'A2', title: 'Tim\'s a very good example', skill: 'SP', language: 'personality adjectives', slug: '/cards', id: 12, activity: 'Cards', datePublished: '2022, 05, 29' },

  { level: 'A2', title: 'ERR: Email to a friend', skill: 'WR', language: 'GR, VOC, SPEL', slug: '/expandables', id: 1, activity: 'Expandables', datePublished: '2022, 07, 25' },
  { level: 'A2', title: 'ERR: Email to a friend', skill: 'WR', language: 'GR, VOC, SPEL', slug: '/duels', id: 1, activity: 'Duels', datePublished: '2022, 07, 29' },

  { level: 'B1', title: 'What would you do ...?', skill: 'SP', language: '2nd Conditional', slug: '/cards', id: 5, activity: 'Cards', datePublished: '2022, 05, 05' },
  { level: 'B1', title: 'Exam questions B1 (1)', skill: 'SP', language: 'conversation', slug: '/cards', id: 6, activity: 'Cards', datePublished: '2022, 05, 05' },
  { level: 'B1', title: 'Should have asked mom', skill: 'SP', language: 'should have done', slug: '/cards', id: 9, activity: 'Cards', datePublished: '2022, 05, 12' },

  { level: 'B1', title: 'ERR: Somebody I know', skill: 'WR', language: 'GR, VOC, SPEL', slug: '/expandables', id: 2, activity: 'Expandables', datePublished: '2022, 07, 25' },
  { level: 'B1', title: 'ERR: Somebody I know', skill: 'WR', language: 'VOC, GR, SPEL', slug: '/duels', id: 2, activity: 'Duels', datePublished: '2022, 07, 29' },

  { level: 'B2', title: 'Education is like football (1)', skill: 'SP', language: 'talking about education', slug: '/cards', id: 10, activity: 'Cards', datePublished: '2022, 05, 22' },
  { level: 'B2', title: 'Education is like football (2)', skill: 'SP', language: 'talking about education', slug: '/cards', id: 11, activity: 'Cards', datePublished: '2022, 05, 22' },
  { level: 'B2', title: 'Body Idioms', skill: 'SP', language: 'idioms', slug: '/reword', id: 2, activity: 'Reword', datePublished: '2022, 05, 24' },
  { level: 'B2', title: 'Colour Idioms', skill: 'SP', language: 'idioms', slug: '/reword', id: 1, activity: 'Reword', datePublished: '2022, 05, 09' },
  { level: 'B2', title: 'Exam questions B2 (1)', skill: 'SP', language: 'conversation', slug: '/cards', id: 7, activity: 'Cards', datePublished: '2022, 05, 05' },
  { level: 'B2', title: 'Yes-No Game', skill: 'SP', language: 'fillers, hesitating', slug: '/cards', id: 13, activity: 'Cards', datePublished: '2022, 05, 31' },

  { level: 'B2', title: 'ERR: My Dream House', skill: 'WR', language: 'GR, VOC, SPEL', slug: '/expandables', id: 3, activity: 'Expandables', datePublished: '2022, 07, 25' },
  { level: 'B2', title: 'ERR: My Dream House', skill: 'WR', language: 'VOC, GR, SPEL', slug: '/duels', id: 3, activity: 'Duels', datePublished: '2022, 07, 29' },
  { level: 'B2', title: 'ERR: Story', skill: 'WR', language: 'GR, VOC, SPEL', slug: '/expandables', id: 4, activity: 'Expandables', datePublished: '2022, 07, 27' },
  { level: 'B2', title: 'ERR: Story', skill: 'WR', language: 'VOC, GR, SPEL', slug: '/duels', id: 4, activity: 'Duels', datePublished: '2022, 07, 29' },

  { level: 'C1', title: 'Exam questions C1 (1)', skill: 'SP', language: 'conversation', slug: '/cards', id: 8, activity: 'Cards', datePublished: '2022, 05, 05' },
];

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['title', 'language', 'skill', 'level', 'activity'];

  numberOfDaysUntilNew = 60;

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
