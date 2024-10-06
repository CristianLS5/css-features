import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureShowcaseComponent } from '../../feature-showcase/feature-showcase.component';

@Component({
  selector: 'app-marker-carousel',
  standalone: true,
  imports: [CommonModule, FeatureShowcaseComponent],
  templateUrl: './marker-carousel.component.html',
  styleUrls: ['./marker-carousel.component.scss'],
})
export class MarkerCarouselComponent implements AfterViewInit {
  @ViewChild('entriesContainer')
  entriesContainer!: ElementRef<HTMLUListElement>;
  @ViewChildren('marker')
  markers!: QueryList<ElementRef<HTMLAnchorElement>>;

  title = 'Marker Carousel';
  description =
    'A carousel with markers that indicate which element you are viewing as you scroll.';

  images = [
    { src: 'assets/images/mouse.png', alt: 'Mouse image' },
    { src: 'assets/images/pig.png', alt: 'Pig image' },
    { src: 'assets/images/rat.png', alt: 'Rat image' },
    { src: 'assets/images/tiger.png', alt: 'Tiger image' },
  ];

  activeIndex = 0;

  ngAfterViewInit() {
    // Set focus to the first marker
    setTimeout(() => {
      const firstMarker = this.markers.first;
      if (firstMarker) {
        firstMarker.nativeElement.focus();
        firstMarker.nativeElement.classList.add('active');
      }
    });

    this.setupScrollListener();
  }

  scrollToImage(event: Event, index: number) {
    event.preventDefault();
    const container = this.entriesContainer.nativeElement;
    const imageWidth = container.offsetWidth;
    container.scrollTo({
      left: index * imageWidth,
      behavior: 'smooth',
    });
    this.setActiveMarker(index);
  }

  setActiveMarker(index: number) {
    this.markers.forEach((marker, i) => {
      if (i === index) {
        marker.nativeElement.classList.add('active');
      } else {
        marker.nativeElement.classList.remove('active');
      }
    });
    this.activeIndex = index;
  }

  setupScrollListener() {
    const container = this.entriesContainer.nativeElement;
    container.addEventListener('scroll', () => {
      const scrollPosition = container.scrollLeft;
      const imageWidth = container.offsetWidth;
      const index = Math.round(scrollPosition / imageWidth);
      if (index !== this.activeIndex) {
        this.setActiveMarker(index);
      }
    });
  }

  htmlCode = `
<div data-component="carousel">
  <ul #entriesContainer class="entries" tabindex="0">
    <li *ngFor="let image of images; let i = index">
      <img [src]="image.src" [alt]="image.alt" draggable="false">
    </li>
  </ul>
  <div class="markers">
    <a *ngFor="let image of images; let i = index" href="#" (click)="scrollToImage($event, i)" [style.--i]="i + 1" #marker></a>
  </div>
</div>`;

  cssCode = `
[data-component="carousel"] {
  timeline-scope: --carousel;
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.entries {
  scroll-timeline: --carousel x;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  height: calc(100% - 40px);
  scroll-behavior: smooth;
}

.entries::-webkit-scrollbar {
  display: none;
}

.entries li {
  flex: 0 0 100%;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
}

.entries img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.markers {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.markers a {
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: white;
  transition: background-color 0.3s ease;
}

.markers a.active {
  background-color: #6200ee;
}

.markers a:focus {
  outline: 2px solid #6200ee;
  outline-offset: 2px;
}

// Ensure the example fits within the showcase
:host ::ng-deep .example {
  height: 360px;
  overflow: hidden;
  padding: 0;
}
`;

  jsCode = `
ngAfterViewInit() {
  // Set focus to the first marker
  setTimeout(() => {
    const firstMarker = this.markers.first;
    if (firstMarker) {
      firstMarker.nativeElement.focus();
    }
  });
}

scrollToImage(event: Event, index: number) {
  event.preventDefault();
  const container = this.entriesContainer.nativeElement;
  const imageWidth = container.offsetWidth;
  container.scrollTo({
    left: index * imageWidth,
    behavior: 'smooth'
  });
  this.setActiveMarker(index);
}

setActiveMarker(index: number) {
  this.markers.forEach((marker, i) => {
    if (i === index) {
      marker.nativeElement.classList.add('active');
    } else {
      marker.nativeElement.classList.remove('active');
    }
  });
  this.activeIndex = index;
}

setupScrollListener() {
  const container = this.entriesContainer.nativeElement;
  container.addEventListener('scroll', () => {
    const scrollPosition = container.scrollLeft;
    const imageWidth = container.offsetWidth;
    const index = Math.round(scrollPosition / imageWidth);
    if (index !== this.activeIndex) {
      this.setActiveMarker(index);
    }
  });
}
`;
}
