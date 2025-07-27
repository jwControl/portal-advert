import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AnimalAdvert } from '../models/animalAdvert';

@Injectable({
  providedIn: 'root',
})
export class AdvertsService {
  httpClient = inject(HttpClient);

  public getAdvertsFromApi(): Observable<AnimalAdvert[]> {
    return this.httpClient
      .get<{ adverts: AnimalAdvert[] }>('http://localhost:9000/api/adverts')
      .pipe(map((response) => response.adverts));
  }

  public getAdvertDetailsFromApi(advertId: number): Observable<AnimalAdvert> {
    return this.httpClient.get<AnimalAdvert>(
      `http://localhost:9000/api/adverts/${advertId}`
    );
  }
}
