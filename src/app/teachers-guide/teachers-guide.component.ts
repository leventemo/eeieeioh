import { Component, OnInit } from '@angular/core';

import { Utils } from '../utils';

@Component({
  selector: 'app-teachers-guide',
  templateUrl: './teachers-guide.component.html',
  styleUrls: ['./teachers-guide.component.css']
})
export class TeachersGuideComponent implements OnInit {

  passCode!: number;

  constructor() { }

  ngOnInit(): void {
    this.passCode = Utils.getPassCode();
  }

}
