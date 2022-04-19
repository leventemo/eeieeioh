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
  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const msg = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}.`
    alert(msg);
  }

}
