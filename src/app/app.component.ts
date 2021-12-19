import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public formGroup: FormGroup;
  post: any = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null],
      age: [null],
      state: ['TN']
    });
  }

  get name() {
    return this.formGroup.get('name') as FormControl;
  }

  onSubmit(post) {
    this.post = post;
  }
}
