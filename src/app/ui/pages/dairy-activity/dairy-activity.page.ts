import {Component} from '@angular/core';
import {TaskItemComponent} from "../../components/task-item/task-item.component";
import {Task} from "../../../model/task";
import {Daily} from "../../../model/daily";
import {isSameDay} from "date-fns";
import {DaySelectorComponent} from "../../components/day-selector/day-selector.component";

@Component({
  selector: 'dt-dairy-activity.page',
  standalone: true,
  imports: [
    DaySelectorComponent,
    TaskItemComponent
  ],
  templateUrl: './dairy-activity.page.html'
})
export class DairyActivityPage {
  currentDate = new Date();
  currentDaily: Daily | undefined;
  calendar: Array<Daily> = [];

  addTask(): void {
    this.currentDaily = this.calendar.find(c => isSameDay(c.date, this.currentDate));
    if (!this.currentDaily) {
      this.currentDaily = new Daily({date: this.currentDate});
      this.calendar.push(this.currentDaily);
    }
    this.currentDaily.tasks.push(new Task({}));
  }

  dateChanged(date: Date): void {
    this.currentDate = date;
    this.currentDaily = this.calendar.find(c => isSameDay(c.date, this.currentDate));
  }
}
