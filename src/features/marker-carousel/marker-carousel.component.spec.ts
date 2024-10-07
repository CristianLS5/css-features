import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerCarouselComponent } from './marker-carousel.component';

describe('MarkerCarouselComponent', () => {
  let component: MarkerCarouselComponent;
  let fixture: ComponentFixture<MarkerCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkerCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarkerCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
