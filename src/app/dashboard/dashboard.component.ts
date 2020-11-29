import { Component, OnInit } from '@angular/core';
import { Weather } from '../core/models/weather.model';
import { WeatherApiService } from '../core/services/weather-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isImperial = true
  unitsLabel = 'Imperial: °F, mph'
  weatherData: Weather;

  constructor(public weatherApiService: WeatherApiService) { }

  ngOnInit(): void {
    this.getWeatherDetails();
  }

  switchUnits(event) {
    this.isImperial = event.target.checked;
    this.unitsLabel = this.isImperial ? 'Imperial: °F, mph' : 'Metric: °C, m/s';
    this.getWeatherDetails();
  }

  getWeatherDetails() {
    const location = 'Frankfurt';
    const maxDays = 10;
    const unit = this.isImperial ? 'imperial' : 'metric';

    const searchData = {
      units: unit,
      place: location,
      count: maxDays
    };

    let serviceData = this.weatherApiService.getWeatherForLocation(searchData).subscribe(
      data => {
        this.weatherData = <Weather>data;
      },
      error => {
        console.log('Error');
      }
    );

  }

}
