import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'dt-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() type: 'primary' | 'secondary' = 'primary'
  @Input() isReadonly = false;
  @Output() clicked = new EventEmitter<Event>();
  isPrimary = true;
  isSecondary = false;

  ngOnInit(): void {
    this.isPrimary = this.type == 'primary';
    this.isSecondary = this.type == 'secondary';
  }
}
