import { async, TestBed } from '@angular/core/testing';
import { ItemUiFilterBarModule } from './item-ui-filter-bar.module';

describe('ItemUiFilterBarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ItemUiFilterBarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ItemUiFilterBarModule).toBeDefined();
  });
});
