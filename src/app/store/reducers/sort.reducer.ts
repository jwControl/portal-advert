import { createReducer, on } from '@ngrx/store';
import { AdvertActions } from '../actions/adverts.actions';

export interface SortState {
  sortingOption: string;
}

export const initialState: SortState = { sortingOption: 'newest' };

export const sortingReducer = createReducer(
  initialState,
  on(AdvertActions.sortAdverts, (state, { option }) => ({
    ...state,
    sortingOption: option,
  }))
);
