import { createAction, props } from "@ngrx/store";
import { AnimalAdvert } from "../../models/animalAdvert";

export const loadAdverts = createAction('[Adverts] Load Adverts');

export const loadAdvertsSuccess = createAction(
  '[Adverts] Load Adverts Success',
  props<{ adverts: AnimalAdvert[] }>()
);
export const loadAdvertsFailure = createAction(
  '[Adverts] Load Adverts Failer',
  props<{ error: Error }>()
);