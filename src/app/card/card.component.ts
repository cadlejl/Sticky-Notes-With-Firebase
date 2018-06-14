import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../model/task';
//import { EventEmitter } from 'events'; This one was imported automatically and was not generic. Interesting.

@Component({
  /*moduleId: module.id, Don't know if this is needed */
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardTask: Task;
  @Output() deletedTask = new EventEmitter<any>();

  statusToggle() {
    this.cardTask.completed = !this.cardTask.completed;
  }

  deleted() {
      this.cardTask.deleted = true;
      this.deletedTask.emit(); // There are actually two ways to accomplish this. 1) Leave out .emit() parameter and pass task from the app.component template app-card tag attributes, in which case the EventEmitter type could be any, or 2) make EmitEvent of type Task and pass this.task as the emit() $event. Both ways result in a parameter of type Task passed into the deleteTask() method. Since 2 seems to add complexity and redundancy, I chose 1.
  }
}
