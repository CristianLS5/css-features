import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  currentYear: number = new Date().getFullYear();
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.setupScrollAnimation();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  getLinkedInUrl(): string {
    return 'https://www.linkedin.com/in/cristian-l%C3%B3pez-sol%C3%A1-2b6493204/?locale=en_US';
  }

  private setupScrollAnimation() {
    const footer = this.el.nativeElement.querySelector('footer');

    if ('ScrollTimeline' in window) {
      const scrollTimeline = new ScrollTimeline({
        source: document.scrollingElement,
        scrollOffsets: [CSS.percent(85), CSS.percent(100)],
      });

      footer.animate(
        [
          { opacity: 0, transform: 'translateY(100%)' },
          { opacity: 0.5, transform: 'translateY(50%)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        {
          duration: 1,
          fill: 'both',
          timeline: scrollTimeline,
        }
      );
    } else {
      // Fallback for browsers that don't support ScrollTimeline
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.5, 1],
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progress = entry.intersectionRatio;
            footer.style.opacity = `${progress}`;
            footer.style.transform = `translateY(${100 - progress * 100}%)`;
          } else {
            footer.style.opacity = '0';
            footer.style.transform = 'translateY(100%)';
          }
        });
      }, options);

      this.observer.observe(footer);
    }
  }
}
