import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item, ItemUtil } from '@wjanaszek/item/resource';

@Component({
  selector: 'wjanaszek-item-ui-item-list',
  templateUrl: './item-ui-item-list.component.html',
  styleUrls: ['./item-ui-item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemUiItemListComponent {
  readonly itemUtil = ItemUtil;

  @Input()
  itemsCollection: Item[] = [];

  trackByFn(index: number, item: Item): string {
    return `${index}${item.id}`;
  }
}
