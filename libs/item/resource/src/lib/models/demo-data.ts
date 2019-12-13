import { Item } from './item.model';
import { ItemType } from '../enums/item-type.enum';

export const DEMO_DATA: Item[] = [
  {
    id: '1',
    type: ItemType.Image,
    title: 'Sample image'
  },
  {
    id: '2',
    type: ItemType.Document,
    title: 'Sample document'
  },
  {
    id: '3',
    type: ItemType.Audio,
    title: 'Sample audio'
  },
  {
    id: '4',
    type: ItemType.Video,
    title: 'Sample video'
  },
  {
    id: '5',
    type: ItemType.Video,
    title: 'Harry Potter'
  },
  {
    id: '6',
    type: ItemType.InteractiveVideo,
    title: 'Interactive video'
  },
  {
    id: '7',
    type: ItemType.Image,
    title: 'Dog photo'
  },
  {
    id: '8',
    type: ItemType.Document,
    title: 'How to be a king'
  },
  {
    id: '9',
    type: ItemType.Video,
    title: 'Surfing in Australia'
  },
  {
    id: '10',
    type: ItemType.Audio,
    title: 'Four Seasons Vivaldi'
  },
  {
    id: '11',
    type: ItemType.InteractiveVideo,
    title: 'Lear how to play guitar'
  },
  {
    id: '12',
    type: ItemType.Video,
    title: '18th birthday'
  },
  {
    id: '13',
    type: ItemType.Audio,
    title: 'Małomiasteczkowy'
  },
  {
    id: '14',
    type: ItemType.Image,
    title: 'My car'
  }
];
