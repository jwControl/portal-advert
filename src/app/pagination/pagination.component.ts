import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'pagination',
  imports: [MatButtonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  currentPage: number = 1;
  totalPages: number = 10;

  previousPage(): void {
    // Logic for navigating to the previous page
  }

  nextPage(): void {
    // Logic for navigating to the next page
  }
}
