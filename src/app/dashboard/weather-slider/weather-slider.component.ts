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

  currentSlide = 0;
  weatherList = [];
  leftEnd = true;
  rightEnd = false;
  constructor(private logger: LogService) { }

  ngOnInit(): void {
    this.weatherList = this.weatherData.list;
  }

  onPreviousClick() {
    this.logger.log("Previous click");
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.weatherList.length - 1 : previous;
    this.leftEnd = this.currentSlide <= 0 ? true : false;
    this.rightEnd = this.currentSlide >= this.weatherList.length ? true : false;
  }

  onNextClick() {
    this.logger.log("Next click ");
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.weatherList.length ? 0 : next;
    this.leftEnd = this.currentSlide <= 0 ? true : false;
    this.rightEnd = this.currentSlide >= this.weatherList.length - 3 ? true : false;
  }


}
