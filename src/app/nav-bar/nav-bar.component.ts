import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  navOptions = [ 'Home', 'Units', 'Contact'];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigation(url: string) {
    if (url === 'Units') {
      this.router.navigate(['/units']);
    }
    if (url === 'Home') {
      this.router.navigate(['/shurguard']);
    }
    if (url === 'Shurguard Storage') {
      this.router.navigate(['/shurguard']);
    }
    if (url === 'Contact') {
      this.router.navigate(['/contact']);
    }
  }
}
