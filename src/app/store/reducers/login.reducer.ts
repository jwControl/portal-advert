import { createReducer, on } from '@ngrx/store';
import { UserResponse } from '../../models/user';
import { LoginActions } from '../actions/login.action';

export interface LoginState {
  user: UserResponse | null;
  error: any;
}

export const initialState: LoginState = {
  user: null,
  error: null,
};

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.loginOnSuccess, (state, { user }) => ({
    ...state,
    user: user,
  })),
  on(LoginActions.loginOnFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  }),
  on(LoginActions.logout, (state) => ({ ...state, user: null }))
);
