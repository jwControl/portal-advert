import { Component, Output, EventEmitter, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { PaginationActions } from '../store/actions/paginationActions.actions';

import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {
  selectCurrentPage,
  selectNumberOfTotalPages,
} from '../store/selectors/pagination.selector';

@Component({
  selector: 'pagination',
  imports: [MatButtonModule, AsyncPipe],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  store = inject(Store);
  totalPages$: Observable<number> = this.store.select(selectNumberOfTotalPages);
  currentPage$: Observable<number> = this.store.select(selectCurrentPage);
  previousPage(currPage: number): void {
    currPage--;
    this.store.dispatch(
      PaginationActions.setNewPage({ currentPage: currPage })
    );
  }

  nextPage(currPage: number): void {
    currPage++;
    this.store.dispatch(
      PaginationActions.setNewPage({ currentPage: currPage })
    );
  }
}
