import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailserverconfigurationComponent } from './emailserverconfiguration.component';

describe('EmailserverconfigurationComponent', () => {
  let component: EmailserverconfigurationComponent;
  let fixture: ComponentFixture<EmailserverconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailserverconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailserverconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
