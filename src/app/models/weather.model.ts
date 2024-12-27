export class WeatherModel {
  temperature: number;
  icon: string;
  description: string;
  locationType: LocationType;

  constructor(temperature: number, icon: string, description: string, locationType: LocationType) {
    this.temperature = temperature;
    this.icon = icon;
    this.description = description;
    this.locationType = locationType;
  }
}

export enum LocationType {
  Outside = 'Outside',
  Inside = 'Inside'
}
