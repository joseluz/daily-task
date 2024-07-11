import {Component} from '@angular/core';
import {TaskItemComponent} from "../../components/task-item/task-item.component";
import {Task} from "../../../model/task";
import {Daily} from "../../../model/daily";
import {isSameDay} from "date-fns";
import {DaySelectorComponent} from "../../components/day-selector/day-selector.component";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {TaskItemLightComponent} from "../../components/task-item-light/task-item-light.component";

@Component({
  selector: 'dt-dairy-activity.page',
  standalone: true,
  imports: [
    DaySelectorComponent,
    TaskItemComponent,
    CdkDropList,
    CdkDrag,
    TaskItemLightComponent
  ],
  templateUrl: './dairy-activity.page.html'
})
export class DairyActivityPage {
  currentDate = new Date();
  currentDaily: Daily | undefined;
  showAllTasks = false;
  calendar: Array<Daily> = [];
  allTasks: Array<Task> = [
    new Task({description: 'Water the plants'}),
    new Task({description: 'Feed the dog'}),
  ];

  addTask(task?: Task): void {
    this.currentDaily = this.calendar.find(c => isSameDay(c.date, this.currentDate));
    if (!this.currentDaily) {
      this.currentDaily = new Daily({date: this.currentDate});
      this.calendar.push(this.currentDaily);
    }
    this.currentDaily.tasks.push(task ?? new Task({}));
  }

  dateChanged(date: Date): void {
    this.currentDate = date;
    this.currentDaily = this.calendar.find(c => isSameDay(c.date, this.currentDate));
  }

  reorder(event: CdkDragDrop<any, any>): void {
    moveItemInArray(this.currentDaily?.tasks || [], event.previousIndex, event.currentIndex);
  }

  openTaskSelector(): void {
    this.showAllTasks = !this.showAllTasks;
  }

  isTaskReadonly(task: Task): boolean {
    return this.currentDaily?.tasks.some((e) => e.description == task.description) ?? false;
  }
}
