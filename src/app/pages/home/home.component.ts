import { Component } from '@angular/core';
import {WhyWeCardComponent} from './why-we-card/why-we-card.component';

@Component({
  selector: 'app-home',
  imports: [
    WhyWeCardComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
