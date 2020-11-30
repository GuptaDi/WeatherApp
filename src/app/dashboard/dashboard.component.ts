import { Component, OnInit } from '@angular/core';
import { Weather } from '../core/models/weather.model';
import { WeatherApiService } from '../core/services/weather-api.service';
import { GlobalErrorHandler } from '../shared/errors/errorhandler';
import { LogService } from '../shared/logs/log.service';
import { SHORT_UNIT_C, SHORT_UNIT_F, UNIT_LABEL_IMPERIAL, UNIT_LABEL_METRIC, UNIT_URL_IMPERIAL, UNIT_URL_METRIC } from 'src/app/shared/constants/app.constants';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isImperial = true;
  unitLabel = UNIT_LABEL_IMPERIAL;
  shortUnit = SHORT_UNIT_F;
  weatherData: Weather;

  constructor(public weatherApiService: WeatherApiService, private logger: LogService, private error: GlobalErrorHandler) { }

  ngOnInit(): void {
    this.getWeatherDetails();
  }

  switchUnits(event) {
    this.isImperial = event.target.checked;
    this.unitLabel = this.isImperial ? UNIT_LABEL_IMPERIAL : UNIT_LABEL_METRIC;
    this.shortUnit = this.getShortUnits(this.isImperial);
    this.getWeatherDetails();
  }

  getShortUnits(isImperial) {
    return this.isImperial ? SHORT_UNIT_F : SHORT_UNIT_C;
  }

  prepareUrlFields() {
    const unit = this.isImperial ? UNIT_URL_IMPERIAL : UNIT_URL_METRIC;
    const searchData = {
      unit
    };
    return searchData;
  }

  getWeatherDetails() {
    this.logger.log("Get weather details");
    const searchData = this.prepareUrlFields();

    let serviceData = this.weatherApiService.getWeatherForLocation(searchData).subscribe(
      data => {
        this.weatherData = data as Weather;
      },
      error => {
        this.error.handleError(error)
      }
    );
  }
}
