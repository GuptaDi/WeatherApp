import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AnimationBuilder, trigger, animate, style, transition, state } from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app1';
  constructor() {

  }

  ngOnInit() {
    console.log('ngoninit');
  }

}
