import { Component, OnDestroy } from "@angular/core";
import { Section } from "../../models/section.model";
import { Subscription } from "rxjs";
import { AppService } from "../../services/app.service";
import { Store } from "@ngrx/store";
import { selectSections } from "../../state/sections.selectors";
import { SectionsActions } from "../../state/sections.actions";

@Component({
    selector: "app-collections",
    templateUrl: "./collections.component.html"
})
export class CollectionsComponent implements OnDestroy {
    sections$ = this.store.select(selectSections);
    data: Section[] = []


    storeSubscriber: Subscription;

    constructor(private appService: AppService, private store: Store) {
        this.storeSubscriber = this.store.select(selectSections).subscribe(res => {
            this.data = JSON.parse(JSON.stringify(res)) as Section[];
        })
    }

    ngOnDestroy(): void {
        this.storeSubscriber.unsubscribe();
    }

    newSection: Section = null


    expandALl() {
        this.store.dispatch(SectionsActions.expandCollapseSection({ expand: true }))
    }

    collapseAll() {
        this.store.dispatch(SectionsActions.expandCollapseSection({ expand: false }))
    }

    emptySection() {
        this.newSection = {
            label: '', columns: 2, children: [], childLabels: {}, fields: []
        }
    }
}