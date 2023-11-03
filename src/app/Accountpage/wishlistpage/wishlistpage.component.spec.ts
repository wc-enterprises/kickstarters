import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistpageComponent } from './wishlistpage.component';

describe('WishlistpageComponent', () => {
  let component: WishlistpageComponent;
  let fixture: ComponentFixture<WishlistpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistpageComponent]
    });
    fixture = TestBed.createComponent(WishlistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
