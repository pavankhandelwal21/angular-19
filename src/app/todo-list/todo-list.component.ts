import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  taskName = "";
  taskList: { id: number, task: string }[] = [];

  addTask() {
    if (this.taskName) {
      this.taskList.push({ id: this.taskList.length + 1, task: this.taskName });
      this.taskName = "";
    }
  }

  deleteItem(itemId: number) {
    this.taskList = this.taskList.filter(item => item.id != itemId);
  }

  // taskName = "";
  // taskList: { task: string }[] = [];

  // addTask() {
  //   if (this.taskName) {
  //     this.taskList.push({ task: this.taskName });
  //     this.taskName = "";
  //   }
  // }

  // deleteItem(itemId: number) {
  ////   this.taskList.splice(itemId, 1);
  //   this.taskList = this.taskList.filter((_,i) => i !== itemId)
  // }

}
