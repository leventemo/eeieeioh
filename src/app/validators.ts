import { AbstractControl } from "@angular/forms";

export class Validators {
  public static stringMatch(usersResponse: string, expectedAnswer: string) {

    return (form: AbstractControl) => {

      const response = form.value[usersResponse];
      const correct = form.value[expectedAnswer];

      if (response === correct) {
        return null;
      }
      return { checkMatch: true }
    }
  }
}
