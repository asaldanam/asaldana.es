import { RouterModule, Routes, Router } from '@angular/router';
import 'rxjs/add/operator/pairwise';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component'
import { StartComponent } from './start/start.component'


const app_routes: Routes = [
    // { path: 'home', component: HomeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'cv', component: CvComponent },
    { path: 'about', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'start', component: StartComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'start'}
];

export const app_routing = RouterModule.forRoot(app_routes);
