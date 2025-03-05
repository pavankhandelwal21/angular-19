import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-control-flow',
  imports: [],
  templateUrl: './if-else-control-flow.component.html',
  styleUrl: './if-else-control-flow.component.css'
})
export class IfElseControlFlowComponent {
  display = true;
  toggle = true;
  btnCount = '0';
  blockColor = 'Black'
  color = 1;

  showDiv() {
    this.display = true;
  }
  hideDiv() {
    this.display = false;
  }
  toggleDiv() {
    this.display = !this.display;
  }
  toggleDivColor() {
    this.toggle = !this.toggle;
  }
  getCount(val: string) {
    this.btnCount = val;
  }
  setBlockColor(event: Event) {
    this.blockColor = (event.target as HTMLButtonElement).innerText.toLowerCase();
  }
  handleColor(val: number) {
    this.color = val
  }
  handleInput(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value);
  }

}
