import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';
import { SectionsActions } from '../../state/sections.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: []
})
export class SectionComponent implements OnInit {


  @Input()
  sectionIndex: number

  @Input()
  section: Section

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addSectionFields(isShow: boolean) {
    this.section.showAddSectionFields = isShow;
    this.section.addSectionFieldsIndex = -1;
  }

  editSection(isShow: boolean) {
    this.section.showEditSection = isShow;
  }

  deleteSection() {
    console.log({ sectionIndex: this.sectionIndex })
    this.store.dispatch(SectionsActions.deleteSection({ sectionIndex: this.sectionIndex }))
  }

  toggleExpand(){
    this.section.expand = !this.section.expand; 
    this.section.maximize = !this.section.expand ? false : this.section.maximize
  }
}
