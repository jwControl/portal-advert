import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user';
import { LoginActions } from '../actions/login.action';


export interface LoginState {
  user: User | null;
  error: any;
}

export const initialState: LoginState = {
  user: null,
  error: undefined,
};

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.loginOnSuccess, (state, { user }) => ({
    ...state,
    user: user,
  })),
  on(LoginActions.loginOnFailure, (state, { error }) => ({
    ...state,
    erorr: error,
  }))
);
