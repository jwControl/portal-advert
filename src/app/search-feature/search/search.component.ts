import { Component, inject } from '@angular/core';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { SearchQueryComponent } from './search-query/search-query.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimalAdvertService } from '../../services/animalAdvert.service';

@Component({
  selector: 'search',
  imports: [SearchCategoryComponent, SearchQueryComponent, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  advertService = inject(AnimalAdvertService);
  selectedCategory: string = '';
  searchQuery: string = '';

  public onCategorySelected(selectedCategory: string) {
    this.selectedCategory = selectedCategory;
    this.searchAdverts();
  }

  public onQuerySelected(query: string) {
    this.searchQuery = query;
    this.searchAdverts();
  }

  private searchAdverts() {
    this.advertService
      .searchAdvertByQuery(this.searchQuery, this.selectedCategory)
      .subscribe(console.log);
  }
}
