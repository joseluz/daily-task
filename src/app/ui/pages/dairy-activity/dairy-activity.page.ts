import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from "../../components/task-item/task-item.component";
import { Task } from "../../../model/task";
import { Daily } from "../../../model/daily";
import { isSameDay } from "date-fns";
import { DaySelectorComponent } from "../../components/day-selector/day-selector.component";
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from "@angular/cdk/drag-drop";
import { TaskItemLightComponent } from "../../components/task-item-light/task-item-light.component";
import { ButtonComponent } from "../../components/button/button.component";
import { TaskPersistence } from "../../../persistence/task.persistence";

@Component({
  selector: 'dt-dairy-activity.page',
  standalone: true,
  imports: [
    DaySelectorComponent,
    TaskItemComponent,
    CdkDropList,
    CdkDrag,
    TaskItemLightComponent,
    ButtonComponent
  ],
  templateUrl: './dairy-activity.page.html'
})
export class DairyActivityPage implements OnInit {
  currentDate = new Date();
  currentDaily: Daily | undefined;
  showAllTasks = false;
  calendar: Array<Daily> = [];
  allTasks: Array<Task> = [
    new Task({id: 1, description: 'Water the plants'}),
    new Task({id: 2, description: 'Feed the dog'}),
  ];

  constructor(private taskPersistence: TaskPersistence) {
  }

  ngOnInit(): void {
    // this.addTask(new Task({description: 'Do it at ' + new Date().getHours() + ':' + new Date().getMinutes()}))
    this.taskPersistence.getAll()
      .subscribe(tasks => {
        for (const task of tasks) {
          this.allTasks.push(task);
        }
      });
  }

  addTask(task?: Task): void {
    this.currentDaily = this.calendar.find(c => isSameDay(c.date, this.currentDate));
    if (!this.currentDaily) {
      this.currentDaily = new Daily({date: this.currentDate});
      this.calendar.push(this.currentDaily);
    }
    const newTask = new Task({id: this.allTasks.length * -1})
    if (!task) {
      this.allTasks.push(newTask);
    }
    this.currentDaily.tasks.push(task ?? newTask);

    if (task)
      this.taskPersistence.storeSingle(task)
        .subscribe(t => {
          console.log('stored:', task);
        });
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
    return this.currentDaily?.tasks.some((e) => e.id == task.id) ?? false;
  }

  removeTask(task: Task): void {
    this.allTasks = this.allTasks.filter(t => t.id !== task.id);
  }
}
