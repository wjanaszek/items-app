import { async, TestBed } from '@angular/core/testing';
import { ItemFeatureModule } from './item-feature.module';

describe('ItemFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ItemFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ItemFeatureModule).toBeDefined();
  });
});
