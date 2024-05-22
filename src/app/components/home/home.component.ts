import { Component, OnDestroy } from "@angular/core";
import { AppService } from "../../services/app.service";
import { Store } from "@ngrx/store";
import { selectSections } from "../../state/sections.selectors";
import { SectionsActions } from "../../state/sections.actions";
import { Section } from "../../models/section.model";
import { Observable, Subscriber, Subscription } from "rxjs";

const add = {
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
}

@Component({
    selector: "app-home",
    "templateUrl": "./home.component.html",
    styleUrls: [
        "./home.component.scss"
    ]
})
export class HomeComponent implements OnDestroy {
    sections$ = this.store.select(selectSections);
    data: Section[] = []//this.appService.data
    originalData


    storeSubscriber: Subscription;

    constructor(private appService: AppService, private store: Store) {
        this.storeSubscriber = this.store.select(selectSections).subscribe(res => {
            this.data = JSON.parse(JSON.stringify(res)) as Section[];
        })
    }

    ngOnDestroy(): void {
        this.storeSubscriber.unsubscribe();
    }


    
}