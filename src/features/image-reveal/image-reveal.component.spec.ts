import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRevealComponent } from './image-reveal.component';

describe('ImageRevealComponent', () => {
  let component: ImageRevealComponent;
  let fixture: ComponentFixture<ImageRevealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageRevealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
