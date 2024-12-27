import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-goals',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './goals.component.html',
  standalone: true,
  styleUrl: './goals.component.css'
})
export class GoalsComponent {
  weight: number | null = null;
  age: number | null = null;
  activityLevel: string = '';
  calories: number | null = null;
  recommendedExercise: string = '';

  calculateGoals() {
    if (this.weight && this.age && this.activityLevel) {
      this.calories = this.weight * 10 + this.age * 5 + (this.activityLevel === 'High' ? 500 : this.activityLevel === 'Medium' ? 300 : 100);
      if (this.activityLevel === 'High') {
        this.recommendedExercise = 'Intense workouts or cardio';
      } else if (this.activityLevel === 'Medium') {
        this.recommendedExercise = 'Moderate activities like jogging or yoga';
      } else {
        this.recommendedExercise = 'Gentle yoga or stretching';
      }
    } else {
      this.calories = null;
      this.recommendedExercise = '';
    }
  }
}
