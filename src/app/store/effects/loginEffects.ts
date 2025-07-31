import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoginService } from '../../services/login.service';
import { LoginActions } from '../actions/login.action';
import { of } from 'rxjs';

export class LoginEffect {
  actions = inject(Actions);
  loginService = inject(LoginService);

  loginEffect$ = createEffect(() =>
    this.actions.pipe(
      ofType(LoginActions.login),
      switchMap(({ userName, password }) =>
        this.loginService.login(userName, password).pipe(
          map((user) => LoginActions.loginOnSuccess({ user })),
          catchError((error) => of(LoginActions.loginOnFailure({ error })))
        )
      )
    )
  );
}
