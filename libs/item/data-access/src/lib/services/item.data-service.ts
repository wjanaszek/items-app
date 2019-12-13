import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetItemCollectionRequestPayload } from '../request-payloads';
import { DEMO_DATA, Item, ItemType, ItemTypeFilter } from '@wjanaszek/item/resource';
import { Sort, SortDirection } from '@angular/material';

@Injectable()
export class ItemDataService {
  getItemCollection(data: GetItemCollectionRequestPayload): Observable<Item[]> {
    const filters = data.filters;
    let result = DEMO_DATA;

    if (!filters) {
      return of(result);
    }

    if (filters.query) {
      result = this.filterByQuery(result, filters.query);
    }

    if (filters.type) {
      result = this.filterByType(result, filters.type);
    }

    if (filters.sort.direction === 'asc' || filters.sort.direction === 'desc') {
      result = this.sortByTitle(result, filters.sort.direction);
    }

    return of(result);
  }

  private filterByQuery(itemsCollection: Item[], query: string): Item[] {
    return itemsCollection.filter(item =>
      this.normalizeStringForSearch(item.title).includes(
        this.normalizeStringForSearch(query)
      )
    );
  }

  private filterByType(itemsCollection: Item[], type: ItemTypeFilter): Item[] {
    return itemsCollection.filter(item => type === ItemTypeFilter.AllItems || item.type === type as string);
  }

  private normalizeStringForSearch(value: string): string {
    return value.trim().toLowerCase();
  }

  private sortByTitle(itemsCollection: Item[], sortDirection: SortDirection): Item[] {
    if (sortDirection === 'asc') {
      return this.sortByTitleAsc(itemsCollection);
    }

    if (sortDirection === 'desc') {
      return this.sortByTitleDesc(itemsCollection);
    }
  }

  private sortByTitleDesc(itemsCollection: Item[]): Item[] {
    return itemsCollection.sort((a, b) => {
      if (
        this.normalizeStringForSearch(a.title) >
        this.normalizeStringForSearch(b.title)
      ) {
        return -1;
      }

      if (
        this.normalizeStringForSearch(a.title) <
        this.normalizeStringForSearch(b.title)
      ) {
        return 1;
      }

      return 0;
    });
  }

  private sortByTitleAsc(itemsCollection: Item[]): Item[] {
    return itemsCollection.sort((a, b) => {
      if (
        this.normalizeStringForSearch(a.title) <
        this.normalizeStringForSearch(b.title)
      ) {
        return -1;
      }

      if (
        this.normalizeStringForSearch(a.title) <
        this.normalizeStringForSearch(b.title)
      ) {
        return 1;
      }

      return 0;
    });
  }
}
