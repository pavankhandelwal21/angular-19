import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterComponent } from './router/router.component';

@Component({
  selector: 'app-root',
  imports: [
    LoginComponent,
    RouterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'adding this from comp folder!! lies';
  // x = 10;
  // y = 5;
}
