import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  task = {
    id: 1,
    name: ''
  };

  tasks = [];
  counter = 1;

  Done(item) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (item.id == this.tasks[i].id) {
        if (this.tasks[i].done) {
          this.tasks[i].done = false;
          this.tasks[i].checked = false;
        }
        else {
          this.tasks[i].done = true;
          this.tasks[i].checked = true;
        }
      }
    }
  }

  Add() {
    this.tasks.push({ id: this.counter, name: this.task.name });
    this.counter++;
    this.task.name = "";
  }

  Edit(item) {
    this.task = item;
  }

  Delete(item) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == item.id) {
        this.tasks.splice(i, 1);
      }
      // this.tasks[i-1].id=this.tasks[i].id; 
    }
  }

}
