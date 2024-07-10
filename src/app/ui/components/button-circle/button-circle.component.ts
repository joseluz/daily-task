import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";
import {DifficultyLevel} from "../../../model/task";

@Component({
  selector: 'dt-button-circle',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button-circle.component.html'
})
export class ButtonCircleComponent {
  @Input() label: string | DifficultyLevel;
  @Output() action = new EventEmitter<void>();
  @Input() cssBlock: string = '';

  clicked(evt: Event): void {
    this.action.emit();
    evt.stopPropagation();
  }
}
