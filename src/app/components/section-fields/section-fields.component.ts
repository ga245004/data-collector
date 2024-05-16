import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';
import { Store } from '@ngrx/store';
import { SectionsActions } from '../../state/sections.actions';

@Component({
  selector: 'app-section-fields',
  templateUrl: './section-fields.component.html',
  styleUrls: []
})
export class SectionFieldsComponent implements OnInit {

  @Input()
  sectionIndex: number

  @Input()
  section: Section

  @Input()
  item: any

  @Input()
  itemIndex: number

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addSectionFields(isShow: boolean) {
    this.section.showAddSectionFields = isShow;
    this.section.addSectionFieldsIndex = this.itemIndex;
  }

  editSectionFields(isShow: boolean) {
    this.section.showEditSectionFields = isShow;
    this.section.editSectionFieldsIndex = this.itemIndex;
  }

  deleteSectionFields() {
    this.section.children.splice(this.itemIndex, 1)
    this.store.dispatch(SectionsActions.updateSection({ sectionIndex: this.sectionIndex, props: { ...this.section } }))
  }

}
