import { Component, inject } from '@angular/core';
import { AnimalAdvertService } from '../../services/animalAdvert.service';
import { Observable } from 'rxjs';
import { Advert } from '../../models/advert';
import { AsyncPipe } from '@angular/common';
import { AdvertCardComponent } from '../advert-card/advert-card.component';
import { MatButtonModule } from '@angular/material/button';
import { AnimalAdvert } from '../../models/animalAdvert';

@Component({
  selector: 'advert-list',
  imports: [AsyncPipe, AdvertCardComponent, MatButtonModule],
  templateUrl: './advert-list.component.html',
  styleUrl: './advert-list.component.scss',
})
export class AdvertListComponent {
  advertService = inject(AnimalAdvertService);

  adverts$: Observable<AnimalAdvert[]> = this.advertService.getAdvertsFromApi();
}
