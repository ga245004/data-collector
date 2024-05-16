export interface Section {
    label: string;
    columns: number,
    children: Array<any>,
    childLabels: any,
    fields: Array<string>,

    showEditSection?: boolean
    showAddSectionFields?: boolean
    addSectionFieldsIndex?: number
    showEditSectionFields?: boolean
    editSectionFieldsIndex? : number
    expand?: boolean
    maximize?: boolean
}