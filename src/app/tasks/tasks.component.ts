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

  @Input({required: true})
  userName!: string;
  @Input({required: true})
  userId!: string;
  //Test für Input aus NewTaskComponent

  isAddingNewTask: boolean = false;

  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]
  //computedValue für Filterung des tasks-Array nach userId
  get selectedUserTasks() {
    return this.dummyTasks.filter((task) => task.userId === this.userId);
  }

  protected onCompletedTask(completedTaskId: String) {
    this.dummyTasks = this.dummyTasks.filter(task => task.id !== completedTaskId);
  }

  protected onStartAddTask() {
    this.isAddingNewTask = true;
    console.log("Neuer Task soll angelegt werden");
  }

  protected onCancelAddTask() {
    this.isAddingNewTask = false;
    console.log("Neuer Task soll angelegt werden");
  }

  //Methode erstellt IMMUTABLE
  protected onAddTask(newTask: Task){
    this.dummyTasks = [
      ...this.dummyTasks, newTask
    ];
    console.log("Task hinzugefügt");
    console.log(newTask);
  }
}
