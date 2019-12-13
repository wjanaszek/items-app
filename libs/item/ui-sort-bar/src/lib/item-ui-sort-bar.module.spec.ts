import { async, TestBed } from '@angular/core/testing';
import { ItemUiSortBarModule } from './item-ui-sort-bar.module';

describe('ItemUiSortBarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ItemUiSortBarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ItemUiSortBarModule).toBeDefined();
  });
});
