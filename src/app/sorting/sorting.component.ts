import { Component, inject } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { AdvertActions } from '../store/actions/adverts.actions';
import { selectSortingOption } from '../store/selectors/adverts.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SORT_OPTIONS_LIST } from '../models/sortOptions';

@Component({
  selector: 'sorting',
  imports: [MatFormField, MatSelectModule, AsyncPipe],
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.scss',
})
export class SortingComponent {
  store = inject(Store);
  selectedOption$: Observable<string> = this.store.select(selectSortingOption);
  sortingOptions =  SORT_OPTIONS_LIST;
  onSelectChange(value: string) {
    this.store.dispatch(
      AdvertActions.sortAdverts({ option: value })
    );
  }
}
