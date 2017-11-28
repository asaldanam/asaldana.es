import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';

const app_routes: Routes = [
    // { path: 'home', component: HomeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'cv', component: CvComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'cv'}
];

export const app_routing = RouterModule.forRoot(app_routes);
