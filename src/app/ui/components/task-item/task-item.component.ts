import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../model/task';
import {ButtonCircleComponent} from "../button-circle/button-circle.component";
import {ButtonDifficultyLevelComponent} from "../button-difficulty-level/button-difficulty-level.component";

@Component({
  selector: 'dt-task-item',
  standalone: true,
  imports: [
    ButtonCircleComponent,
    ButtonDifficultyLevelComponent
  ],
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  taskDifficulty: 1 | 2 | 3 | 4 | 5;
  isLevelOne: boolean = false;
  isLevelTwo: boolean = false;
  isLevelThree: boolean = false;
  isLevelFour: boolean = false;
  isLevelFive: boolean = false;

  ngOnInit(): void {
    if (!this.task) {
      throw Error('Missing task');
    }
  }

  registerDifficultyLevel(level: 1 | 2 | 3 | 4 | 5): void {
    this.taskDifficulty = level;
    this.isLevelOne = this.taskDifficulty == 1;
    this.isLevelTwo = this.taskDifficulty == 2;
    this.isLevelThree = this.taskDifficulty == 3;
    this.isLevelFour = this.taskDifficulty == 4;
    this.isLevelFive = this.taskDifficulty == 5;
  }
}
