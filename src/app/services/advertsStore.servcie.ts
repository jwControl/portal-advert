import { inject, Injectable } from '@angular/core';
import {
  selectAdvertById,
  selectAllAdverts,
  selectSortingOption,
} from '../store/selectors/adverts.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { AdvertActions } from '../store/actions/adverts.actions';
import { filter, Observable } from 'rxjs';
import { AnimalAdvert } from '../models/animalAdvert';
import { SortOption } from '../models/sortOptions';
import { PaginationActions } from '../store/actions/paginationActions.actions';

@Injectable({ providedIn: 'root' })
export class AdvertsStoreService {
  private store = inject(Store<AppState>);

  readonly adverts$ = this.store.select(selectAllAdverts);
  readonly sortingOption$ = this.store.select(selectSortingOption);
  readonly advertById: (id: number) => Observable<AnimalAdvert> = (
    id: number
  ) => this.store.select(selectAdvertById(id)).pipe(filter((x) => !!x));

  dispatchLoadAdverts() {
    this.store.dispatch(AdvertActions.loadAdverts());
  }
    dispatchAddAdvert(advert: AnimalAdvert) {
    this.store.dispatch(AdvertActions.addAdvert({advert}));
  }
    dispatchEditAdvert(advertId: number, changes: Partial<AnimalAdvert>) {
    this.store.dispatch(AdvertActions.updateAdvert({advertId, changes}));
  }

  changeSorting(option: SortOption) {
    this.store.dispatch(AdvertActions.sortAdverts({ option }));
  }

  setPage(page: number) {
    this.store.dispatch(PaginationActions.setNewPage({ currentPage: page }));
  }
}
