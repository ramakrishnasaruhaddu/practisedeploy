import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonmasterComponent } from './reasonmaster.component';

describe('ReasonmasterComponent', () => {
  let component: ReasonmasterComponent;
  let fixture: ComponentFixture<ReasonmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
