import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AdvertActions } from "../actions/actions.types";
import { AnimalAdvertService } from "../../services/animalAdvert.service";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()

export class AdvertsEffects {
actions$ = inject(Actions);
advertService = inject(AnimalAdvertService);


  loadAdverts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdvertActions.loadAdverts),
      mergeMap(() =>
        this.advertService.getAdvertsFromApi().pipe(
          map(adverts => AdvertActions.loadAdvertsSuccess({ adverts })),
          catchError(error => of(AdvertActions.loadAdvertsFailure({ error })))
        ))))
    }