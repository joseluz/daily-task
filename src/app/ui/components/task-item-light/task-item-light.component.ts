import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonCircleComponent} from "../button-circle/button-circle.component";
import {FormsModule} from "@angular/forms";
import {Task} from "../../../model/task";
import {ButtonComponent} from "../button/button.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'dt-task-item-light',
  standalone: true,
  imports: [
    ButtonCircleComponent,
    FormsModule,
    ButtonComponent,
    TranslateModule
  ],
  templateUrl: './task-item-light.component.html'
})
export class TaskItemLightComponent {
  @Input() task: Task;
  @Input() isReadOnly = false;
  @Output() planTask = new EventEmitter<Task>();
  @Output() removeTask = new EventEmitter<Task>();

  plan(): void {
    this.isReadOnly = true;
    this.planTask.emit(this.task);
  }
}
