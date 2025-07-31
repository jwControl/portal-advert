import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaginationState } from '../reducers/pagination.reducer';
import { AdvertsState } from '../reducers/adverts.reducers';

export const selectPaginationState =
  createFeatureSelector<PaginationState>('pagination');
export const selectAdvertsState =
  createFeatureSelector<AdvertsState>('adverts');

export const selectNumberOfTotalPages = createSelector(
  selectAdvertsState,
  selectPaginationState,
  (advertsState: AdvertsState, paginationState: PaginationState) =>
    Math.ceil(
      advertsState.adverts.length / paginationState.numberOfElementPerPage
    )
);
export const selectCurrentPage = createSelector(
  selectPaginationState,
  (paginationState: PaginationState) => paginationState.currentPage
);
