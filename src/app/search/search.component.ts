import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    console.log(form);
  }

  // tslint:disable-next-line:member-ordering
  // ngMOdel example
  // name = '';

  // setValue() { this.name = 'Nancy'; }

}
