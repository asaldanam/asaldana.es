import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule, Jsonp, Response } from '@angular/http';

import { app_routing } from './app.routes';

import { AsdesignService } from './services/asdesign.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CvComponent } from './cv/cv.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    CvComponent,
    NavigationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    JsonpModule,
  ],
  providers: [
    AsdesignService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
