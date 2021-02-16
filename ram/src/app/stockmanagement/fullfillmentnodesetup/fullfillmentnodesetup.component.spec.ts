import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullfillmentnodesetupComponent } from './fullfillmentnodesetup.component';

describe('FullfillmentnodesetupComponent', () => {
  let component: FullfillmentnodesetupComponent;
  let fixture: ComponentFixture<FullfillmentnodesetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullfillmentnodesetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullfillmentnodesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
