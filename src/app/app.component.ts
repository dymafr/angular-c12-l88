import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  validatorPaul(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === 'paul') {
      return { notPaul: true };
    } else {
      false;
    }
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl('', this.validatorPaul),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    console.log(this.form.value);
  }
}
