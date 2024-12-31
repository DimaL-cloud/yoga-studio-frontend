import {Component, OnInit} from '@angular/core';
import {ClassSchedule} from '../../models/class-schedule.model';
import {ClassScheduleCardComponent} from './class-schedule-card/class-schedule-card.component';
import {NgForOf, NgIf} from '@angular/common';
import {WeatherService} from '../../services/weather.service';
import {LocationType, WeatherModel} from '../../models/weather.model';
import {ClassScheduleService} from '../../services/class-schedule.service';

@Component({
  selector: 'app-class-schedule',
  imports: [
    ClassScheduleCardComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './class-schedule.component.html',
  standalone: true,
  styleUrl: './class-schedule.component.css'
})
export class ClassScheduleComponent implements OnInit {
  allClasses: ClassSchedule[] = [];

  displayedClasses: ClassSchedule[] = [];

  weatherData: WeatherModel = new WeatherModel(0, '', '', LocationType.Outside);

  constructor(private weatherService: WeatherService,
              private classScheduleService: ClassScheduleService) {
  }

  ngOnInit() {
   this.classScheduleService.getAllClassSchedules().subscribe(classSchedules => {
      this.allClasses = classSchedules;
      this.displayedClasses = this.allClasses.slice(0, 8);
    }
    );
    this.weatherService.getCurrentWeather().subscribe({
      next: (data: WeatherModel) => {
        this.weatherData = data; // Assign WeatherModel object
      },
      error: (err) => {
        console.error('Failed to fetch weather data', err);
      },
    });
  }

  loadMoreClasses() {
    const currentLength = this.displayedClasses.length;
    const additionalClasses = this.allClasses.slice(currentLength, currentLength + 6);
    this.displayedClasses = [...this.displayedClasses, ...additionalClasses];
  }

  hasMoreClasses(): boolean {
    return this.displayedClasses.length < this.allClasses.length;
  }
}
