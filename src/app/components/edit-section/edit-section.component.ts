import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';
import { Store } from '@ngrx/store';
import { SectionsActions } from '../../state/sections.actions';
import { getRandomGradient } from '../../utils/randomTwGradient';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: []
})
export class EditSectionComponent implements OnInit {


  @Input()
  sectionIndex: number

  @Input()
  section: Section

  randomG = getRandomGradient({ intensity: "100" })

  constructor(private store: Store) { }

  ngOnInit() {
  }

  editSection(isShow: boolean) {
    this.section.showEditSection = isShow;
    if (!isShow) {
      console.log(this.section)
      this.store.dispatch(SectionsActions.updateSection({ sectionIndex: this.sectionIndex, props: { ...this.section } }))
    }
  }

  hideEditSection(isShow: boolean) {
    this.section.showEditSection = isShow;
  }

  updateLabel(section: Section, label: string) {
    section.label = label
  }

  addField(section: Section) {
    let newFieldId = `field-${window.crypto.randomUUID().split("-")[1]}`
    section.fields.push(newFieldId)
  }

  removeField(section: Section, i) {
    section.fields.splice(i, 1)
  }

  editField(section: Section, field, event) {
    const childLabels = { ...section.childLabels };
    childLabels[field] = event
  }

}
