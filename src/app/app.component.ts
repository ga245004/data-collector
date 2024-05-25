import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.service';
import { Store } from '@ngrx/store';
import { SectionsActions } from './state/sections.actions';
import { Section } from './models/section.model';
import { getRandomGradient } from './utils/randomTwGradient';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  tabs = [
    "Home",
    "Feature",
    "Pricing",
    "Contact",
  ]

  selectedTab = "Home"

  constructor(private router: Router, private store: Store) { };

  gotoHome() {
    this.router.navigateByUrl('/');
  }


}
