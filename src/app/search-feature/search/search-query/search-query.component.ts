import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Subject,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'search-query',
  imports: [MatInputModule, ReactiveFormsModule],
  templateUrl: './search-query.component.html',
  styleUrl: './search-query.component.scss',
})
export class SearchQueryComponent implements OnInit {
  searchByQuery = new FormControl('');
  @Output() searchChanged = new EventEmitter<string>();
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.searchByQuery.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((value) => value !== null && value !== undefined),
        takeUntil(this.destroy$)
      )
      .subscribe((value) => this.searchChanged.emit(value));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
