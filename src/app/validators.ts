import { AbstractControl } from "@angular/forms";

export class Validators {
  public static stringMatch(usersResponse: string, expectedAnswer: string) {

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
