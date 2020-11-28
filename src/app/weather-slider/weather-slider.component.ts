import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-slider',
  templateUrl: './weather-slider.component.html',
  styleUrls: ['./weather-slider.component.css']
})
export class WeatherSliderComponent implements OnInit {
  @Input() weatherData;


  currentSlide = 0;
  slides = [];
  leftEnd = true
  rightEnd = false

  constructor() { }
  ngOnInit(): void {
    this.slides = this.weatherData.list;
    console.log(this.weatherData)
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    this.leftEnd = this.currentSlide <= 0 ? true : false;
    this.rightEnd = this.currentSlide >= this.slides.length ? true : false;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    this.leftEnd = this.currentSlide <= 0 ? true : false;
    this.rightEnd = this.currentSlide >= this.slides.length - 3 ? true : false;
  }


}
