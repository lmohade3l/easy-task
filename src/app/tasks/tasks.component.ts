import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user!: User
}
