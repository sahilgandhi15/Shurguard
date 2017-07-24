import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  test: string;

  constructor() { }

  ngOnInit() {
    this.test = 'help';
  }
}
