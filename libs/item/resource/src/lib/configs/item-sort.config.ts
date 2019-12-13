import { ActiveSort } from '../enums/active-sort.enum';

export namespace ItemSortConfig {
  export const Default = {
    displayedValue: 'Alphabetical',
    key: ActiveSort.Alphabetical
  };
  export const Options = [Default];
}
