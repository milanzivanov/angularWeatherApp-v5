import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather.data';
import { WeatherItem } from './weather-item';
import { RootObject } from './weather-interface';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from 'util';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  // service
  getWetherItems() {
    return WEATHER_ITEMS;
  }

  // add weather item ++
  // tslint:disable-next-line:no-shadowed-variable
  addWeatherItem(WeatherItem: WeatherItem) {
    WEATHER_ITEMS.push(WeatherItem);
  }

  // search weather app
  searchWeatherData(cityName: string): Observable<any> {

    // tslint:disable-next-line:max-line-length
    return this._http.get(`https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=cf4acfccaeb719f8f2992c4f80d2031b&q=${cityName}&units=metric`)
    .map((response) => {
      console.log(response);
      const temp = response as RootObject;
      console.log(temp.city.country);
      return {
        cityName: temp.city.name,
        temp: temp.list[0].main.temp,
        country: temp.city.country
      };
    });
  }
}

export interface CityInfo {
  cityName: string;
  temp: number;
  humid: number;
  icon: string;
  wind: number;
  date: string;
  country: string;
}
