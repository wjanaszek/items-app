import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material';
import { ItemUiItemListComponent } from './item-ui-item-list.component';

@NgModule({
  imports: [CommonModule, MatListModule],
  declarations: [ItemUiItemListComponent],
  exports: [ItemUiItemListComponent]
})
export class ItemUiItemListModule {}
