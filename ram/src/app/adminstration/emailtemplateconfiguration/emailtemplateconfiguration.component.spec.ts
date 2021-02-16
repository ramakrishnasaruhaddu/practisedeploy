import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailtemplateconfigurationComponent } from './emailtemplateconfiguration.component';

describe('EmailtemplateconfigurationComponent', () => {
  let component: EmailtemplateconfigurationComponent;
  let fixture: ComponentFixture<EmailtemplateconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailtemplateconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailtemplateconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
