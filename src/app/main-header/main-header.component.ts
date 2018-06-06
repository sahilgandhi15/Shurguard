import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
})
export class MainHeaderComponent implements OnInit, OnChanges {
  @Input() imagePath: string;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
  }
}
