import { createReducer, on } from '@ngrx/store';
import { AnimalAdvert } from '../../models/animalAdvert';
import { AdvertActions } from '../actions/adverts.actions';

export interface AdvertsState {
  adverts: AnimalAdvert[];
  error: any;
}

export const initialState: AdvertsState = {
  adverts: [],
  error: null,
};

export const advertsReducer = createReducer(
  initialState,
  on(AdvertActions.loadAdverts, (state) => ({ ...state })),
  on(AdvertActions.loadAdvertsSuccess, (state, { adverts }) => ({
    ...state,
    adverts,
  })),
  on(AdvertActions.loadAdvertsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(AdvertActions.addAdvertsSuccess, (state, { advert }) => ({
    ...state,
    adverts: [advert, ...state.adverts],
  })),
  on(AdvertActions.addAdvertFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(AdvertActions.updateAdvert, (state, { advertId, changes }) => ({
    ...state,
    adverts: state.adverts.map((ad) =>
      ad.id === advertId ? { ...ad, ...changes } : ad
    ),
  })),
  on(AdvertActions.updateAdvertSuccess, (state, { advert }) => ({
    ...state,
    adverts: state.adverts.map((ad) => (ad.id === advert.id ? advert : ad)),
  }))
);
