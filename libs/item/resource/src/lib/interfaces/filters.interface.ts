import { Sort } from '@angular/material';
import { ItemTypeFilter } from '../enums/item-type-filter.enum';

export interface Filters {
  query?: string;
  type?: ItemTypeFilter;
  sort: Sort;
}
