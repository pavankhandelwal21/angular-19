import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  clickEventListner() {
    console.log('Click function called');

    // this.otherFunction();
  }

  otherFunction() {
    console.log('other function called');
  }

  sum(a: number, b: number) {
    console.log(a + b);
  }
}
