import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../ui/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
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
