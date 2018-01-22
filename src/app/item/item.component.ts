import { Component, OnInit } from '@angular/core';
import { ItemInfo } from './item-info';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  weatherItem: ItemInfo;

  constructor() {
    this.weatherItem = new ItemInfo('Novi Knezevac', 'Rainy', 4);
  }

  ngOnInit() {
  }

}
