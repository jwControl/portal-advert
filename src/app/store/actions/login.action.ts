import { createAction, props } from '@ngrx/store';

import { UserResponse } from '../../models/user';
import { LoginTypesActions } from './loginAction.types';

export const login = createAction(
  LoginTypesActions.LOGIN,
  props<{ userName: string; password: string }>()
);
export const loginOnSuccess = createAction(
  LoginTypesActions.LOGIN_SUCCESS,
  props<{ user: UserResponse }>()
);
export const loginOnFailure = createAction(
  LoginTypesActions.LOGIN_FAILURE,
  props<{ error: {message: string} }>()
);
export const logout = createAction(
  LoginTypesActions.LOGOUT
);

export * as LoginActions from './login.action';
