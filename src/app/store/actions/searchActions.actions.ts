import { createAction, props } from '@ngrx/store';
import { AdvertTypesActions } from './actions.types';

export const setSearch = createAction(
  AdvertTypesActions.SET_SEARCH,
  props<{ category: string, query: string }>()
);
export const searchFailure = createAction(
  AdvertTypesActions.SET_SEARCH,
  props<{ error: Error }>()
);


export * as SearchActions from './searchActions.actions';
