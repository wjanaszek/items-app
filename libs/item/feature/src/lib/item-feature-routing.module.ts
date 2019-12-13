import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ItemFeatureComponent } from './item-feature.component';

const routes: Routes = [
  {
    path: 'items',
    component: ItemFeatureComponent
  },
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemFeatureRoutingModule {}
