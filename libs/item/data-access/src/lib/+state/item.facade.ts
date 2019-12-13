import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ItemPartialState } from './item.reducer';
import { fromItemActions } from './item.actions';
import { Filters } from '@wjanaszek/item/resource';
import { ItemSelectors } from './item.selectors';

@Injectable()
export class ItemFacade {
  filters$ = this.store.pipe(select(ItemSelectors.getFilters));
  itemsCollection$ = this.store.pipe(select(ItemSelectors.getItemsCollection));
  loading$ = this.store.pipe(select(ItemSelectors.getLoading));

  constructor(private store: Store<ItemPartialState>) {}

  clearItemFilters(): void {
    this.store.dispatch(new fromItemActions.SetItemFilters(null));
  }

  setItemFilters(filters: Filters): void {
    this.store.dispatch(new fromItemActions.SetItemFilters(filters));
  }
}
