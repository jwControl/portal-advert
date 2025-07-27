import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { AnimalCategory } from '../../../models/animalCategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-category',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './search-category.component.html',
  styleUrl: './search-category.component.scss',
})
export class SearchCategoryComponent {
  categories = Object.values(AnimalCategory);
  selectedCategory: string = '';
  @Output() categorySelected = new EventEmitter<string>();

  onSelectionChange(event: MatSelectChange) {
    this.categorySelected.emit(this.selectedCategory); // Emit the updated value
  }
}
