import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, FontAwesomeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  title = 'Cristian López Solá';
  role = 'Angular Developer';
  avatarUrl = 'assets/images/avatar.jpg';

  private scrollListener: (() => void) | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.setupScrollAnimation();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  getLinkedInUrl(): string {
    return 'https://www.linkedin.com/in/cristian-l%C3%B3pez-sol%C3%A1-2b6493204/?locale=en_US';
  }

  getGitHubUrl(): string {
    return 'https://github.com/CristianLS5';
  }

  private setupScrollAnimation() {
    const header = this.el.nativeElement.querySelector('header');
    const info = this.el.nativeElement.querySelector('.info');
    const name = this.el.nativeElement.querySelector('h2');
    const meta = this.el.nativeElement.querySelector('.meta');
    const bg = this.el.nativeElement.querySelector('.bg');

    if ('animate' in Element.prototype && 'ScrollTimeline' in window) {
      // Use ScrollTimeline if supported
      const scrollTimeline = new ScrollTimeline({
        source: document.scrollingElement,
        orientation: 'block',
        scrollOffsets: [CSS.px(0), CSS.px(150)],
      });

      header.animate(
        { boxShadow: ['none', '0 5px 5px -3px rgba(0, 0, 0, 0.26)'] },
        { duration: 1, fill: 'both', timeline: scrollTimeline }
      );

      info.animate(
        {
          gridTemplateColumns: ['8em 1fr', '4em 1fr'],
          gap: ['2rem', '1rem'],
          height: ['12rem', '4.75rem'],
        },
        { duration: 1, fill: 'both', timeline: scrollTimeline }
      );

      name.animate(
        {
          fontSize: ['2.5rem', '1.5rem'],
          marginBottom: ['0.5rem', '0'],
        },
        { duration: 1, fill: 'both', timeline: scrollTimeline }
      );

      meta.animate(
        {
          fontSize: ['1rem', '0.8rem'],
          gap: ['0.75rem', '0.5rem'],
        },
        { duration: 1, fill: 'both', timeline: scrollTimeline }
      );

      bg.animate(
        {
          translate: ['0% 0%', '0% -5%'],
          scale: [1, 0.96],
          opacity: [0.8, 0.3],
        },
        { duration: 1, fill: 'both', timeline: scrollTimeline }
      );
    } else {
      // Fallback to scroll event listener
      this.scrollListener = () => {
        const scrollPercentage = Math.min(window.scrollY / 150, 1);

        header.style.boxShadow = `0 ${5 * scrollPercentage}px ${
          5 * scrollPercentage
        }px -3px rgba(0, 0, 0, ${0.26 * scrollPercentage})`;

        info.style.gridTemplateColumns = `${8 - 4 * scrollPercentage}em 1fr`;
        info.style.gap = `${2 - scrollPercentage}rem`;
        info.style.height = `${12 - 7.25 * scrollPercentage}rem`;

        name.style.fontSize = `${2.5 - scrollPercentage}rem`;
        name.style.marginBottom = `${0.5 - 0.5 * scrollPercentage}rem`;

        meta.style.fontSize = `${1 - 0.2 * scrollPercentage}rem`;
        meta.style.gap = `${0.75 - 0.25 * scrollPercentage}rem`;

        bg.style.transform = `translate(0%, ${-5 * scrollPercentage}%) scale(${
          1 - 0.04 * scrollPercentage
        })`;
        bg.style.opacity = `${0.8 - 0.5 * scrollPercentage}`;
      };

      window.addEventListener('scroll', this.scrollListener);
    }
  }
}
