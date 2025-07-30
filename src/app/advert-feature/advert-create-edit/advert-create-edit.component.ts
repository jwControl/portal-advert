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
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import { addAdvert, updateAdvert } from '../../store/actions/adverts.actions';
import { selectAdvertById } from '../../store/selectors/adverts.selector';

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
  store = inject(Store<AppState>);

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
      this.store.select(selectAdvertById(this.advertId)).subscribe((adv) => {
        if (adv) {
          this.advertForm.patchValue(adv);
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
        createdDate: new Date().toISOString(), // Add current date as a string
      };
      debugger;
      this.isEditMode
        ? this.store.dispatch(
            updateAdvert({ advertId: this.advertId, changes: advertToSave })
          )
        : this.store.dispatch(addAdvert({ advert: advertToSave }));
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
