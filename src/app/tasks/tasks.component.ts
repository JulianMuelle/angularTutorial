import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import { Task } from '../models/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    AddTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userName!: string;
  @Input({required: true}) userId!: string;
  //Boolean-Flag for NewTask-PopUp
  isAddingNewTask: boolean = false;
  selectedUserTasks: any;

  onStartAddTask() {
    this.isAddingNewTask = true;
    console.log("Neuer Task soll angelegt werden");
  }

  onCancelAddTask() {
    this.isAddingNewTask = false;
  }

  onAddTask($event: { title: string; summary: string; date: string }) {

  }

  onCompletedTask($event: String) {

  }
}
