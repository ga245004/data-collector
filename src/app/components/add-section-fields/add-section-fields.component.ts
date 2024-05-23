import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';
import { Store } from '@ngrx/store';
import { SectionsActions } from '../../state/sections.actions';
import { getRandomGradient } from '../../utils/randomTwGradient';
import { CopyText } from '../../utils/copyText';

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

  showChatGPT = false
  responseData = ""

  constructor(private store: Store) { }

  ngOnInit() {
  }


  hideAddSectionFields(isShow: boolean) {
    this.section.showAddSectionFields = isShow;
    this.section.addSectionFieldsIndex = -1;
    this.item = {}
    this.randomG = getRandomGradient({ intensity: "100" })
  }

  useChatGPT() {
    const fields = this.section.fields;
    const promptTemplate = `Generate a random data entries with the following fields:
    ${fields.map(field => `- ${this.section.childLabels[field] || field}`).join('\n')}
    
    Example output in JSON format:
    [
        ${JSON.stringify(fields.reduce((obj, field) => ({ ...obj, [this.section.childLabels[field] || field]: "value" }), {}))}
    ]`

    console.log(promptTemplate);
    CopyText(promptTemplate).then(
      () => {
        window.open("https://chatgpt.com/?temporary-chat=true")
        this.showChatGPT = true
        //setTimeout(() => this.hideIsCopiedSuccess(), 1000)
      }
    )
  }

  addFields() {
    if (this.showChatGPT && this.responseData) {
      const data = JSON.parse(this.responseData);
      console.log(data);
      data.map(i => {
        const item = {}
        Object.keys(i).forEach((l, j) => {
          item[this.section.fields[j]] = i[l]
        })
        return item;
      }).forEach(item => {
        this.section.children.push(item)
      })
    }
    else {
      if (this.section.addSectionFieldsIndex >= 0) {
        this.section.children.splice(this.section.addSectionFieldsIndex, 0, this.item)
      }
      else {
        this.section.children.push(this.item)
      }
    }


    this.store.dispatch(SectionsActions.updateSection({ sectionIndex: this.sectionIndex, props: { ...this.section } }))
    this.hideAddSectionFields(false)
    this.item = {}
    this.randomG = getRandomGradient({ intensity: "100" })
  }

}
