import { Component, Input } from '@angular/core';
import { StoryPuzzleModel } from '../story-puzzle.component';

@Component({
  selector: 'app-sentence-view',
  templateUrl: './sentence-view.component.html',
  styleUrls: ['../story-puzzle.component.css']
})
export class SentenceViewComponent {
  @Input() stepper = 0;
  @Input() data: StoryPuzzleModel = {
    id: 0,
    title: '',
    language: '',
    instructions: '',
    url: '',
    tasks: [''],
    cards: []
  };
}
