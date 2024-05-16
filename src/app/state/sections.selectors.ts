import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Section } from '../models/section.model';

export const selectSections = createFeatureSelector<ReadonlyArray<Section>>('sections');