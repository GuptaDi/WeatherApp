import { Component, OnInit } from '@angular/core';

import weatherData from '../daily.json';
import { WeatherApiService } from '../service/weather-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isUnitsChecked = true
  unitsLabel = 'Imperial: °F, mph'

  constructor(public weatherApiService: WeatherApiService) { }
  weatherData: any;

  ngOnInit(): void {
    this.getWeatherDetails();
  }

  switchUnits(event) {
    console.log(event.target.checked, event);
    this.isUnitsChecked = event.target.checked;
    this.unitsLabel = this.isUnitsChecked ? 'Imperial: °F, mph' : 'Metric: °C, m/s';
    this.getWeatherDetails();
  }

  getWeatherDetails() {
    this.isUnitsChecked = false;
    let location = 'Frankfurt';
    let maxDays = 10;

    const unit = this.isUnitsChecked ? 'f' : 'metric';
    const searchData = {
      units: unit,
      place: location,
      count: maxDays
    }
    let serviceData = this.weatherApiService.getWeatherForLocation(searchData).subscribe(
      data => {
        console.log(data)
        this.weatherData = data;
      },
      error => {
        console.log('Error');
      }
    );
    console.log(serviceData);
  }

}
