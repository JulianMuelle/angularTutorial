import {Component, EventEmitter, Output} from '@angular/core';
import { Task } from '../../models/task.model';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule
  ],
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

  enteredTitle = "";
  enteredSummary = "";
  enteredDueDate = "";

  @Output()
  addTask = new EventEmitter<{title: string; summary: string; date: string }>();

  @Output()
  cancelTask = new EventEmitter<void>();


  onSubmitNewTaskForm(){
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate,
    });

    this.cancelTask.emit();
  }

  onCancelNewTaskForm(){
    this.cancelTask.emit();
  }
}
