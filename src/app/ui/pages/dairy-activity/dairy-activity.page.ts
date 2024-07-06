import { Component } from '@angular/core';
import { DaySelectorComponent } from './../../components/day-selector/day-selector.component';

@Component({
  selector: 'dt-dairy-activity.page',
  standalone: true,
  imports: [
    DaySelectorComponent
  ],
  templateUrl: './dairy-activity.page.html'
})
export class DairyActivityPage {
  currentDate = new Date();
}
