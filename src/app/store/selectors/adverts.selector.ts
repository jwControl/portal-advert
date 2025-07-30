import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdvertsState } from '../reducers/adverts.reducers';
import { sortByCreatedDate } from '../../services/sortFunction';
import { SearchState } from '../reducers/search.reducer';

export const selectAdvertsState =
  createFeatureSelector<AdvertsState>('adverts');
export const selectSearchState = createFeatureSelector<SearchState>('search');

export const selectAllAdverts = createSelector(
  selectAdvertsState,
  selectSearchState,
  (advertsState: AdvertsState, searchState: SearchState) => {
    // let filteredAdverts = advertsState.adverts;

    // if (searchState?.selectedCategory) {
    //   filteredAdverts = filteredAdverts.filter(
    //     (ad) => ad.category === searchState.selectedCategory
    //   );
    // }

    // if (searchState?.searchByQuery) {
    //   filteredAdverts = filteredAdverts.filter((ad) =>
    //     ad.title.toLowerCase().includes(searchState.searchByQuery.toLowerCase())
    //   );
    // }

    return [...advertsState.adverts].sort(sortByCreatedDate);
  }
);

export const selectAdvertById = (id: number) =>
  createSelector(selectAdvertsState, (state: AdvertsState) =>
    state.adverts.find((advert) => advert.id === id)
  );
