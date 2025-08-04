import { TestBed } from '@angular/core/testing';
import { AnimalAdvert } from '../models/animalAdvert';
import { AnimalAdvertService } from './animalAdvert.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Action, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AdvertsEffects } from '../store/effects/advertEffects';
import { advertsReducer } from '../store/reducers/adverts.reducers';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideHttpClient } from '@angular/common/http';
import { AdvertActions } from '../store/actions/adverts.actions';
import { AnimalCategory } from '../models/animalCategory';
import { AdvertsStoreService } from './advertsStore.servcie';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SortOption } from '../models/sortOptions';

describe('AdvertsStoreService', () => {
  let actions$!: Observable<Action>;
  let effects: AdvertsEffects;
  let httpService: AnimalAdvertService;
  let advertStore: AdvertsStoreService;
  let store: MockStore;

  const mockAdverts: AnimalAdvert[] = [
    { id: 1, title: 'Dog', price: 100 },
    { id: 2, title: 'Cat', price: 80 },
  ] as AnimalAdvert[];
  const mockAdvert: AnimalAdvert = {
    id: 3,
    title: 'Dog',
    price: 300,
    category: AnimalCategory.CAT,
    longDescription: 'A friendly dog looking for a home.',
    photoUrl: 'https://example.com/dog.jpg',
    seqNo: 1,
    createdDate: new Date().toISOString(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({ adverts: advertsReducer }),
      ],
      providers: [
        AdvertsEffects,
        AnimalAdvertService,
        AdvertsStoreService,
        provideMockActions(() => actions$),
        provideHttpClient(),
        provideMockStore(),
      ],
    });

    httpService = TestBed.inject(AnimalAdvertService);
    effects = TestBed.inject(AdvertsEffects);
    advertStore = TestBed.inject(AdvertsStoreService);
    store = TestBed.inject(MockStore);
  });

  it('should dispatch loadAdverts, call API, and dispatch loadAdvertsSuccess', (done) => {
    //arrange
    const spy = spyOn(httpService, 'getAdvertsFromApi').and.returnValue(
      of(mockAdverts)
    );
    //act
    httpService.getAdvertsFromApi();
    expect(spy).toHaveBeenCalled();

    store.setState({
      adverts: {
        adverts: mockAdverts,
      },
      pagination: {
        currentPage: 1,
        numberOfElementPerPage: 2,
      },
      sorting: {
        sortingOption: SortOption.HIGHEST_PRICE,
      },
    });
    //assert
    advertStore.adverts$.subscribe((adverts) => {
      expect(adverts[0].id).toEqual(mockAdverts[0].id);
      done();
    });
  });
  it('should dispatch addAdvert, call API, and dispatch addAdvertsSuccess', (done) => {
    const spy = spyOn(httpService, 'createNewAdvert').and.returnValue(
      of(mockAdvert)
    );
    actions$ = of(AdvertActions.addAdvert({ advert: mockAdvert }));
    //act and chceck
    effects.addAdvert$.subscribe((action) => {
      console.log(action);
      expect(spy).toHaveBeenCalledWith(mockAdvert);
      expect(action).toEqual(
        AdvertActions.addAdvertsSuccess({ advert: mockAdvert })
      );
      done();
    });
  });
});
