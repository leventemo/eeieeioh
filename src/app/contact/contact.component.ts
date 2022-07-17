import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  formId = 'lGuqXu79';
  formSparkURL = `https://submit-form.com/${this.formId}`;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(ngModel);
  }


}
function ngModel(ngModel: any) {
  throw new Error('Function not implemented.');
}

