import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCarouselComponent } from './window-carousel.component';

describe('WindowCarouselComponent', () => {
  let component: WindowCarouselComponent;
  let fixture: ComponentFixture<WindowCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
