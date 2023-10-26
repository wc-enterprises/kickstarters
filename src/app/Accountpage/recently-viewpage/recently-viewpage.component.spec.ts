import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyViewpageComponent } from './recently-viewpage.component';

describe('RecentlyViewpageComponent', () => {
  let component: RecentlyViewpageComponent;
  let fixture: ComponentFixture<RecentlyViewpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentlyViewpageComponent]
    });
    fixture = TestBed.createComponent(RecentlyViewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
