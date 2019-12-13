import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemUiItemListModule } from '@wjanaszek/item/ui-item-list';
import { ItemUiSearchBarModule } from '@wjanaszek/item/ui-search-bar';
import { ItemUiSortBarModule } from '@wjanaszek/item/ui-sort-bar';
import { ItemFeatureRoutingModule } from './item-feature-routing.module';
import { ItemFeatureComponent } from './item-feature.component';
import { ItemUiFilterBarModule } from '@wjanaszek/item/ui-filter-bar';
import { ItemDataAccessModule } from '@wjanaszek/item/data-access';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ItemDataAccessModule,
    ItemUiItemListModule,
    ItemUiFilterBarModule,
    ItemUiSearchBarModule,
    ItemUiSortBarModule,
    ItemFeatureRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  declarations: [ItemFeatureComponent]
})
export class ItemFeatureModule {}
