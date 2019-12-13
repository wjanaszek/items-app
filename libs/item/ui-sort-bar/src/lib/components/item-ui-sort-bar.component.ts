import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {
  Filters,
  FiltersFactory,
  ItemSortConfig,
  ItemSortDirectionConfig
} from '@wjanaszek/item/resource';
import { Sort } from '@angular/material';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { SortPossibility } from '../resources/sort-possibility.interface';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'wjanaszek-item-ui-sort-bar',
  templateUrl: './item-ui-sort-bar.component.html',
  styleUrls: ['./item-ui-sort-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemUiSortBarComponent implements OnDestroy, OnInit {
  readonly directionPossibilities = ItemSortDirectionConfig.Options;
  readonly sortPossibilities: SortPossibility[] = ItemSortConfig.Options;

  @Input()
  set resetFilters(reset: boolean) {
    if (reset) {
      this.directionControl.setValue(ItemSortDirectionConfig.Default.key, {
        emitEvent: false
      });
    }
  }
  @Output()
  sortChange = new EventEmitter<Sort>();

  directionControl = new FormControl(ItemSortDirectionConfig.Default.key);
  sortControl = new FormControl({
    value: ItemSortConfig.Default.key,
    disabled: true
  });

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.initSortValueChange();
  }

  private initSortValueChange(): void {
    this.directionControl.valueChanges
      .pipe(
        startWith(ItemSortDirectionConfig.Default.key),
        untilDestroyed(this)
      )
      .subscribe(direction => {
        this.sortChange.emit({ active: this.sortControl.value, direction });
      });
  }
}
