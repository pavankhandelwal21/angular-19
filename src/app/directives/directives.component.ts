import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  showValue = true;
  count = 0;
  color = '';

  changeCondition() {
    this.showValue = !this.showValue;
  }
  changeCount() {
    this.count++
  }

  students = ['sam', 'dev', 'raj', 'bruce'];
  studentsData = [
    {
      name: "same",
      age: 22,
      email: "sam@test.com",
      arr: [
        {
          again: 1,
          value: "something"
        },
        {
          again: 123,
          value: "anything"
        },
        {
          again: 345,
          value: "otherthing"
        },
      ]
    }, {
      name: "raj",
      age: 54,
      email: "raj@test.com",
      arr: [
        {
          again: 7,
          value: "something1"
        }
      ]
    }, {
      name: "man",
      age: 12,
      email: "man@test.com",
      arr: [
        {
          again: 11,
          value: "something2"
        }
      ]
    }, {
      name: "dravid",
      age: 32,
      email: "dravid@test.com",
      arr: [
        {
          again: 15,
          value: "something3"
        }
      ]
    },
  ]
  updateColor(val: string) {
    this.color = val;
  }
}
