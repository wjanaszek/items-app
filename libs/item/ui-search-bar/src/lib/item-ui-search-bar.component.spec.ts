import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUiSearchBarComponent } from './item-ui-search-bar.component';

describe('ItemUiSearchBarComponent', () => {
  let component: ItemUiSearchBarComponent;
  let fixture: ComponentFixture<ItemUiSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUiSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUiSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
