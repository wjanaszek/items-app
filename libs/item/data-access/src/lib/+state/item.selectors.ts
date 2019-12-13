import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITEM_FEATURE_KEY, ItemState } from './item.reducer';

export namespace ItemSelectors {
  const getItemState = createFeatureSelector<ItemState>(ITEM_FEATURE_KEY);

  export const getFilters = createSelector(
    getItemState,
    state => state.filters
  );

  export const getItemsCollection = createSelector(
    getItemState,
    state => state.itemsCollection
  );

  export const getLoading = createSelector(
    getItemState,
    state => state.loading
  );
}
