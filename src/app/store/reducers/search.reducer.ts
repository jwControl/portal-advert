import { createReducer, on } from '@ngrx/store';
import { SearchActions } from '../actions/searchActions.actions';

export interface SearchState {
  selectedCategory: string;
  searchByQuery: string;
}
export const initialState: SearchState = {
  selectedCategory: '',
  searchByQuery: ''
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.setSearch, (state, { category, query }) => {
    console.log('Reducer hit with search:', category, query);
    return {
      ...state,
      selectedCategory: category,
      searchByQuery: query
    };
  })
);
