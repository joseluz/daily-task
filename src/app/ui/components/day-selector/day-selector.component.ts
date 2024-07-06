import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { addDays } from 'date-fns';

@Component({
  selector: 'dt-day-selector',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './day-selector.component.html'
})
export class DaySelectorComponent {
  @Input() currentDate: Date = new Date();
  @Output() currentDateChange = new EventEmitter<Date>();
  
  previousDay(): void{
    this.currentDate = addDays(this.currentDate, -1);
    this.currentDateChange.emit(this.currentDate);
  }

  nextDay(): void{
    this.currentDate = addDays(this.currentDate, +1);
    this.currentDateChange.emit(this.currentDate);
  }
}
