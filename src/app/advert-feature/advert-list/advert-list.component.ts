import { Component, inject } from '@angular/core';
import { AdvertsService } from '../../services/adverts.service';
import { Observable } from 'rxjs';
import { Advert } from '../../models/advert';
import { AsyncPipe } from '@angular/common';
import { AdvertCardComponent } from '../advert-card/advert-card.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'advert-list',
  imports: [AsyncPipe, AdvertCardComponent, MatButtonModule],
  templateUrl: './advert-list.component.html',
  styleUrl: './advert-list.component.scss',
})
export class AdvertListComponent {
  advertService = inject(AdvertsService);

  adverts$: Observable<Advert[]> = this.advertService.getAdvertsFromApi();
}
