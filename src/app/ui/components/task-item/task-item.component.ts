import {Component, Input, OnInit} from '@angular/core';
import {DifficultyLevel, Task} from '../../../model/task';
import {ButtonCircleComponent} from "../button-circle/button-circle.component";
import {ButtonDifficultyLevelComponent} from "../button-difficulty-level/button-difficulty-level.component";
import {FormsModule} from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'dt-task-item',
  standalone: true,
  imports: [
    ButtonCircleComponent,
    ButtonDifficultyLevelComponent,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  isLevelOne: boolean = false;
  isLevelTwo: boolean = false;
  isLevelThree: boolean = false;
  isLevelFour: boolean = false;
  isLevelFive: boolean = false;

  difficultyLevel = DifficultyLevel;

  ngOnInit(): void {
    if (!this.task) {
      throw Error('Missing task');
    }
  }

  registerDifficultyLevel(level: 1 | 2 | 3 | 4 | 5): void {
    this.task.difficultyLevel = level;
    this.isLevelOne = this.task.difficultyLevel == 1;
    this.isLevelTwo = this.task.difficultyLevel == 2;
    this.isLevelThree = this.task.difficultyLevel == 3;
    this.isLevelFour = this.task.difficultyLevel == 4;
    this.isLevelFive = this.task.difficultyLevel == 5;
  }
}
