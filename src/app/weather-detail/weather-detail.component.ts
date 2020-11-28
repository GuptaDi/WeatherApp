import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  @Input() weatherDataObj;

  temperatureData = {
    name: 'London',
    country: 'GB',
    dateTime: 1606561200,
    humidity: 80,
    sunrise: 1606549215,
    sunset: 1606579040,
    temperature: 8.6


  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
