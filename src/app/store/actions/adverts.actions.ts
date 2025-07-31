import { createAction, props } from '@ngrx/store';
import { AnimalAdvert } from '../../models/animalAdvert';
import { AdvertTypesActions } from './actions.types';

export const loadAdverts = createAction(AdvertTypesActions.LOAD_ADVERTS);

export const loadAdvertsSuccess = createAction(
  AdvertTypesActions.LOAD_ADVERTS_SUCCESS,
  props<{ adverts: AnimalAdvert[] }>()
);
export const loadAdvertsFailure = createAction(
  AdvertTypesActions.LOAD_ADVERTS_FAILURE,
  props<{ error: Error }>()
);

export const addAdvert = createAction(
  AdvertTypesActions.ADD_ADVERT,
  props<{ advert: AnimalAdvert }>()
);
export const addAdvertsSuccess = createAction(
  AdvertTypesActions.ADD_ADVERT_SUCCESS,
  props<{ advert: AnimalAdvert }>()
);
export const addAdvertFailure = createAction(
  AdvertTypesActions.ADD_ADVERT_FAILURE,
  props<{ error: Error }>()
);

export const updateAdvert = createAction(
  AdvertTypesActions.UPDATE_ADVERT,
  props<{ advertId: number; changes: Partial<AnimalAdvert> }>()
);
export const updateAdvertSuccess = createAction(
  AdvertTypesActions.UPDATE_ADVERT_SUCCESS,
  props<{ advert: AnimalAdvert }>()
);
export const updateAdvertFailure = createAction(
  AdvertTypesActions.UPDATE_ADVERT_FAILURE,
  props<{ error: Error }>()
);

export const sortAdverts = createAction(
  AdvertTypesActions.SORT,
  props<{option: string}>()
)


export * as AdvertActions from './adverts.actions';
