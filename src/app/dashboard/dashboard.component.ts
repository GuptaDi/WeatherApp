import { Component, OnInit } from '@angular/core';

import weatherData from '../daily.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isUnitsChecked: boolean;
  unitsLabel: string;

  constructor() { }
  weatherData = weatherData;

  ngOnInit(): void {
    this.isUnitsChecked = true;
    this.unitsLabel = this.isUnitsChecked ? 'Metric: °C, m/s' : 'Imperial: °F, mph';

  }

  switchUnits(event) {
    console.log(event.target.checked, event);
    this.isUnitsChecked = event.target.checked;
    this.unitsLabel = this.isUnitsChecked ? 'Metric: °C, m/s' : 'Imperial: °F, mph';
  }

}
