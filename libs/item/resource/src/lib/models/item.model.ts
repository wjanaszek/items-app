import { ItemType } from '../enums/item-type.enum';

export interface Item {
  id: string;
  dateUploaded?: Date;
  title: string;
  type: ItemType;
}
