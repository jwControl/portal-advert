import { Component } from '@angular/core';
import { AdvertListComponent } from '../advert-feature/advert-list/advert-list.component';
import { SearchComponent } from '../search-feature/search/search.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SortingComponent } from "../sorting/sorting.component";

@Component({
  selector: 'home',
  imports: [AdvertListComponent, SearchComponent, PaginationComponent, SortingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
