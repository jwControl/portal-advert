import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AnimalAdvertService } from '../../services/animalAdvert.service';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AdvertActions } from '../actions/adverts.actions';
import { SearchActions } from '../actions/searchActions.actions';

@Injectable()
export class AdvertsEffects {
  actions$ = inject(Actions);
  advertService = inject(AnimalAdvertService);

loadAdverts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdvertActions.loadAdverts),
      switchMap(() =>
        this.advertService.getAdvertsFromApi().pipe(
          map((adverts) => {
            return AdvertActions.loadAdvertsSuccess({ adverts });
          }),
          catchError((error) => of(AdvertActions.loadAdvertsFailure({ error })))
        )
      )
    )
  );

  addAdvert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdvertActions.addAdvert),
      concatMap(({ advert }) =>
        this.advertService.createNewAdvert(advert).pipe(
          map((createdAdvert) =>
            AdvertActions.addAdvertsSuccess({ advert: createdAdvert })
          ),
          catchError((error) => of(AdvertActions.addAdvertFailure({ error })))
        )
      )
    )
  );

  updateAdvert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdvertActions.updateAdvert),
      concatMap(({ advertId, changes }) =>
        this.advertService.updateAdvert(advertId, changes).pipe(
          map((updatedAdvert) =>
            AdvertActions.updateAdvertSuccess({ advert: updatedAdvert })
          ),
          catchError((error) =>
            of(AdvertActions.updateAdvertFailure({ error }))
          )
        )
      )
    )
  );

  filterAdverts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.setSearch),
      switchMap(({ category, query }) =>
        this.advertService.searchAdvertByQuery(query, category).pipe(
          map((filtererdAdverts) =>
            AdvertActions.loadAdvertsSuccess({ adverts: filtererdAdverts })
          ),
          catchError((error) => of(SearchActions.searchFailure({ error })))
        )
      )
    )
  );
}
