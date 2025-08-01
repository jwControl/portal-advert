import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { LoginActions } from '../store/actions/login.action';
import { filter, Observable, tap } from 'rxjs';
import {
  selectLoginError,
} from '../store/selectors/login.selector';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    AsyncPipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent  {
  store = inject(Store);
  router = inject(Router);

  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  readonly error$: Observable<any> = this.store
    .select(selectLoginError)
    .pipe(filter((error) => error !== null));



  onSubmit(): void {
    const { username, password } = this.profileForm.value;
    if (username && password) {
      this.dispatchLogin(username, password);
    }
  }

  private dispatchLogin(username: string, password: string): void {
    this.store.dispatch(
      LoginActions.login({ userName: username, password: password })
    );
  }
}
