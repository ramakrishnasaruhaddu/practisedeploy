import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonmastersComponent } from './commonmasters.component';

describe('CommonmastersComponent', () => {
  let component: CommonmastersComponent;
  let fixture: ComponentFixture<CommonmastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonmastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonmastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
