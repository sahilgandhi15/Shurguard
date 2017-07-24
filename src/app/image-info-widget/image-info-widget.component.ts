import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-info-widget',
  templateUrl: './image-info-widget.component.html',
  styleUrls: ['./image-info-widget.component.css']
})
export class ImageInfoWidgetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  storageTips() {
    this.router.navigate(['/storage-tips']);
  }

  units() {
    this.router.navigate(['/units']);
  }
}
