import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) {

  }

  getWeatherForLocation(searchData) {
    const appId = '542ffd081e67f4512b705f89d2a611b2';
    console.log(searchData);
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${searchData.place}&mode=json&units=${searchData.units}&cnt=${searchData.count}&appid=${appId}`);
  }


}
