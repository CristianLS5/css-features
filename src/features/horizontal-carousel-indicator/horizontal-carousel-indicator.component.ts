import {
  Component,
  ViewEncapsulation,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureShowcaseComponent } from '../../feature-showcase/feature-showcase.component';

@Component({
  selector: 'app-horizontal-carousel-indicator',
  standalone: true,
  imports: [CommonModule, FeatureShowcaseComponent],
  templateUrl: './horizontal-carousel-indicator.component.html',
  styleUrls: ['./horizontal-carousel-indicator.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HorizontalCarouselIndicatorComponent implements AfterViewInit {
  title = 'Horizontal Carousel Indicator';
  description =
    'A CSS-based horizontal carousel with a progress indicator using ScrollTimeline API';

  images = [
    { src: 'assets/images/mouse.png', alt: 'Mouse image' },
    { src: 'assets/images/pig.png', alt: 'Pig image' },
    { src: 'assets/images/rat.png', alt: 'Rat image' },
    { src: 'assets/images/tiger.png', alt: 'Tiger image' },
  ];

  htmlCode = `
<div class="gallery">
  <div class="gallery__progress"></div>
  <div class="gallery__scrollcontainer">
    <div class="gallery__entry" *ngFor="let image of images">
      <img [src]="image.src" [alt]="image.alt" draggable="false">
    </div>
  </div>
</div>`;

  cssCode = `
.gallery {
  position: relative;
  width: 100%;
  height: 100%;
}

.gallery__scrollcontainer {
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  display: flex;
  height: calc(100% - 1em);
}

.gallery__progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1em;
  background-color: var(--accent-color);
  transform-origin: 0 50%;
  z-index: 10;
}

.gallery__entry {
  flex: 0 0 100%;
  scroll-snap-align: start;
  height: 100%;
  position: relative;
}

.gallery__entry img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`;

  jsCode = `
const gallery = document.querySelector('.gallery');
const scroller = gallery.querySelector('.gallery__scrollcontainer');
const progressbar = gallery.querySelector('.gallery__progress');

const timeline = new ScrollTimeline({
  source: scroller,
  axis: 'x',
});

progressbar.animate(
  {
    transform: ['scaleX(0)', 'scaleX(1)'],
  },
  {
    duration: 1,
    timeline: timeline,
  }
);`;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.initializeGallery();
  }

  private initializeGallery() {
    if ('ScrollTimeline' in window) {
      const gallery = this.el.nativeElement.querySelector('.gallery');
      const scroller = gallery.querySelector(
        '.gallery__scrollcontainer'
      ) as HTMLElement;
      const progressbar = gallery.querySelector(
        '.gallery__progress'
      ) as HTMLElement;

      // Set the --num-images CSS variable
      gallery.style.setProperty('--num-images', this.images.length.toString());

      const timeline = new ScrollTimeline({
        source: scroller,
        axis: 'x',
      });

      progressbar.animate(
        {
          transform: ['scaleX(0)', 'scaleX(1)'],
        },
        {
          duration: 1,
          timeline: timeline,
        }
      );
    } else {
      console.log('ScrollTimeline is not supported in this browser');
      // Implement a fallback if needed
    }
  }
}
