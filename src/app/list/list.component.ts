import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../weather-item';
import { WEATHER_ITEMS } from '../weather.data';
import { WeatherService } from '../weather.service';
import { log } from 'util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  weatherItems: WeatherItem[];
  // weatherItems: WeatherItem[] = WEATHER_ITEMS;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    // service
    this.weatherItems = this._weatherService.getWetherItems();

    console.log( 'list component ' + this.weatherItems);

  }

}
