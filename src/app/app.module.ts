import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ContainerComponent } from './container/container.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { ImageInfoWidgetComponent } from './image-info-widget/image-info-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    ContainerComponent,
    NavBarComponent,
    AboutComponent,
    ImageInfoWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
