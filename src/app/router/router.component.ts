import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-router',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './router.component.html',
  styleUrl: './router.component.css'
})
export class RouterComponent {

}
