import { ItemTypeFilter } from '../enums/item-type-filter.enum';

export namespace ItemFilterConfig {
  export const Default = {
    displayedValue: 'All types',
    key: ItemTypeFilter.AllItems
  };

  export const Options = [
    Default,
    {
      displayedValue: 'Video',
      key: ItemTypeFilter.Video
    },
    {
      displayedValue: 'Interactive video',
      key: ItemTypeFilter.InteractiveVideo
    },
    {
      displayedValue: 'Audio',
      key: ItemTypeFilter.Audio
    },
    {
      displayedValue: 'Document',
      key: ItemTypeFilter.Document
    },
    {
      displayedValue: 'Image',
      key: ItemTypeFilter.Image
    }
  ];
}
