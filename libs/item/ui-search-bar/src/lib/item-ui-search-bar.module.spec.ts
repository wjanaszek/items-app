import { async, TestBed } from '@angular/core/testing';
import { ItemUiSearchBarModule } from './item-ui-search-bar.module';

describe('ItemUiSearchBarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ItemUiSearchBarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ItemUiSearchBarModule).toBeDefined();
  });
});
