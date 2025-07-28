import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-header',
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './navigation-header.component.html',
  styleUrl: './navigation-header.component.scss',
})
export class NavigationHeaderComponent {
  constructor(private router: Router) {}

  navigateToAddAdvert() {
    this.router.navigate(['/add-advert']); 
  }
}
