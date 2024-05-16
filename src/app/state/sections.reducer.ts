import { createReducer, on } from '@ngrx/store';
import { SectionsActions, SectionsApiActions } from './sections.actions';
import { Section } from '../models/section.model';
import mockData from './mockData';

export const LocalStorageKey = "sections"

export const initialState: ReadonlyArray<Section> = GetSections();

export const sectionsReducer = createReducer(
    initialState,
    on(SectionsApiActions.retrievedSectionList, (_state, { }) => {
        return GetSections();
    }),
    on(SectionsActions.addSection, (_state, { sectionIndex = -1, section }) => {
        const newSections = [..._state];
        if (sectionIndex >= 0) {
            newSections.splice(sectionIndex, 1, section)
        }
        else {
            newSections.push(section)
        }
        SaveSections(newSections);
        return newSections
    }),
    on(SectionsActions.deleteSection, (_state, { sectionIndex = -1 }) => {
        const newSections = [..._state];
        if (sectionIndex >= 0) {
            newSections.splice(sectionIndex, 1)
        }
        SaveSections(newSections);
        return newSections
    }),
    on(SectionsActions.updateSection, (_state, { sectionIndex = -1, props }) => {
        console.log(props)
        const newSections = [..._state];
        UpdateSection(newSections, sectionIndex, props)
        SaveSections(newSections);
        return newSections
    })
);

function GetSections() {
    return localStorage.getItem(LocalStorageKey) ? JSON.parse(localStorage.getItem(LocalStorageKey)) : mockData.sections
}

function SaveSections(newSections: Section[]) {
    localStorage.setItem(LocalStorageKey, JSON.stringify(newSections))
    return true;
}

function UpdateSection(sections: Section[], sectionIndex: number, props) {
    const findSection = sections[sectionIndex]
    const { label, columns, children, childLabels, fields } = props;
    const newSection = { ...findSection, ...{ label, columns, children, childLabels, fields } }
    sections.splice(sectionIndex, 1, newSection)
    return [...sections]
}