import { Component } from '@angular/core';

@Component({
  selector: 'app-input-value',
  imports: [],
  templateUrl: './input-value.component.html',
  styleUrl: './input-value.component.css'
})
export class InputValueComponent {
  name = ""
  displayName = ""
  email = ""
  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
  showName() {
    this.displayName = this.name
  }
  setName() {
    this.name = "System Hai"
  }
  getEmail(value: string) {
    this.email = value
  }
  setEmail() {
    this.email = "email@text.com"
  }
}
