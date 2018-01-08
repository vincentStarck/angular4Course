import { Component,ViewChild } from '@angular/core';
import {FormControl, FormGroup,NgForm} from "@angular/forms";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formTest') signupForm:NgForm;
  title = 'app';
  subscriptions =['Basic','Advanced','Pro'];
  selectedSubscription='Advanced';
  onSubmit(){
    console.log(this.signupForm.value);

  }
}
