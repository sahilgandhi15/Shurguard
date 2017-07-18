import { Component, OnInit } from '@angular/core';

enum nav {
  About,
  Units,
  Contact,
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navOptions = ['JIT Storage', 'Home', 'Units', 'Contact'];
  constructor() { }

  ngOnInit() {
  }

}
