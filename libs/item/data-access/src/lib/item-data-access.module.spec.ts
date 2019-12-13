import { async, TestBed } from '@angular/core/testing';
import { ItemDataAccessModule } from './item-data-access.module';

describe('ItemDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ItemDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ItemDataAccessModule).toBeDefined();
  });
});
