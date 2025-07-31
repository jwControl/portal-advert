import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdvertsState } from '../reducers/adverts.reducers';
import {
  sortByCreatedDate,
  sortByHighestPrice,
  sortByLowestPrice,
} from '../../services/sortFunction';
import { SearchState } from '../reducers/search.reducer';
import { PaginationState } from '../reducers/pagination.reducer';
import { SortState } from '../reducers/sort.reducer';
import { SortOption } from '../../models/sortOptions';

export const selectAdvertsState =
  createFeatureSelector<AdvertsState>('adverts');
export const selectSearchState = createFeatureSelector<SearchState>('search');
export const selectPaginationState =
  createFeatureSelector<PaginationState>('pagination');
export const selectSortState = createFeatureSelector<SortState>('sorting');

export const selectAllAdverts = createSelector(
  selectAdvertsState,
  selectPaginationState,
  selectSortState,
  (
    advertsState: AdvertsState,
    paginationState: PaginationState,
    sortState: SortState
  ) => {
    let adverts = [...advertsState.adverts];

    // Apply sorting based on sortingOption
    switch (sortState.sortingOption) {
      case SortOption.NEWEST:
        adverts.sort(sortByCreatedDate);
        break;
      case SortOption.LOWEST_PRICE:
        adverts.sort(sortByLowestPrice);
        break;
      case SortOption.HIGHEST_PRICE:
        adverts.sort(sortByHighestPrice);
        break;
      default:
        break;
    }

    // Pagination
    const startIndex =
      (paginationState.currentPage - 1) *
      paginationState.numberOfElementPerPage;
    const endIndex = startIndex + paginationState.numberOfElementPerPage;

    return [...adverts].slice(startIndex, endIndex);
  }
);

export const selectAdvertById = (id: number) =>
  createSelector(selectAdvertsState, (state: AdvertsState) =>
    state.adverts.find((advert) => advert.id === id)
  );

export const selectSortingOption = createSelector(
  selectSortState,
  (state: SortState) => state.sortingOption
);
