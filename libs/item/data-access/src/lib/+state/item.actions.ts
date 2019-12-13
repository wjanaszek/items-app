import { Filters, Item } from '@wjanaszek/item/resource';
import { Action } from '@ngrx/store';

export namespace fromItemActions {
  export enum Types {
    GetItemCollection = '[Item] Get Item Collection',
    GetItemCollectionFail = '[Item] Get Item Collection Fail',
    GetItemCollectionSuccess = '[Item] Get Item Collection Success',
    SetItemFilters = '[Item] Set Item Filters'
  }

  export class GetItemCollection implements Action {
    readonly type = Types.GetItemCollection;
  }

  export class GetItemCollectionFail implements Action {
    readonly type = Types.GetItemCollectionFail;

    constructor(public payload: any) {}
  }

  export class GetItemCollectionSuccess implements Action {
    readonly type = Types.GetItemCollectionSuccess;

    constructor(public payload: Item[]) {}
  }

  export class SetItemFilters implements Action {
    readonly type = Types.SetItemFilters;

    constructor(public payload: Filters | null) {}
  }

  export type CollectiveType =
    | GetItemCollection
    | GetItemCollectionFail
    | GetItemCollectionSuccess
    | SetItemFilters;
}
