import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchStoreService {
  private categorySubject = new BehaviorSubject<string>('');
  private querySubject = new BehaviorSubject<string>('');

  category$ = this.categorySubject.asObservable();
  query$ = this.querySubject.asObservable();

  setCategory(category: string): void {
    this.categorySubject.next(category);
  }

  setQuery(query: string): void {
    this.querySubject.next(query);
  }

  getCategory(): string {
    return this.categorySubject.getValue();
  }

  getQuery(): string {
    return this.querySubject.getValue();
  }
}
