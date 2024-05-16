import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./components/home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { StoreModule } from "@ngrx/store";
import reducers, { metaReducers } from "./reducers";
import { SectionComponent } from "./components/section/section.component";
import { SectionFieldsComponent } from "./components/section-fields/section-fields.component";
import { SectionFieldComponent } from "./components/section-field/section-field.component";
import { SectionsComponent } from "./components/sections/sections.component";
import { EditSectionFieldsComponent } from "./components/edit-section-fields/edit-section-fields.component";
import { EditSectionComponent } from "./components/edit-section/edit-section.component";
import { AddSectionFieldsComponent } from "./components/add-section-fields/add-section-fields.component";
import { AddSectionComponent } from "./components/add-section/add-section.component";
import { EditFieldComponent } from "./components/edit-field/edit-field.component";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, { metaReducers })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SectionComponent,
        SectionFieldsComponent,
        SectionFieldComponent,
        SectionsComponent,
        EditSectionFieldsComponent,
        EditSectionComponent,
        AddSectionFieldsComponent,
        AddSectionComponent,
        EditFieldComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}