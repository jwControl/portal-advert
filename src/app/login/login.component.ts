import { Component, inject } from '@angular/core';
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

@Component({
  selector: 'login',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  store = inject(Store);

  onSubmit() {
    console.log('Username:', this.profileForm.value.username);
    console.log('Password:', this.profileForm.value.password);
    if (this.profileForm.value.username && this.profileForm.value.password) {
      this.store.dispatch(
        LoginActions.login({
          userName: this.profileForm.value.username,
          password: this.profileForm.value.password,
        })
      );
    }
  }
}
