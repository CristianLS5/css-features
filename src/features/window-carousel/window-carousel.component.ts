import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

interface Window {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-window-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './window-carousel.component.html',
  styleUrls: ['./window-carousel.component.scss'],
})
export class WindowCarouselComponent implements AfterViewInit, OnDestroy {
  @Input() title: string = 'Window Carousel';
  @Input() description: string =
    'This demo showcases a parallax effect using GSAP (GreenSock Animation Platform), where images move in response to horizontal scrolling.';

  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  windows: Window[] = [
    { src: 'assets/images/window1.jpeg', alt: 'Window 1' },
    { src: 'assets/images/window2.jpeg', alt: 'Window 2' },
    { src: 'assets/images/window3.jpeg', alt: 'Window 3' },
    { src: 'assets/images/window4.jpeg', alt: 'Window 4' },
    { src: 'assets/images/window5.jpeg', alt: 'Window 5' },
    { src: 'assets/images/window6.jpeg', alt: 'Window 6' },
    { src: 'assets/images/window7.jpeg', alt: 'Window 7' },
    { src: 'assets/images/window8.jpeg', alt: 'Window 8' },
  ];

  private scrollListener: (() => void) | null = null;

  showingCode: boolean = false;
  activeTab: 'html' | 'css' | 'js' = 'html';

  htmlCode = `
    <div class="content" [ngClass]="{'showing-code': showingCode}">
      <div class="example">
        <div class="window-carousel">
          <ul class="slides" #carouselContainer>
            <li class="slide" *ngFor="let window of windows; let i = index">
              <img [src]="window.src" [alt]="window.alt" draggable="false" />
              <a target="_blank" [href]="window.src"><span>IMG </span>&#123;&#123; i + 1 &#125;&#125;</a>
            </li>
          </ul>
        </div>
      </div>`;

  cssCode = `
.slides {
  list-style: none;
  overflow-x: auto;
  display: flex;
  padding: 0;
  margin: 0;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: var(--accent-color) var(--bg-secondary);
}

.slide {
  flex: 0 0 auto;
  width: 30vmin;
  height: calc(30vmin * 1.4);
  scroll-snap-align: center;
  position: relative;
  overflow: hidden;
  margin-right: 1rem;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide a {
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  background: rgba(255, 255, 255, 0.8);
  color: #000;
  padding: 0.5rem 1rem;
  text-decoration: none;
}`;

  jsCode = `
ngAfterViewInit() {
  this.initParallax();
}

private initParallax() {
  const container = this.carouselContainer.nativeElement;
  const slides = container.querySelectorAll('.slide');

  this.scrollListener = () => {
    const containerCenter = container.getBoundingClientRect().width / 2;

    slides.forEach((slide: HTMLElement) => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const offset = slideCenter - containerCenter;
      const parallax = offset * 0.1;

      gsap.to(slide.querySelector('img'), { x: parallax, ease: 'none' });
      gsap.to(slide.querySelector('a'), { x: parallax, ease: 'none' });
    });
  };

  container.addEventListener('scroll', this.scrollListener);
}`;

  ngAfterViewInit() {
    this.initParallax();
  }

  private initParallax() {
    const container = this.carouselContainer.nativeElement;
    const slides = container.querySelectorAll('.slide');

    this.scrollListener = () => {
      const containerCenter = container.getBoundingClientRect().width / 2;

      slides.forEach((slide: HTMLElement) => {
        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.left + rect.width / 2;
        const offset = slideCenter - containerCenter;
        const parallax = offset * 0.1;

        gsap.to(slide.querySelector('img'), { x: parallax, ease: 'none' });
        gsap.to(slide.querySelector('a'), { x: parallax, ease: 'none' });
      });
    };

    container.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      this.carouselContainer.nativeElement.removeEventListener(
        'scroll',
        this.scrollListener
      );
    }
  }

  toggleView() {
    this.showingCode = !this.showingCode;
  }

  setActiveTab(tab: 'html' | 'css' | 'js') {
    this.activeTab = tab;
  }
}
