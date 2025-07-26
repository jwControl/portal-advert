import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Advert } from '../models/advert';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdvertsService {
  httpClient = inject(HttpClient);

  public getAdvertsFromApi(): Observable<Advert[]> {
    return this.httpClient
      .get<{ adverts: Advert[] }>('http://localhost:9000/api/adverts')
      .pipe(map((response) => response.adverts));
  }

  public getAdvertDetailsFromApi(advertId: number): Observable<Advert> {
    return this.httpClient.get<Advert>(
      `http://localhost:9000/api/adverts/${advertId}`
    );
  }
}
