import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {
  names = ['raj', 'anil', 'rahul', 'akshay', 'bruce'];
  objects = [
    { name: "raj", age: 20, email: "email1@email.com" },
    { name: "anil", age: 24, email: "email2@email.com" },
    { name: "rahul", age: 22, email: "email3@email.com" },
    { name: "akshay", age: 28, email: "email4@email.com" },
    { name: "bruce", age: 27, email: "email5@email.com" }
  ]
  newObjects = this.objects.map(data => ({ ...data, outputName: '' }));

  getName(val: string) {
    console.log(val);
    this.newObjects = this.objects.map(data => ({ ...data, outputName: '' }));
    const outputValue = this.newObjects.filter(data => data.name === val);
    if (outputValue) {
      outputValue[0].outputName = outputValue[0].name;
    }

  }
}
