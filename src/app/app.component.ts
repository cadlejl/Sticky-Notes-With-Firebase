import { Component } from '@angular/core';

import { Task } from "./model/task";

@Component({
  /*moduleId: module.id, From old version. Don't know if it will be needed */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'; // Don't know what this is for.

  private tasks: Task[] = [];
    private currentTask = new Task(null, false);

    addTask() {
        let task = new Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
        this.currentTask.content = null;
    }
}
