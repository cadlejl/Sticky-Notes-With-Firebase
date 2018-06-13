import { Component, Input } from '@angular/core';

import { Task } from '../model/task';

@Component({
  /*moduleId: module.id, Don't know if this is needed */
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() task: Task;

  statusToggle() {
    this.task.completed = !this.task.completed;
  }
}
