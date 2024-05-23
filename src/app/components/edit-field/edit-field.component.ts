import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';
import { SectionsActions } from '../../state/sections.actions';
import { Store } from '@ngrx/store';
import { getRandomGradient } from '../../utils/randomTwGradient';

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

  randomG = getRandomGradient({ intensity: "100" })

  constructor(private store: Store) { }

  ngOnInit() {
  }

  saveEditField() {
    this.item[this.field + 'edit'] = false;
    console.log({ sectionIndex: this.sectionIndex, props: { ...this.section } })
    this.store.dispatch(SectionsActions.updateSection({ sectionIndex: this.sectionIndex, props: { ...this.section } }))
  }

  
  hideEditField() {
    this.item[this.field + 'edit'] = false;
    console.log({ sectionIndex: this.sectionIndex, props: { ...this.section } })
  }
}


