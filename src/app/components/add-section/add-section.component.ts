import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';
import { Store } from '@ngrx/store';
import { SectionsActions } from '../../state/sections.actions';
import { getRandomGradient } from '../../utils/randomTwGradient';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: []
})
export class AddSectionComponent implements OnInit {

  @Input()
  section: Section = null

  randomG = getRandomGradient({ intensity: "100" })

  constructor(private store: Store) { };


  ngOnInit() {
  }


  saveNewSection() {
    console.log(this.section)
    this.store.dispatch(SectionsActions.addSection({ section: this.section }))
    this.section = null
  }

}
