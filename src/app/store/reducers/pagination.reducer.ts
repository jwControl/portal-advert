import { createReducer, on } from '@ngrx/store';
import { PaginationActions } from '../actions/paginationActions.actions';

export interface PaginationState {
  currentPage: number;
  numberOfElementPerPage: number;
}

export const initialState: PaginationState = {
  currentPage: 1,
  numberOfElementPerPage: 5
};

export const paginationReducer = createReducer(
  initialState,
  on(PaginationActions.setNewPage, (state, { currentPage }) => ({
    ...state,
    currentPage: currentPage,
  })),
);
