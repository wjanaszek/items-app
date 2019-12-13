import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUiItemListComponent } from './item-ui-item-list.component';

describe('ItemUiItemListComponent', () => {
  let component: ItemUiItemListComponent;
  let fixture: ComponentFixture<ItemUiItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUiItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUiItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
