import { Item } from './item.model';
import { ItemType } from '../enums/item-type.enum';

export class ItemUtil {
  static displayType(item: Item): string {
    switch (item.type) {
      case ItemType.Image:
        return 'image';
      case ItemType.Audio:
        return 'audio';
      case ItemType.Document:
        return 'document';
      case ItemType.InteractiveVideo:
        return 'interactive video';
      case ItemType.Video:
        return 'video';
      default:
        return 'unknown';
    }
  }
}
