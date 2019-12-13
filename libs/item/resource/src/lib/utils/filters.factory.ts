import { Filters } from '../interfaces/filters.interface';
import { ItemSortConfig, ItemSortDirectionConfig } from '../configs';
import { SortDirection } from '@angular/material';
import { ItemTypeFilter } from '../enums/item-type-filter.enum';

export class FiltersFactory {
  static getDefaultFilters(): Filters {
    return {
      type: ItemTypeFilter.AllItems,
      sort: {
        direction: ItemSortDirectionConfig.Default.key as SortDirection,
        active: ItemSortConfig.Default.key
      }
    }
  }
}
