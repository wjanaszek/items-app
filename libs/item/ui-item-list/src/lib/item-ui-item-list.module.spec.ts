import { async, TestBed } from '@angular/core/testing';
import { ItemUiItemListModule } from './item-ui-item-list.module';

describe('ItemUiItemListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ItemUiItemListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ItemUiItemListModule).toBeDefined();
  });
});
