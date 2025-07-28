import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { NavigationHeaderComponent } from './navigation/navigation-header.component';
import { AdvertsStoreService } from './services/store/adverts.store.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent, NavigationHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  storeAdverts = inject(AdvertsStoreService);
  ngOnInit(): void {
    this.storeAdverts.loadAdverts().subscribe();
  }
}
