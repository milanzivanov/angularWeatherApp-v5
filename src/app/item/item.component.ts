import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from '../weather-item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // @Input() weatherItem: WeatherItem;

  // @Input() list component to item component
  @Input() item: WeatherItem;

  ngOnInit() {
  }

}
