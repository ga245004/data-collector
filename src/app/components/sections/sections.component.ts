import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionsComponent implements OnInit {

  @Input()
  sections: Section[]

  constructor() { }

  ngOnInit() {
  }

  trackBySection(index: number, item: any){
    return index
  }

}
