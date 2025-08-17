import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: {
    id: string;
    avatar: string;
    name: string
  }
  @Input() selected!: boolean;

  @Output() select = new EventEmitter();

  onSelectUser() {
    this.select.emit(this.user)
  }
}
