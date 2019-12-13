import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemUiSearchBarComponent } from './item-ui-search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ItemUiSearchBarComponent],
  exports: [ItemUiSearchBarComponent]
})
export class ItemUiSearchBarModule {}
