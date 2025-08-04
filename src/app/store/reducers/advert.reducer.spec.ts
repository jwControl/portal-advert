import { AnimalAdvert } from '../../models/animalAdvert';
import { AdvertActions } from '../actions/adverts.actions';
import { advertsReducer, initialState } from './adverts.reducers';

describe('AdvertsReducer', () => {
  it('returns initial state', () => {
    const action = { type: 'Unknows' };
    const state = advertsReducer(initialState, action);
    const newState = { error: null, adverts: [] };
    expect(state).toEqual(newState);
  });
  it('returns adverts ', () => {
    const mockAdverts: AnimalAdvert[] = [
      { id: 1, title: 'Dog', price: 100 },
      { id: 2, title: 'Cat', price: 80 },
    ] as AnimalAdvert[];
    const action = AdvertActions.loadAdvertsSuccess({ adverts: mockAdverts });
    const state = advertsReducer(initialState, action);
    const newState = { error: null, adverts: mockAdverts };
    expect(state.adverts[0].id).toEqual(newState.adverts[0].id);
  });

  it('returns failure ', () => {
    const error = { message: 'Failure' };
    const action = AdvertActions.loadAdvertsFailure({ error });
    const state = advertsReducer(initialState, action);
    const newState = { error: error, adverts: [] };
    expect(state.error).toEqual(newState.error);
  });
});
