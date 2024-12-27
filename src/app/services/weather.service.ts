import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {LocationType, WeatherModel} from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'da7e33a3a12ca5194377a724be5e15e2';
  private lat = 50.4500336;
  private lon = 30.5241361;

  constructor(private http: HttpClient) {}

  getCurrentWeather(): Observable<WeatherModel> {
    const url = `${this.apiUrl}?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get<any>(url).pipe(
      map(response => new WeatherModel(
        Math.round(response.main.temp),
        `/weather/${response.weather[0].icon.substring(0, 2)}.svg`,
        response.weather[0].main,
        this.determineLocationType(Math.round(response.main.temp), response.weather[0].id)
      ))
    );
  }

  private determineLocationType(temperature: number, weatherCode: number): LocationType {
    if (temperature < 10 || (weatherCode >= 200 && weatherCode < 800)) {
      return LocationType.Inside;
    }
    return LocationType.Outside;
  }

}
