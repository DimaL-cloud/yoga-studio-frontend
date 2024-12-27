import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-why-we-card',
  imports: [],
  templateUrl: './why-we-card.component.html',
  standalone: true,
  styleUrl: './why-we-card.component.css'
})
export class WhyWeCardComponent {
  @Input() icon!: string; // Icon for the card
  @Input() title!: string; // Title for the card
  @Input() description!: string; // Description for the card
}
