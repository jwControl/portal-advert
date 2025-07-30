import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpContext } from '@angular/common/http';
import { AnimalAdvert } from '../models/animalAdvert';
import { SkipLoading } from './skipLoading';

@Injectable({
  providedIn: 'root',
})
export class AnimalAdvertService {
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

  public updateAdvert(
    advertId: number,
    updatedAdvert: Partial<AnimalAdvert>
  ): Observable<AnimalAdvert> {
    return this.httpClient.put<AnimalAdvert>(
      `http://localhost:9000/api/adverts/${advertId}`,
      updatedAdvert,
      {
        context: new HttpContext().set(SkipLoading, true),
      }
    );
  }

  public searchAdvertByQuery(
    query?: string,
    category?: string
  ): Observable<AnimalAdvert[]> {
    const params: any = {};

    if (query) {
      params.query = query;
    }

    if (category) {
      params.category = category;
    }

    return this.httpClient
      .get<{ adverts: AnimalAdvert[] }>(
        'http://localhost:9000/api/search-adverts',
        { params }
      )
      .pipe(map((response) => response.adverts));
  }

  public createNewAdvert(advert: AnimalAdvert): Observable<AnimalAdvert> {
    return this.httpClient.post<AnimalAdvert>(
      'http://localhost:9000/api/adverts',
      advert
    );
  }
}
