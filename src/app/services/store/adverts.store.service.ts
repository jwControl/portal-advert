import { inject, Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  shareReplay,
  Subject,
  tap,
  takeUntil,
  map,
  take,
} from 'rxjs';
import { AnimalAdvert } from '../../models/animalAdvert';
import { AnimalAdvertService } from '../animalAdvert.service';
import { sortByCreatedDate } from '../sortFunction';

@Injectable({
  providedIn: 'root',
})
export class AdvertsStoreService implements OnDestroy {
  private advertsSubject = new BehaviorSubject<AnimalAdvert[]>([]);
  adverts$ = this.advertsSubject.asObservable();
  private destroy$ = new Subject<void>(); // Subject to signal component/service destruction

  advertsService = inject(AnimalAdvertService);

  public loadAdverts(): Observable<AnimalAdvert[]> {
    return this.advertsService.getAdvertsFromApi().pipe(
      tap((adverts) => {
        this.advertsSubject.next(adverts.sort(sortByCreatedDate));
        console.log('Trigger loading ads');
      }),
      shareReplay(1),
      takeUntil(this.destroy$)
    );
  }

  //not used
  loadAdvertById(advertId: number): Observable<AnimalAdvert> {
    return this.adverts$.pipe(
      map((adverts) => {
        const advert = adverts.find((advert) => advert.id === advertId);
        if (!advert) {
          throw new Error(`Advert with ID ${advertId} not found`);
        }
        return advert;
      }),
      take(1), // Complete after first match
      takeUntil(this.destroy$)
    );
  }

  // filterAdverts(query?: string, category?: string) {
  //   this.adverts$
  //     .pipe(
  //       map((adverts) => {
  //         let filtered = adverts;
  //         if (category) {
  //           filtered = filtered.filter(
  //             (advert) => advert.category === category
  //           );
  //         }
  //         if (query) {
  //           filtered = filtered.filter((advert) =>
  //             advert.title
  //               .toLocaleLowerCase()
  //               .includes(query.toLocaleLowerCase())
  //           );
  //         }
  //         console.log(filtered);
  //         return filtered.sort(sortByCreatedDate);
  //       }),
  //       tap((filteredAdverts) => this.advertsSubject.next(filteredAdverts))
  //     )
  //     .subscribe();
  // }

  searchAdverts(query?: string, category?: string) {
    this.advertsService
      .searchAdvertByQuery(query, category)
      .pipe(
        tap((adverts) => {
          this.advertsSubject.next(adverts);
        }),
        takeUntil(this.destroy$) // Automatically unsubscribe on destroy
      )
      .subscribe();
  }

  addAdvert(advert: AnimalAdvert) {
    const currentAdverts = this.advertsSubject.getValue();
    this.advertsService
      .createNewAdvert(advert)
      .pipe(
        tap((newAdvert) => {
          const updatedAdverts = [...currentAdverts, newAdvert];
          this.advertsSubject.next(updatedAdverts);
        }),
        takeUntil(this.destroy$) // Automatically unsubscribe on destroy
      )
      .subscribe();
  }
  updateAdvert(advertId: number, changes: Partial<AnimalAdvert>) {
    const currentAdverts = this.advertsSubject.getValue();
    const index = currentAdverts.findIndex((advert) => advert.id === advertId);

    const updatedAdvert = { ...currentAdverts[index], ...changes }; // Merge the updated fields
    const updatedAdverts = [...currentAdverts]; // Create a shallow copy of the array
    updatedAdverts[index] = updatedAdvert; // Replace the advert at the found index
    this.advertsSubject.next(updatedAdverts); // Update the BehaviorSubject with the new array
    console.log(advertId, changes);
    this.advertsService.updateAdvert(advertId, changes).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(); // Signal all subscriptions to complete
    this.destroy$.complete(); // Complete the destroy$ subject
  }
}
