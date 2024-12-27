import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-teacher-card',
  imports: [],
  templateUrl: './teacher-card.component.html',
  standalone: true,
  styleUrl: './teacher-card.component.css'
})
export class TeacherCardComponent {
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() photo: string = '';
}
