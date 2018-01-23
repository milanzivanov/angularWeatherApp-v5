import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { WeatherService } from './weather.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
