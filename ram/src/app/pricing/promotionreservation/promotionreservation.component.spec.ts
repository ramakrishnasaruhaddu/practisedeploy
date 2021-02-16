import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionreservationComponent } from './promotionreservation.component';

describe('PromotionreservationComponent', () => {
  let component: PromotionreservationComponent;
  let fixture: ComponentFixture<PromotionreservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionreservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
