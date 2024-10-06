import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureShowcaseComponent } from '../../feature-showcase/feature-showcase.component';

@Component({
  selector: 'app-horizontal-carousel-indicator',
  standalone: true,
  imports: [CommonModule, FeatureShowcaseComponent],
  templateUrl: './horizontal-carousel-indicator.component.html',
  styleUrls: ['./horizontal-carousel-indicator.component.scss'],
})
export class HorizontalCarouselIndicatorComponent {
  title = 'Horizontal Carousel Indicator';
  description = 'A CSS-based horizontal carousel with smooth scrolling';
  htmlCode = `
<div class="carousel-container">
  <div class="carousel">
    <div class="carousel-item" *ngFor="let item of [1, 2, 3, 4, 5]">
      <h3>Item {{ item }}</h3>
      <p>This is carousel item {{ item }}</p>
    </div>
  </div>
</div>`;
  cssCode = `
.carousel-container {
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.carousel {
  display: flex;
  width: max-content;
}

.carousel-item {
  width: 1080px;
  height: 300px;
  flex-shrink: 0;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  position: relative;
}

.carousel-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 100%;
  width: 1080px;
  height: 100%;
  background: inherit;
}`;
  jsCode = '// No JavaScript required for this implementation!';
}
