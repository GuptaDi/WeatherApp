import { Component, OnInit } from '@angular/core';
import { Weather } from '../core/models/weather.model';
import { WeatherApiService } from '../core/services/weather-api.service';
import { GlobalErrorHandler } from '../shared/errors/errorhandler';
import { LogService } from '../shared/logs/log.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isImperial = true
  unitsLabel = 'Imperial: °F, mph'
  weatherData: Weather;

  constructor(public weatherApiService: WeatherApiService, private logger: LogService, private error: GlobalErrorHandler) { }

  ngOnInit(): void {
    this.getWeatherDetails();
  }

  switchUnits(event) {
    this.isImperial = event.target.checked;
    this.unitsLabel = this.isImperial ? 'Imperial: °F, mph' : 'Metric: °C, m/s';
    this.getWeatherDetails();
  }

  getWeatherDetails() {
    this.logger.log("Getting weather details");
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
        this.error.handleError(error)
      }
    );

  }

}
