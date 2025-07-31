import { createAction, props } from '@ngrx/store';
import { AdvertTypesActions } from './actions.types';

export const setNewPage = createAction(
  AdvertTypesActions.NEXT_PAGE,
  props<{ currentPage: number }>()
);

export * as PaginationActions from './paginationActions.actions';
