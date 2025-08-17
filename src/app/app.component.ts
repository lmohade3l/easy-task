import { Component, Input } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./users/user.component";
import { DUMMY_USERS } from './dummy-users';
import { User } from './models/user';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: User | null = null

  onSelectUser(event: User) {
    this.selectedUser = event;
  }
}
