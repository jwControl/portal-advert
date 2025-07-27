import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() initialQuery: string = ''; // Accept initial value from parent
  @Output() searchChanged = new EventEmitter<string>();

  searchByQuery = new FormControl('');
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    // Set the initial value for the search input
    this.searchByQuery.setValue(this.initialQuery);

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
