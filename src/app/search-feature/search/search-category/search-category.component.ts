import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() selectedCategory: string = ''; // Accept initial value from parent
  @Output() categorySelected = new EventEmitter<string>();

  categories = Object.values(AnimalCategory);

  onSelectionChange(event: MatSelectChange) {
    this.categorySelected.emit(event.value); // Emit the updated value
  }
}
