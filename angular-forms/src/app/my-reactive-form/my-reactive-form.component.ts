import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.scss']
})
export class MyReactiveFormComponent {
  form: FormGroup;

  constructor() {
    this.form = this.generateForm();
  }

  generateForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  get f() {
    return this.form.controls as any;
  }

  submitForm() {
    console.log(this.form.value);
    alert(`Form submitted!, the name is ${this.form.value.name}`);
  }
}
