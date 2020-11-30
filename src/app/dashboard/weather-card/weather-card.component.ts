import { Component, OnInit, Input } from '@angular/core';
import { faCloudRain, faCloud, faSnowflake, faCloudShowersHeavy, faCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { weatherStatus } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherDataObj;
  @Input() temperatureUnit;
  faIcon: IconDefinition;

  constructor() { }

  ngOnInit(): void {
    this.setFaIcons(this.weatherDataObj.weather[0].description);
  }

  setFaIcons(weatherDescription) {
    switch (weatherDescription) {
      case weatherStatus.CLEAR_SKY:
        this.faIcon = faCircle;
        break;
      case weatherStatus.OVERCAST_CLOUDS:
      case weatherStatus.FEW_CLOUDS:
      case weatherStatus.BROKEN_CLOUDS:
      case weatherStatus.SCATTERED_CLOUDS:
        this.faIcon = faCloud;
        break;
      case weatherStatus.LIGHT_RAIN:
        this.faIcon = faCloudRain;
        break;
      case weatherStatus.MODERATE_RAIN:
        this.faIcon = faCloudShowersHeavy;
        break;
      case weatherStatus.RAIN_AND_SNOW:
        this.faIcon = faSnowflake;
        break;
      default: this.faIcon = faCircle;
        break;
    }
    return this.faIcon;
  }

}
