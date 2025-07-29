import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AdvertCardComponent } from '../advert-card/advert-card.component';
import { MatButtonModule } from '@angular/material/button';
import { AnimalAdvert } from '../../models/animalAdvert';
import { AdvertsStoreService } from '../../services/store/adverts.store.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import { selectAllAdverts } from '../../store/selectors/adverts.selector';


@Component({
  selector: 'advert-list',
  imports: [AsyncPipe, AdvertCardComponent, MatButtonModule],
  templateUrl: './advert-list.component.html',
  styleUrl: './advert-list.component.scss',
})
export class AdvertListComponent implements OnInit{

  advertStore = inject(AdvertsStoreService);
  store = inject<Store<AppState>>(Store);

  // lightweight store
  // adverts$: Observable<AnimalAdvert[]> = this.advertStore.adverts$;
  adverts$: Observable<AnimalAdvert[]>  = this.store.select(selectAllAdverts);
    ngOnInit(): void {
 
  }
}
