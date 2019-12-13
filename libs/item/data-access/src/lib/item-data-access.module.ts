import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDataService } from './services/item.data-service';
import { ItemFacade } from './+state/item.facade';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './+state/item.effects';
import { ITEM_FEATURE_KEY, itemReducer } from './+state/item.reducer';
import { DataPersistence, NxModule } from '@nrwl/angular';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forFeature(ITEM_FEATURE_KEY, itemReducer),
    EffectsModule.forFeature([ItemEffects])
  ],
  providers: [ItemDataService, ItemEffects, ItemFacade]
})
export class ItemDataAccessModule {}
