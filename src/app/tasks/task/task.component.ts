import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) task!: Task;

  @Output() completedTaskId= new EventEmitter<String>();

  protected onCompletedTask() {
    //Output der TaskID
    this.completedTaskId.emit(this.task.id);
    console.log("Deleted Task = " + this.task.id);
  }
}
