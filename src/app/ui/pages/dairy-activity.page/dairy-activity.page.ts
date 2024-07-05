import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dt-dairy-activity.page',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './dairy-activity.page.html'
})
export class DairyActivityPage {
  currentDate = new Date();
}
