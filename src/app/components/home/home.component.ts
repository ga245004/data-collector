import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

@Component({
    selector: "app-home",
    "templateUrl": "./home.component.html",
})
export class HomeComponent {

    constructor(private router: Router, private store: Store) { };

    gotoCollection() {
        this.router.navigateByUrl('/collections');
    }

}