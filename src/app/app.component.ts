import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { NavigationHeaderComponent } from './navigation/navigation-header.component';
import { AdvertsStoreService } from './services/store/adverts.store.service';
import { Store } from '@ngrx/store';
import { AppState } from './store/state';
import { loadAdverts } from './store/actions/adverts.actions';
import { login } from './store/actions/login.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent, NavigationHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  storeAdverts = inject(AdvertsStoreService);
  store = inject<Store<AppState>>(Store);
  ngOnInit(): void {
    const userName = localStorage.getItem('userName');
    const password = localStorage.getItem('password');

    if (userName && password) {
      this.store.dispatch(login({ userName, password }));
    }
    // this.storeAdverts.loadAdverts().subscribe();
    this.store.dispatch(loadAdverts());
  }
}
