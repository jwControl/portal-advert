import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsLoggedIn } from '../store/selectors/login.selector';
import { AsyncPipe } from '@angular/common';
import { LoginActions } from '../store/actions/login.action';

@Component({
  selector: 'navigation-header',
  imports: [MatToolbarModule, MatButtonModule, AsyncPipe],
  templateUrl: './navigation-header.component.html',
  styleUrl: './navigation-header.component.scss',
})
export class NavigationHeaderComponent {
  constructor(private router: Router) {}

  store = inject(Store);
  isLoggedIn$: Observable<boolean> = this.store.select(selectIsLoggedIn);
  navigateToAddAdvert() {
    this.router.navigate(['/add-advert']);
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  logoutUser() {
    this.store.dispatch(LoginActions.logout());
  }
}
