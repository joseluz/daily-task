import {Component} from '@angular/core';
import {DaySelectorComponent} from './../../components/day-selector/day-selector.component';
import {TaskItemComponent} from "../../components/task-item/task-item.component";
import {Task} from "../../../model/task";

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
  task = new Task({description: 'Peteca', isPlanned: true});
  task2 = new Task({description: 'Peteca2', isPlanned: false});
}
