import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimalCategory } from '../../models/animalCategory';
import { AdvertsStoreService } from '../../services/store/adverts.store.service';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'advert-create-edit',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './advert-create-edit.component.html',
  styleUrl: './advert-create-edit.component.scss',
})
export class AdvertCreateEditComponent implements OnInit {
  advertForm: FormGroup;
  isEditMode: boolean = false;
  categories = Object.values(AnimalCategory);
  formBuilder = inject(FormBuilder);
  advertStore = inject(AdvertsStoreService);
  router = inject(Router);
  location = inject(Location);
  route = inject(ActivatedRoute);
  advertId: number;

  ngOnInit(): void {
    this.advertForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      longDescription: ['', [Validators.required, Validators.maxLength(3000)]],
      photoUrl: ['', [Validators.pattern('https?://.+')]],
      category: ['', Validators.required],
      price: [
        0,
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('^[0-9]+$'), // Ensure the value is an integer
        ],
      ],
    });
    this.advertId = Number(this.route.snapshot.queryParamMap.get('id'));
    if (this.advertId) {
      this.isEditMode = true;
      this.advertStore.adverts$.subscribe((adverts) => {
        const advert = adverts.find((x) => x.id === this.advertId);
        if (advert) {
          this.advertForm.patchValue(advert);
        }
      });
    } else {
      this.isEditMode = false;
      this.advertForm.reset();
    }
  }

  saveAdvert() {
    if (this.advertForm.valid) {
      const advertToSave = {
        ...this.advertForm.value,
        createdDate: new Date().toISOString().split('T')[0], // Add current date as a string
      };
      this.isEditMode
        ? this.advertStore.updateAdvert(this.advertId, advertToSave)
        : this.advertStore.addAdvert(advertToSave);

      // Redirect to the main page after saving
      this.router.navigate(['/home']);
    } else {
      console.log('Form is invalid');
    }
  }

  goBack(): void {
    this.location.back();
  }
}
