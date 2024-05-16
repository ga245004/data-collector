import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.service';
import { Store } from '@ngrx/store';
import { SectionsActions } from './state/sections.actions';
import { Section } from './models/section.model';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router, private store: Store) { };

  newSection: Section = null

  gotoHome() {
    this.router.navigateByUrl('/');
  }


  emptySection() {
    this.newSection = {
      label: '', columns: 2, children: [], childLabels: {}, fields: []
    }
  }

}
