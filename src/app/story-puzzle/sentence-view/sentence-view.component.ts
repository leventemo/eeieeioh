import { Component, Input } from '@angular/core';
import { Data } from '../story-puzzle.component';

@Component({
  selector: 'app-sentence-view',
  templateUrl: './sentence-view.component.html',
  styleUrls: ['../story-puzzle.component.css']
})
export class SentenceViewComponent {
  @Input() stepper = 0;
  @Input() data: Data = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    url: '',
    tasks: [''],
    cards: []
  };
}
