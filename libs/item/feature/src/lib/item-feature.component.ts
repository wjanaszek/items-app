import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemFacade } from '@wjanaszek/item/data-access';
import {
  Filters,
  FiltersFactory,
  ItemTypeFilter
} from '@wjanaszek/item/resource';
import { Sort } from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'wjanaszek-item-feature',
  templateUrl: './item-feature.component.html',
  styleUrls: ['./item-feature.component.scss']
})
export class ItemFeatureComponent implements OnDestroy, OnInit {
  readonly defaultFilters = FiltersFactory.getDefaultFilters();

  filters: Filters | null = null;
  itemsCollection$ = this.itemFacade.itemsCollection$;
  filtersBackToDefault$: Observable<boolean>;

  constructor(private itemFacade: ItemFacade) {}

  clearAllFilters(): void {
    this.itemFacade.clearItemFilters();
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.initFilters();
    this.initFiltersBackToDefault();
  }

  onSearchValueChange(value: string): void {
    this.itemFacade.setItemFilters({ ...this.filters, query: value });
  }

  onTypeFilterValueChange(value: ItemTypeFilter): void {
    this.itemFacade.setItemFilters({ ...this.filters, type: value });
  }

  onSortValueChange(value: Sort): void {
    this.itemFacade.setItemFilters({ ...this.filters, sort: value });
  }

  private initFilters(): void {
    this.itemFacade.filters$
      .pipe(untilDestroyed(this))
      .subscribe(filters => (this.filters = filters));
  }

  private initFiltersBackToDefault(): void {
    this.filtersBackToDefault$ = this.itemFacade.filters$.pipe(
      map(filters => {
        return JSON.stringify(filters) === JSON.stringify(this.defaultFilters);
      })
    );
  }
}
