import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCarouselIndicatorComponent } from './horizontal-carousel-indicator.component';

describe('HorizontalCarouselIndicatorComponent', () => {
  let component: HorizontalCarouselIndicatorComponent;
  let fixture: ComponentFixture<HorizontalCarouselIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalCarouselIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalCarouselIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
