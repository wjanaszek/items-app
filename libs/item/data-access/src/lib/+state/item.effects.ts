import { Injectable } from '@angular/core';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ItemDataService } from '../services/item.data-service';
import { fromItemActions } from './item.actions';
import { ITEM_FEATURE_KEY, ItemPartialState } from './item.reducer';

@Injectable()
export class ItemEffects {
  @Effect()
  getItemCollection$ = this.dataPersistence.fetch(
    fromItemActions.Types.GetItemCollection,
    {
      run: (
        _action: fromItemActions.GetItemCollection,
        state: ItemPartialState
      ) => {
        return this.itemDataService
          .getItemCollection({ filters: state[ITEM_FEATURE_KEY].filters })
          .pipe(map(res => new fromItemActions.GetItemCollectionSuccess(res)));
      },
      onError: (action: fromItemActions.GetItemCollection, e: any) => {
        return new fromItemActions.GetItemCollectionFail(e);
      }
    }
  );

  @Effect()
  setItemFilters$ = this.actions$.pipe(
    ofType(fromItemActions.Types.SetItemFilters),
    map(() => new fromItemActions.GetItemCollection())
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ItemPartialState>,
    private itemDataService: ItemDataService
  ) {}
}
