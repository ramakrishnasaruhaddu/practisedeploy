import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchjobschedulerComponent } from './batchjobscheduler.component';

describe('BatchjobschedulerComponent', () => {
  let component: BatchjobschedulerComponent;
  let fixture: ComponentFixture<BatchjobschedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchjobschedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchjobschedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
