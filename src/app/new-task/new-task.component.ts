import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter();
  @Output() add = new EventEmitter<{
    title: string,
    date: string,
    summary: string
  }>()

  enteredTitle = '';
  enteredDate = '';
  enteredSummary = ''

  onClose() {
    this.close.emit()
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
    this.onClose()
  }
}
