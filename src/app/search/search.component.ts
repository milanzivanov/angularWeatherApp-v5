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
    console.log('search data ' + this.data);
  }

  // angular form documentation
  onSubmit(f: NgForm) {
    // console.log(f.value.cityName);

    this._weatherService.searchWeatherData(f.value.cityName)
    .subscribe(data => {

      // I get the data in the console???hm
      console.log(data);
      this.data = data;
      console.log('search ' + this.data.date);

      // adding weather data to the weather data
      const weatherItem = new WeatherItem(this.data.cityName, this.data.country, this.data.temp);
      this._weatherService.addWeatherItem(weatherItem);

      // 777 adding to search tamplate
      // push data to resalt[]
      this.result.push(this.cityName);

      // clear the input field
      this.cityName = '';

      // removeCity with service
      // this._weatherService.removeCity(weatherItem);

    });


  }

  // remove
  removeItem(i) {
    // 555
    // const root = this.result[i];
    WEATHER_ITEMS.splice(i, 1);
    this.result.splice(i, 1);

    // 555
    // this.cityRemoved.emit(root);
    // console.log('test remove 111');
  }

  // eventHandler(event) {
  //   // if (event.keyCode === 13) {
  //     this.onSubmit(event);
  //   // }
  // }

}

