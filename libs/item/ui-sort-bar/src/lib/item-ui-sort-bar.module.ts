import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemUiSortBarComponent } from './components/item-ui-sort-bar.component';
import { MatFormFieldModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],
  declarations: [ItemUiSortBarComponent],
  exports: [ItemUiSortBarComponent]
})
export class ItemUiSortBarModule {}
