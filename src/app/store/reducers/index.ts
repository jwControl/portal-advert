import { ActionReducerMap } from '@ngrx/store';
import { advertsReducer } from './adverts.reducers';

import { AppState } from '../state';
import { searchReducer } from './search.reducer';

export const reducers: ActionReducerMap<AppState> = {
  adverts: advertsReducer,
  search: searchReducer,
};

// export const metaReducers: MetaReducer<AppState>[] =
//     !environment.production ? [logger] : [];
