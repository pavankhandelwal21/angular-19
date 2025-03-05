import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  imports: [],
  templateUrl: './dynamic-styling.component.html',
  styleUrl: './dynamic-styling.component.css'
})
export class DynamicStylingComponent {
  bgColor = "red";
  smallSize = "10px";
  mediumSize = "55";
  largeSize = "80px";
  toggle = true;

  zoomFun() {
    this.toggle = !this.toggle;
  }
}
