import { Component } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http'
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private http: HttpClient) {
  }
    info: Data;
    cityNameTemp: '';
    cityName = 'Novi Sad';
    description = '';
    name = '';
    icon: any;
    // url = `http://openweathermap.org/img/w/${this.icon}.png`;

    addedCities: string[] = [];

    ngOnInit() {
    }

    searchCity() {

      this.http.get('http://api.openweathermap.org/data/2.5/weather?APPID=cf4acfccaeb719f8f2992c4f80d2031b&q=' + this.cityName + "&units=metric")
        .subscribe(
          (res: Data) => {
            const weatherCity = res;

            this.cityNameTemp = weatherCity.main.temp;
            this.description = weatherCity.weather[0].description;
            this.name = weatherCity.name;
            this.icon = weatherCity.weather[0].icon;

            console.log(weatherCity);
            this.cityName = '';
          }
        )

        this.addedCities.push(this.cityName);
        console.log(this.addedCities);

        // console.log("testing url " + this.url);


    }

    removeItem(i) {
      this.addedCities.splice(i, 1);
    }


    // toCelsius(fahrenheit) {
    //   return (5/9) * (fahrenheit-32);
    // }
    // document.getElementById("demo").innerHTML = toCelsius;

    // a8281e33ee258e0e6ef4710dcf9d2384http://api.openweathermap.org/data/2.5/weather?APPID=YourAPIKey&q=Londo
}

interface Data {
  main: any;
  weather: any;
  description: any;
  name: any;
}
