import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureShowcaseComponent } from '../../feature-showcase/feature-showcase.component';

@Component({
  selector: 'app-image-reveal',
  standalone: true,
  imports: [CommonModule, FeatureShowcaseComponent],
  templateUrl: './image-reveal.component.html',
  styleUrls: ['./image-reveal.component.scss'],
})
export class ImageRevealComponent {
  title = 'Image Reveal Effect';
  description =
    'Images that reveal themselves as they enter the scrollport, with static text content.';

  images = [
    { src: 'assets/images/mouse.png', alt: 'Mouse image' },
    { src: 'assets/images/pig.png', alt: 'Pig image' },
    { src: 'assets/images/rat.png', alt: 'Rat image' },
    { src: 'assets/images/tiger.png', alt: 'Tiger image' },
  ];

  htmlCode = `
<div class="image-reveal-container">
  <div *ngFor="let image of images; let i = index" class="content-section">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <figure>
      <img [src]="image.src" [alt]="image.alt" class="revealing-image" [id]="'revealing-image-' + i">
      <figcaption>Image {{i + 1}} description</figcaption>
    </figure>
  </div>
</div>`;

  cssCode = `
@keyframes reveal {
  from {
    opacity: 0;
    clip-path: inset(45% 20% 45% 20%);
  }
  to {
    opacity: 1;
    clip-path: inset(0% 0% 0% 0%);
  }
}

.image-reveal-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.content-section {
  margin-bottom: 2rem;
}

figure {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.revealing-image {
  max-width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;

  view-timeline-name: --revealing-image;
  view-timeline-axis: block;

  animation: linear reveal both;
  animation-timeline: --revealing-image;
  animation-range: entry 5% cover 65%;
  animation-duration: 0.5s;
}

figcaption {
  text-align: center;
  margin-top: 0.5rem;
  font-style: italic;
}`;

  jsCode = `
// No JavaScript required for this implementation`;
}
