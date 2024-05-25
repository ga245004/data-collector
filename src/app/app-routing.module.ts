import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppGuard } from './app.guard';
import { CollectionsComponent } from './components/collections/collections.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
    data: {
      showAction : false
    }
  },
  {
    path: 'collections',
    component: CollectionsComponent,
    canActivate: [],
    data: {
      showAction : true
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
