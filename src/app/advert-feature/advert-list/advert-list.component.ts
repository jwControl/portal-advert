import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AdvertCardComponent } from '../advert-card/advert-card.component';
import { MatButtonModule } from '@angular/material/button';
import { AnimalAdvert } from '../../models/animalAdvert';
import { AdvertsStoreService } from '../../services/adverts.store.service';

@Component({
  selector: 'advert-list',
  imports: [AsyncPipe, AdvertCardComponent, MatButtonModule],
  templateUrl: './advert-list.component.html',
  styleUrl: './advert-list.component.scss',
})
export class AdvertListComponent {
  advertStore = inject(AdvertsStoreService);

  adverts$: Observable<AnimalAdvert[]> = this.advertStore.adverts$;
}
