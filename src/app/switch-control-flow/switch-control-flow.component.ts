import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-control-flow',
  imports: [],
  templateUrl: './switch-control-flow.component.html',
  styleUrl: './switch-control-flow.component.css'
})
export class SwitchControlFlowComponent {
  color = 'orange'
  setBlockColor(val: string) {
    this.color = val;
  }
  setInputColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
}
