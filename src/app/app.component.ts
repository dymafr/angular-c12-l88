import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  validatorPaul(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value === 'paul') {
        return { notPaul: true };
      } else {
        return null;
      }
    };
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl('', this.validatorPaul),
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  submit() {
    console.log(this.form.value);
  }
}
