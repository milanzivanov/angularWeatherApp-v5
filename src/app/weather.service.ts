import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather.data';

@Injectable()
export class WeatherService {

  constructor() { }

  // service
  getWetherItems() {
    return WEATHER_ITEMS;
  }

}
