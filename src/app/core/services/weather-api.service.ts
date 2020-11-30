import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) {

  }

  getWeatherForLocation(searchData) {
    const { url } = AppConfig.settings.apiServer;
    const { appId, location, daysCount } = AppConfig.settings.app;

    return this.http.get(`${url}?q=${location}&mode=json&units=${searchData.unit}&cnt=${daysCount}&appid=${appId}`);
  }


}
