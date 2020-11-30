import { Component, OnInit, Input } from '@angular/core';
import { LogService } from 'src/app/shared/logs/log.service';

@Component({
  selector: 'app-weather-slider',
  templateUrl: './weather-slider.component.html',
  styleUrls: ['./weather-slider.component.css']
})

export class WeatherSliderComponent implements OnInit {
  @Input() weatherData;
  @Input() shortUnit;

  currentCard = 0;
  weatherList = [];
  leftEnd = true;
  rightEnd = false;
  constructor(private logger: LogService) { }

  ngOnInit(): void {
    this.weatherList = this.weatherData.list;
  }

  onPreviousClick() {
    this.logger.log("Previous click");
    const previous = this.currentCard - 1;
    this.currentCard = previous < 0 ? this.weatherList.length - 1 : previous;
    this.leftEnd = this.currentCard <= 0 ? true : false;
    this.rightEnd = this.currentCard >= this.weatherList.length ? true : false;
  }

  onNextClick() {
    this.logger.log("Next click ");
    const next = this.currentCard + 1;
    this.currentCard = next === this.weatherList.length ? 0 : next;
    this.leftEnd = this.currentCard <= 0 ? true : false;
    this.rightEnd = this.currentCard >= this.weatherList.length - 3 ? true : false;
  }


}
