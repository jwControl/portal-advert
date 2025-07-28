import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdvertDetailsComponent } from './advert-feature/advert-details/advert-details.component';
import { AdvertCreateEditComponent } from './advert-feature/advert-create-edit/advert-create-edit.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'advert-details', component: AdvertDetailsComponent },
  { path: 'add-advert', component: AdvertCreateEditComponent },
];
