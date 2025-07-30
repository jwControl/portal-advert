import { AdvertsState } from './reducers/adverts.reducers';
import { SearchState } from './reducers/search.reducer';

export interface AppState {
  adverts: AdvertsState;
  search: SearchState;
}
