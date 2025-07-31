import { AdvertsState } from './reducers/adverts.reducers';
import { PaginationState } from './reducers/pagination.reducer';
import { SearchState } from './reducers/search.reducer';
import { SortState } from './reducers/sort.reducer';

export interface AppState {
  adverts: AdvertsState;
  search: SearchState;
  pagination: PaginationState;
  sorting: SortState;
}
