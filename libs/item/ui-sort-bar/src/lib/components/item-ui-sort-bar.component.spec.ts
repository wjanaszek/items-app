import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUiSortBarComponent } from './item-ui-sort-bar.component';

describe('ItemUiSortBarComponent', () => {
  let component: ItemUiSortBarComponent;
  let fixture: ComponentFixture<ItemUiSortBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUiSortBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUiSortBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
