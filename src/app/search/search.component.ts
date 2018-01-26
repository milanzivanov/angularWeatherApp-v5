import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import {NgForm} from '@angular/forms';

import { WeatherService, CityInfo } from '../weather.service';
import { WeatherItem } from '../weather-item';
import { log } from 'util';

import { WEATHER_ITEMS } from '../weather.data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  // input search
  cityName: string;
  data: CityInfo;

  // adding to search tamplate
  result: string[] = [];

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
  }

  // angular form documentation
  onSubmit() {

    // exit from event
    if (this.cityName.trim() === '') {
      return;
    }

    // more than one cites in input
    const addedCities = this.cityName.split(',').map(city => city.trim());

    addedCities.forEach(city => {
      // http service
      this._weatherService.searchWeatherData(city)
      .subscribe(data => {

        // adding weather data to the weather data
        const weatherItem = new WeatherItem(data.cityName, data.country, data.temp);
        this._weatherService.addWeatherItem(weatherItem);

        // push data to resalt[]
        // TRICKY
        this.result.push(data.cityName);

        // clear the input field
        this.cityName = '';
      },
      error => {
        alert('City not found or not exsist!!! Try agean.');
      }
    );

    });
  }

  // remove city
  removeItem(i) {
    WEATHER_ITEMS.splice(i, 1);
    this.result.splice(i, 1);
  }
}

