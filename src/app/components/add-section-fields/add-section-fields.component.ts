import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';
import { Store } from '@ngrx/store';
import { SectionsActions } from '../../state/sections.actions';

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

  constructor(private store: Store) { }

  ngOnInit() {
  }


  hideAddSectionFields(isShow: boolean) {
    this.section.showAddSectionFields = isShow;
    this.section.addSectionFieldsIndex = -1;

    this.store.dispatch(SectionsActions.updateSection({ sectionIndex: this.sectionIndex, props: { ...this.section } }))
  }

  addFields() {
    if (this.section.addSectionFieldsIndex >= 0) {
      this.section.children.splice(this.section.addSectionFieldsIndex, 0, this.item)
    }
    else {
      this.section.children.push(this.item)
    }

    this.hideAddSectionFields(false)
    this.item = {}
  }

}
