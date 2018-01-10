import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule, Jsonp, Response } from '@angular/http';

// angular fire 2
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// routing
import { app_routing } from './app.routes';

//service
import { AsdesignService } from './services/asdesign.service';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CvComponent } from './cv/cv.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { KeyvaluePipe } from './pipes/keyvalue.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { StartComponent } from './start/start.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    CvComponent,
    NavigationComponent,
    ContactComponent,
    KeyvaluePipe,
    ReversePipe,
    StartComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    JsonpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    AsdesignService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
