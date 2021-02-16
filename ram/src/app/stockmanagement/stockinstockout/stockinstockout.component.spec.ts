import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinstockoutComponent } from './stockinstockout.component';

describe('StockinstockoutComponent', () => {
  let component: StockinstockoutComponent;
  let fixture: ComponentFixture<StockinstockoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinstockoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinstockoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
