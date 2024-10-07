import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Album {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-cover-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cover-flow.component.html',
  styleUrls: ['./cover-flow.component.scss'],
})
export class CoverFlowComponent {
  @Input() title: string = 'Cover Flow';
  @Input() description: string =
    'A recreation of the infamous Cover Flow UI, once featured by Apple Inc. in iTunes for visually flipping through album artwork.';

  albums: Album[] = [
    { src: 'assets/images/cover1.jpeg', alt: 'Album 1' },
    { src: 'assets/images/cover2.jpeg', alt: 'Album 2' },
    { src: 'assets/images/cover3.jpeg', alt: 'Album 3' },
    { src: 'assets/images/cover4.jpeg', alt: 'Album 4' },
    { src: 'assets/images/cover5.jpeg', alt: 'Album 5' },
    { src: 'assets/images/cover6.jpeg', alt: 'Album 6' },
    { src: 'assets/images/cover7.jpeg', alt: 'Album 7' },
    { src: 'assets/images/cover8.jpeg', alt: 'Album 8' },
    { src: 'assets/images/cover9.jpeg', alt: 'Album 9' },
    { src: 'assets/images/cover10.jpeg', alt: 'Album 10' },
    { src: 'assets/images/cover11.jpeg', alt: 'Album 11' },
  ];

  htmlCode = `
<div class="cards-container">
  <ul class="cards">
    <li *ngFor="let album of albums">
      <img [src]="album.src" width="600" height="600" [alt]="album.alt" />
    </li>
  </ul>
</div>`;

  cssCode = `
.cards-container {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}

.cards {
  --cover-size: min(30vw, 200px);
  --cover-gap: max(10px, 1vw);
  list-style: none;
  white-space: nowrap;
  display: flex;
  height: calc(100% - 20px);
  align-items: center;
  gap: var(--cover-gap);
  padding-inline: calc(50% - var(--cover-size) / 2);
  scroll-snap-type: x mandatory;
}

.cards li {
  flex: 0 0 var(--cover-size);
  aspect-ratio: 1;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  view-timeline-name: --li-in-and-out-of-view;
  view-timeline-axis: inline;
  animation: linear adjust-z-index both;
  animation-timeline: --li-in-and-out-of-view;
  perspective: 40em;
}

.cards li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  -webkit-box-reflect: below 0.5em linear-gradient(rgb(0 0 0 / 0), rgb(0 0 0 / 0.25));
  animation: linear rotate-cover both;
  animation-timeline: --li-in-and-out-of-view;
}

@keyframes adjust-z-index {
  0%, 100% { z-index: 1; }
  50% { z-index: 100; }
}

@keyframes rotate-cover {
  0% { transform: translateX(-100%) rotateY(-45deg); }
  35% { transform: translateX(0) rotateY(-45deg); }
  50% { transform: rotateY(0deg) translateZ(1em) scale(1.5); }
  65% { transform: translateX(0) rotateY(45deg); }
  100% { transform: translateX(100%) rotateY(45deg); }
}`;

  jsCode = 'No JavaScript required for this demo.';

  showingCode: boolean = false;
  activeTab: 'html' | 'css' | 'js' = 'html';

  toggleView() {
    this.showingCode = !this.showingCode;
  }

  setActiveTab(tab: 'html' | 'css' | 'js') {
    this.activeTab = tab;
  }
}
