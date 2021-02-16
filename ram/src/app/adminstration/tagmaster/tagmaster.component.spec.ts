import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagmasterComponent } from './tagmaster.component';

describe('TagmasterComponent', () => {
  let component: TagmasterComponent;
  let fixture: ComponentFixture<TagmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
