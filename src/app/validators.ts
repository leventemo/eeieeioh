import { AbstractControl } from "@angular/forms";

export class Validators {

  public static stringMatch(expectedAnswer: string, usersResponse: string) {

    return (form: AbstractControl) => {
      const response: string = form.value[usersResponse];
      const passcode: string = form.value[expectedAnswer];

      if (form.value.passcode === form.value.response) {
        return null;
      }

      return { checkMatch: true };
    }
  }

  public static stringMatchInArray(usersResponse: string, expectedAnswer: string) {

    return (form: AbstractControl) => {
      const response: string = form.value[usersResponse];
      const correct: string[] = form.value[expectedAnswer];

      if (correct.includes(response)) {
        return null;
      }
      return { checkMatch: true }
    }
  }
}
