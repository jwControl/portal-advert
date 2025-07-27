import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { AnimalAdvert } from '../../models/animalAdvert';

@Component({
  selector: 'advert-card',
  imports: [MatCardModule, MatButtonModule, CurrencyPipe, DatePipe],
  templateUrl: './advert-card.component.html',
  styleUrl: './advert-card.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AdvertCardComponent {
  @Input() advert!: AnimalAdvert;

  constructor(private router: Router) {}

  showCardDetails(advertId: number) {
    this.router.navigate(['/advert-details'], {
      queryParams: { id: advertId },
    });
  }
}
