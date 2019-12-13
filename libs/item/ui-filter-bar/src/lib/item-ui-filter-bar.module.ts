import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemUiFilterBarComponent } from './item-ui-filter-bar.component';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatSelectModule],
  declarations: [ItemUiFilterBarComponent],
  exports: [ItemUiFilterBarComponent]
})
export class ItemUiFilterBarModule {}
