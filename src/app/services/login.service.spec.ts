import { TestBed } from '@angular/core/testing';
import { Action, Store, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { LoginService } from './login.service';
import { LoginEffect } from '../store/effects/loginEffects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { loginReducer } from '../store/reducers/login.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideMockActions } from '@ngrx/effects/testing';
import { User, UserResponse } from '../models/user';
import { LoginActions } from '../store/actions/login.action';
import { selectIsLoggedIn } from '../store/selectors/login.selector'; // Import the selector
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('LoginService', () => {
  let loginService: LoginService;
  let actions$!: Observable<Action>;
  let loginEffect: LoginEffect;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({ login: loginReducer }),
      ],
      providers: [
        LoginEffect,
        LoginService,
        provideHttpClient,
        provideMockActions(() => actions$),
        provideMockStore(),
      ],
    });

    loginService = TestBed.inject(LoginService);
    loginEffect = TestBed.inject(LoginEffect);
    store = TestBed.inject(MockStore);
  });

  it('dispatch login on success, call api and save user in the store', (done) => {
    const mockUser: User = {
      username: 'testuser@example.com',
      password: 'tralalala',
    };

    const mockUserResponse: UserResponse = {
      email: 'testuser@example.com',
    };

    const spy = spyOn(loginService, 'login').and.returnValue(
      of(mockUserResponse)
    );

    actions$ = of(
      LoginActions.login({
        userName: mockUser.username,
        password: mockUser.password,
      })
    );

    loginEffect.loginEffect$.subscribe((action) => {
      expect(spy).toHaveBeenCalledWith(mockUser.username, mockUser.password);
      expect(action).toEqual(
        LoginActions.loginOnSuccess({ user: mockUserResponse })
      );
      done(); // Ensure the test completes
    });
  });

  it('dispatch logout action and check if user exists in the store', () => {
    store.setState({ auth: { user: null } });

    store.select(selectIsLoggedIn).subscribe((isLoggedIn) => {
      expect(isLoggedIn).toBeFalse();
    });
  });
});
