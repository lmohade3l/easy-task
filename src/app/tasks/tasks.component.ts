import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user';
import { TaskComponent } from "../task/task.component";
import { Task } from '../models/task';
import { NewTaskComponent } from "../new-task/new-task.component";
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent,],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user!: User
  addTask!: boolean

  constructor(private tasksService: TasksService) {

  }

  onAddTask() {
    this.addTask = true;
  }

  onClose() {
    this.addTask = false
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id)
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id)
  }

  onAddNewTask(newTask: {
    title: string,
    date: string,
    summary: string
  }) {
    this.tasksService.addTask(newTask, this.user.id)
  }
}
