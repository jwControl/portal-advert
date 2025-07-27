import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalAdvertService } from '../../services/animalAdvert.service';
import { Observable } from 'rxjs';
import { Advert } from '../../models/advert';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AnimalAdvert } from '../../models/animalAdvert';

@Component({
  selector: 'advert-details',
  imports: [AsyncPipe, MatButtonModule, MatIconModule, CurrencyPipe],
  templateUrl: './advert-details.component.html',
  styleUrl: './advert-details.component.scss',
})
export class AdvertDetailsComponent implements OnInit {
  advertId!: number;
  advertDetails$!: Observable<AnimalAdvert>;
  constructor(
    private route: ActivatedRoute,
    private advertsService: AnimalAdvertService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.advertId = Number(this.route.snapshot.queryParamMap.get('id'));
    this.advertDetails$ = this.advertsService.getAdvertDetailsFromApi(
      this.advertId
    );
  }

  goBack(): void {
    this.location.back();
  }
}
