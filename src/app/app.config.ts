import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { routes } from './app.routes';
import { LoadingInterceptor } from './services/loading.interceptor';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { provideEffects } from '@ngrx/effects';
import { AdvertsEffects } from './store/effects/advertEffects';

import { reducers } from './store/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    provideRouter(routes, withRouterConfig({ onSameUrlNavigation: 'reload' })),
    provideStore(reducers, 
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    provideStoreDevtools({
      name: 'Adverts store',
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    provideEffects([AdvertsEffects]),
  ],
};

