import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LoginState } from '../reducers/login.reducer';

export const selectLoginState = createFeatureSelector<LoginState>('auth');

export const selectIsLoggedIn = createSelector(selectLoginState, (state) =>
  state.user ? true : false
);

export const selectLoginError = createSelector(
  selectLoginState,
  (state) => state?.error ?? null
);
