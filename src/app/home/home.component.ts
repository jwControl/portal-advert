import { Component } from '@angular/core';
import { AdvertListComponent } from '../advert-feature/advert-list/advert-list.component';

@Component({
  selector: 'home',
  imports: [AdvertListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
