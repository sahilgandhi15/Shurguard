import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ContainerComponent } from './container/container.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { ImageInfoWidgetComponent } from './image-info-widget/image-info-widget.component';
import { UnitsComponent } from './units/units.component';
import { ContactComponent } from './contact/contact.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    ContainerComponent,
    NavBarComponent,
    AboutComponent,
    ImageInfoWidgetComponent,
    UnitsComponent,
    ContactComponent,
    StorageTipsComponent,
    WhyChooseUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
