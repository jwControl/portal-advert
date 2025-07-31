import { ActionReducerMap } from '@ngrx/store';
import { advertsReducer } from './adverts.reducers';

import { AppState } from '../state';
import { searchReducer } from './search.reducer';
import { paginationReducer } from './pagination.reducer';
import { sortingReducer } from './sort.reducer';
import { loginReducer } from './login.reducer';

export const reducers: ActionReducerMap<AppState> = {
  adverts: advertsReducer,
  search: searchReducer,
  pagination: paginationReducer, 
  sorting: sortingReducer,
  auth: loginReducer
};

// export const metaReducers: MetaReducer<AppState>[] =
//     !environment.production ? [logger] : [];
