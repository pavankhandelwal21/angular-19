import { Component } from '@angular/core';

@Component({
  selector: 'app-contextual-variable',
  imports: [],
  templateUrl: './contextual-variable.component.html',
  styleUrl: './contextual-variable.component.css'
})
export class ContextualVariableComponent {
  users = ['raj', 'rohit', 'man', 'jan', 'bruce', 'aman', 'akshay', 'babe'];
  // users = [];
}
