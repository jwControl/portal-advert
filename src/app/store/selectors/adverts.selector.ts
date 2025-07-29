import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdvertsState } from '../reducers/adverts.reducers';


export const selectAdvertsState = createFeatureSelector<AdvertsState>('adverts');

export const selectAllAdverts = createSelector(
  selectAdvertsState,
  (state: AdvertsState) => state.adverts
);