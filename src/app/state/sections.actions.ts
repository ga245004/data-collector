import { createActionGroup, props } from '@ngrx/store';
import { Section } from '../models/section.model';

export const SectionsActions = createActionGroup({
  source: 'Sections',
  events: {
    'Add Section': props<{ sectionIndex?: number, section: Section }>(),
    'Delete Section': props<{ sectionIndex: number }>(),
    'Update Section': props<{ sectionIndex: number, props: any }>(),
    'Expand Collapse Section': props<{ expand: boolean }>(),
  },
});

export const SectionsApiActions = createActionGroup({
  source: 'Sections API',
  events: {
    'Retrieved Section List': props<{ sections: ReadonlyArray<Section> }>(),
  },
});  