import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherCardComponent } from './dashboard/weather-card/weather-card.component';
import { WeatherSliderComponent } from './dashboard/weather-slider/weather-slider.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherApiService } from './core/services/weather-api.service';
import { LogService } from './shared/logs/log.service';
import { GlobalErrorHandler } from './shared/errors/errorhandler';


@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherSliderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherApiService, LogService, GlobalErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
