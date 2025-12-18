import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { newTaskData } from '../models/newTaskData.model';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

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
  getUserTasks(userId: string) {
    return this.dummyTasks.filter((task) => task.userId === userId);
  }

  //Methode erstellt IMMUTABLE
  addTask(taskData: newTaskData, userId: string){
    //baue ein Task-Objekt
    let taskId = "t" + (this.dummyTasks.length+1);
    console.log("Neue Task-Id: " + taskId);
    let newTask: Task = {
      id: taskId,
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    }
    //erweitere das Array ->mit SpreadOperator
    this.dummyTasks = [
      ...this.dummyTasks, newTask
    ];
    console.log("Neuer Task erfolgreich angelegt");
  }

   removeTask(taskId: String) {
    this.dummyTasks = this.dummyTasks.filter(task => task.id !== taskId);
  }



}
