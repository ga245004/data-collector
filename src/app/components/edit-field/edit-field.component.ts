import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';
import { SectionsActions } from '../../state/sections.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: []
})
export class EditFieldComponent implements OnInit {

  @Input()
  sectionIndex: number

  @Input()
  section: Section

  @Input()
  item: any

  @Input()
  itemIndex: number

  @Input()
  field: string

  constructor(private store: Store) { }

  ngOnInit() {
  }

  hideEditField() {
    this.item[this.field + 'edit'] = false
    this.store.dispatch(SectionsActions.updateSection({ sectionIndex: this.sectionIndex, props: { ...this.section } }))
  }
}


