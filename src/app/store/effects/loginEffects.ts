import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { LoginService } from '../../services/login.service';
import { LoginActions } from '../actions/login.action';
import { of } from 'rxjs';
import { Router } from '@angular/router';

export class LoginEffect {
  actions = inject(Actions);
  loginService = inject(LoginService);
  router = inject(Router);

  loginEffect$ = createEffect(() =>
    this.actions.pipe(
      ofType(LoginActions.login),
      tap(({ userName, password }) => {
        localStorage.setItem('userName', userName);
        localStorage.setItem('password', password);
      }),
      switchMap(({ userName, password }) =>
        this.loginService.login(userName, password).pipe(
          map((user) => LoginActions.loginOnSuccess({ user })),
          catchError(() => {
            let error = {
              message: 'Something went wrong. Login was not possible',
            };
            return of(LoginActions.loginOnFailure({ error }));
          })
        )
      )
    )
  );

  loginSuccessRedirect$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(LoginActions.loginOnSuccess),
        tap(() => this.router.navigateByUrl('/home'))
      ),
    { dispatch: false }
  );
  
  logout$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(LoginActions.logout),
        tap(() => {
          localStorage.removeItem('userName');
          localStorage.removeItem('password');
        })
      ),
    { dispatch: false }
  );
}
