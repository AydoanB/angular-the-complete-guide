import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  defaultQuestion: string = 'pet';
  answer: string;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.form.form.patchValue(
      {
      username: suggestedName
      })
  }

  // onSubmit(e){
  //   console.log(Object.entries(e.value))
  // }
  onSubmit() {
    console.log(this.form.value);
  }
}
