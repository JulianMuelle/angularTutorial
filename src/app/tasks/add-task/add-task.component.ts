import {Component, EventEmitter, Output} from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  newTask: Task = {
    id: "2345",
    userId: "334",
    title: "Bsp-Title",
    summary: "Testen",
    dueDate: "1.1.2000"
  }

  @Output()
  addTask = new EventEmitter<Task>();

  @Output()
  cancelTask = new EventEmitter<void>();


  onSubmitNewTaskForm(){

    this.addTask.emit(this.newTask);
    console.log("NeuerTask Output");
  }

  onCancelNewTaskForm(){
    this.cancelTask.emit();
  }


}
