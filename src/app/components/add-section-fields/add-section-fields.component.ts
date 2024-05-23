import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';
import { Store } from '@ngrx/store';
import { SectionsActions } from '../../state/sections.actions';
import { getRandomGradient } from '../../utils/randomTwGradient';

@Component({
  selector: 'app-add-section-fields',
  templateUrl: './add-section-fields.component.html',
  styleUrls: []
})
export class AddSectionFieldsComponent implements OnInit {

  item: any = {}

  @Input()
  sectionIndex: number

  @Input()
  section: Section

  randomG = getRandomGradient({ intensity: "100" })

  constructor(private store: Store) { }

  ngOnInit() {
  }


  hideAddSectionFields(isShow: boolean) {
    this.section.showAddSectionFields = isShow;
    this.section.addSectionFieldsIndex = -1;
    this.item = {}
    this.randomG = getRandomGradient({ intensity: "100" })
  }

  addFields() {
    if (this.section.addSectionFieldsIndex >= 0) {
      this.section.children.splice(this.section.addSectionFieldsIndex, 0, this.item)
    }
    else {
      this.section.children.push(this.item)
    }
    this.store.dispatch(SectionsActions.updateSection({ sectionIndex: this.sectionIndex, props: { ...this.section } }))
    this.hideAddSectionFields(false)
    this.item = {}
    this.randomG = getRandomGradient({ intensity: "100" })
  }

}
