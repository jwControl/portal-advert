import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { NavigationHeaderComponent } from './navigation/navigation-header.component';

import { login } from './store/actions/login.action';
import { AdvertsStoreService } from './services/advertsStore.servcie';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent, NavigationHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  storeAdverts = inject(AdvertsStoreService);
  store = inject(Store);
  ngOnInit(): void {
    const userName = localStorage.getItem('userName');
    const password = localStorage.getItem('password');

    if (userName && password) {
      this.store.dispatch(login({ userName, password }));
    }
    // this.storeAdverts.loadAdverts().subscribe();
    this.storeAdverts.dispatchLoadAdverts();
  }
}
