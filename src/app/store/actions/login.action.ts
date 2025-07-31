import { createAction, props } from '@ngrx/store';

import { User } from '../../models/user';
import { LoginTypesActions } from './loginAction.types';

export const login = createAction(
  LoginTypesActions.LOGIN,
  props<{ userName: string, password: string }>()
);
export const loginOnSuccess = createAction(
  LoginTypesActions.LOGIN_SUCCESS,
  props<{ user: User }>()
);
export const loginOnFailure = createAction(
  LoginTypesActions.LOGIN_FAILURE,
  props<{ error: Error }>()
);

export * as LoginActions from "./login.action"
