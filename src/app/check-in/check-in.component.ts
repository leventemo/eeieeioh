import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  firstName: string = faker.name.firstName();
  surName: string = faker.name.lastName();

  streetAddress: string = faker.address.streetAddress();
  city: string = faker.address.city();
  country: string = faker.address.country();

  email: string = faker.internet.email(this.firstName, this.surName);
  phone: string = faker.phone.phoneNumber('501-###-###');

  constructor() { }

  ngOnInit(): void {

  }

  reload() {
    window.location.reload();
  }

}
