import { createReducer, on } from "@ngrx/store";
import { AnimalAdvert } from "../../models/animalAdvert";
import { AdvertActions } from "../actions/actions.types";

export interface AdvertsState {
  adverts: AnimalAdvert[];
  loading: boolean;
  error: any;
}

export const initialState: AdvertsState = {
  adverts: [],
  loading: false,
  error: null
};

export const advertsReducer = createReducer(
  initialState,
  on(AdvertActions.loadAdverts, state => ({ ...state, loading: true })),
  on(AdvertActions.loadAdvertsSuccess, (state, { adverts }) => ({
    ...state,
    loading: false,
    adverts
  })),
  on(AdvertActions.loadAdvertsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);