import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyOrderpageComponent } from './empty-orderpage.component';

describe('EmptyOrderpageComponent', () => {
  let component: EmptyOrderpageComponent;
  let fixture: ComponentFixture<EmptyOrderpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyOrderpageComponent]
    });
    fixture = TestBed.createComponent(EmptyOrderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
