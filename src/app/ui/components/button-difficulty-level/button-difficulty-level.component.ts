import {Component, Input} from '@angular/core';
import {ButtonCircleComponent} from "../button-circle/button-circle.component";

@Component({
  selector: 'dt-button-difficulty-level',
  standalone: true,
  imports: [
    ButtonCircleComponent
  ],
  templateUrl: './button-difficulty-level.component.html'
})
export class ButtonDifficultyLevelComponent {
  isCurrentDifficultyLevel = false;
  @Input() difficultyLevel: 1 | 2 | 3 | 4 | 5;

  registerDifficultyLevel(number: number): void {
    this.isCurrentDifficultyLevel = this.difficultyLevel == number;
  }
}
