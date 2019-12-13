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
  ItemFilterConfig,
  ItemTypeFilter
} from '@wjanaszek/item/resource';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'wjanaszek-item-ui-filter-bar',
  templateUrl: './item-ui-filter-bar.component.html',
  styleUrls: ['./item-ui-filter-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemUiFilterBarComponent implements OnDestroy, OnInit {
  readonly filterPossibilities = ItemFilterConfig.Options;

  @Input()
  set resetFilters(reset: boolean) {
    if (reset) {
      this.filterControl.setValue(ItemFilterConfig.Default.key, {
        emitEvent: false
      });
    }
  }
  @Output()
  typeFilterChange = new EventEmitter<ItemTypeFilter>();

  filterControl = new FormControl(ItemFilterConfig.Default.key);

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.initFilterValueChange();
  }

  private initFilterValueChange(): void {
    this.filterControl.valueChanges
      .pipe(
        startWith(ItemFilterConfig.Default.key),
        untilDestroyed(this)
      )
      .subscribe(value => this.typeFilterChange.emit(value));
  }
}
