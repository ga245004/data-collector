import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';
import { Store } from '@ngrx/store';
import { SectionsActions } from '../../state/sections.actions';

@Component({
  selector: 'app-edit-section-fields',
  templateUrl: './edit-section-fields.component.html',
  styleUrls: []
})
export class EditSectionFieldsComponent implements OnInit {

  @Input()
  itemIndex: number = -1

  @Input()
  item: any = {}

  @Input()
  sectionIndex: number

  @Input()
  section: Section

  get isShown() {
    return this.section.showEditSectionFields && this.section.editSectionFieldsIndex == this.itemIndex
  }

  constructor(private store: Store) { }

  ngOnInit() {
  }


  editSectionFields(isShow: boolean) {
    console.log(this.itemIndex, this.item)
    this.section.showEditSectionFields = isShow;
    this.section.editSectionFieldsIndex = -1;

    this.store.dispatch(SectionsActions.updateSection({ sectionIndex: this.sectionIndex, props: { ...this.section } }))
  }
}
