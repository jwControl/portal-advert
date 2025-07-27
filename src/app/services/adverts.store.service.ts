import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AnimalAdvert } from '../models/animalAdvert';
import { AnimalAdvertService } from './animalAdvert.service';

@Injectable({
  providedIn: 'root',
})
export class AdvertsStoreService {
  private advertsSubject = new BehaviorSubject<AnimalAdvert[]>([]);
  adverts$ = this.advertsSubject.asObservable();

  advertsService = inject(AnimalAdvertService);

  constructor() {
    this.loadAdverts();
  }
  loadAdverts() {
    this.advertsService
      .getAdvertsFromApi()
      .pipe(
        tap((adverts) => {
          this.advertsSubject.next(adverts);
        })
      )
      .subscribe();
  }

  searchAdverts(query?: string, category?: string) {
    this.advertsService
      .searchAdvertByQuery(query, category)
      .pipe(
        tap((adverts) => {
          this.advertsSubject.next(adverts);
          console.log('Adverts filtered loaded:', adverts); // Add this to verify data loading
        })
      )
      .subscribe();
  }
}
