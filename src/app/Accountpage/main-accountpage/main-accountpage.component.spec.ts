import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAccountpageComponent } from './main-accountpage.component';

describe('MainAccountpageComponent', () => {
  let component: MainAccountpageComponent;
  let fixture: ComponentFixture<MainAccountpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainAccountpageComponent]
    });
    fixture = TestBed.createComponent(MainAccountpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
