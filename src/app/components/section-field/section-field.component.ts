import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';
import { CopyText } from '../../utils/copyText';

@Component({
  selector: 'app-section-field',
  templateUrl: './section-field.component.html',
  styleUrls: []
})
export class SectionFieldComponent implements OnInit {

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

  isCopiedSuccess = false

  constructor() { }

  ngOnInit() {
  }


  copySelected($event, text: string) {
    $event.stopPropagation();
    $event.preventDefault();
    this.isCopiedSuccess = false
    CopyText(text).then(
      () => {
        this.isCopiedSuccess = true
        setTimeout(() => this.hideIsCopiedSuccess(), 1000)
      }
    )
  }

  hideIsCopiedSuccess() {
    this.isCopiedSuccess = false
  }

}
