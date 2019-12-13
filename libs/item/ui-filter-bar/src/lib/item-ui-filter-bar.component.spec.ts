import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUiFilterBarComponent } from './item-ui-filter-bar.component';

describe('ItemUiFilterBarComponent', () => {
  let component: ItemUiFilterBarComponent;
  let fixture: ComponentFixture<ItemUiFilterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUiFilterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUiFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
