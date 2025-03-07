import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterComponent } from './router/router.component';
import { BasicRouterComponent } from './data-transfer/basic-router/basic-router.component';

@Component({
  selector: 'app-root',
  imports: [
    LoginComponent,
    RouterComponent,
    BasicRouterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'adding this from comp folder!! lies';
  // x = 10;
  // y = 5;
}
