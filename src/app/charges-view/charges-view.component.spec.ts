import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesViewComponent } from './charges-view.component';

describe('ChargesViewComponent', () => {
  let component: ChargesViewComponent;
  let fixture: ComponentFixture<ChargesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
