import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css'
})
export class EffectComponent {
  count = signal(1);
  displayElement = false;

  constructor() {
    effect(() => {
      if (this.count() == 2) {
        this.displayElement = true;
        setTimeout(() => {
          this.displayElement = false;
        }, 2000)
      }
      else if (this.count() == 4) {
        this.displayElement = true;
      }
      else {
        this.displayElement = false;
      }
    })
  }
}
