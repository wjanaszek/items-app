import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Filters } from '@wjanaszek/item/resource';

@Component({
  selector: 'wjanaszek-item-ui-search-bar',
  templateUrl: './item-ui-search-bar.component.html',
  styleUrls: ['./item-ui-search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemUiSearchBarComponent implements OnDestroy, OnInit {
  @Input()
  set resetFilters(reset: boolean) {
    if (reset) {
      this.searchControl.setValue('', { emitEvent: false });
    }
  }
  @Output()
  searchChange = new EventEmitter<string>();

  searchControl = new FormControl('');

  clearSearch(): void {
    this.searchControl.setValue('');
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.initSearchValueChange();
  }

  private initSearchValueChange(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        untilDestroyed(this)
      )
      .subscribe(value => this.searchChange.emit(value));
  }
}
