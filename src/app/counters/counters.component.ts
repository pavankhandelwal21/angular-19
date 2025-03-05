import { Component } from '@angular/core';

@Component({
  selector: 'app-counters',
  imports: [],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.css'
})
export class CountersComponent {
  count: number = 0;

  handleCounter(val?: string) {
    if (val == "plus") {
      this.count++;
    }
    else if (val == "minus") {
      if (this.count != 0) {
        this.count--;
      }
    }
    else {
      this.count = 0;
    }
  }
}
