import {Component, Input} from '@angular/core';
import {ClassSchedule} from '../../../models/class-schedule.model';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-class-schedule-card',
  imports: [
  ],
  templateUrl: './class-schedule-card.component.html',
  standalone: true,
  styleUrl: './class-schedule-card.component.css'
})
export class ClassScheduleCardComponent {
  @Input() schedule!: ClassSchedule;
}
