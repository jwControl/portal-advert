import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdvertDetailsComponent } from './advert-feature/advert-details/advert-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'advert-details', component: AdvertDetailsComponent },
];
