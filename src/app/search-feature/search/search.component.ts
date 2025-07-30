import { Component, inject, OnInit } from '@angular/core';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { SearchQueryComponent } from './search-query/search-query.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvertsStoreService } from '../../services/store/adverts.store.service';
import { SearchStoreService } from '../../services/store/search.store.service';
import { Store } from '@ngrx/store';
import { setSearch } from '../../store/actions/searchActions.actions';

@Component({
  selector: 'search',
  imports: [SearchCategoryComponent, SearchQueryComponent, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  advertsStore = inject(AdvertsStoreService);
  searchStore = inject(SearchStoreService);
  store = inject(Store);

  selectedCategory: string = '';
  searchQuery: string = '';

  ngOnInit(): void {
    // Restore search terms from the store
    this.selectedCategory = this.searchStore.getCategory();
    this.searchQuery = this.searchStore.getQuery();
  }

  public onCategorySelected(selectedCategory: string) {
    this.selectedCategory = selectedCategory;
    this.searchStore.setCategory(selectedCategory); // Save category to the store
    this.searchAdverts();
  }

  public onQuerySelected(query: string) {
    this.searchQuery = query;
    this.searchStore.setQuery(query); // Save query to the store
    this.searchAdverts();
  }

  private searchAdverts() {
    this.store.dispatch(
      setSearch({ category: this.selectedCategory, query: this.searchQuery })
    );
    this.store.select((state) => state).subscribe(console.log);
  }
}
