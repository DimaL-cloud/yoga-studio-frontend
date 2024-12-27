import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-review',
  imports: [],
  templateUrl: './review.component.html',
  standalone: true,
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  @Input() review!: { text: string; author: string };
}
