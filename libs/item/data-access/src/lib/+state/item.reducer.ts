import { Filters, FiltersFactory, Item } from '@wjanaszek/item/resource';
import { fromItemActions } from './item.actions';

export const ITEM_FEATURE_KEY = 'item';

export interface ItemState {
  itemsCollection: Item[];
  filters: Filters | null;
  loading: boolean;
}

export interface ItemPartialState {
  readonly [ITEM_FEATURE_KEY]: ItemState;
}

export const initialState: ItemState = {
  itemsCollection: [],
  filters: null,
  loading: false
};

export function itemReducer(
  state: ItemState = initialState,
  action: fromItemActions.CollectiveType
) {
  switch (action.type) {
    case fromItemActions.Types.GetItemCollection: {
      state = {
        ...state,
        itemsCollection: []
      };
      break;
    }

    case fromItemActions.Types.GetItemCollectionFail: {
      state = {
        ...state,
        loading: false
      };
      break;
    }

    case fromItemActions.Types.GetItemCollectionSuccess: {
      state = {
        ...state,
        itemsCollection: action.payload,
        loading: false
      };
      break;
    }

    case fromItemActions.Types.SetItemFilters: {
      state = {
        ...state,
        filters: action.payload
          ? action.payload
          : FiltersFactory.getDefaultFilters()
      };
      break;
    }
  }

  return state;
}
