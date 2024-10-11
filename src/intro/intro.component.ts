import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true,
})
export class IntroComponent {
  features: string[] = [
    'Scroll-driven Animations',
    'Parallax Effects',
    'CSS Scroll Snap',
    'Image Reveal Effects',
    'Custom Scrollbar Styling',
    'Responsive Design using Flexbox and CSS Grid',
    'CSS Custom Properties for Dynamic Styling',
    'Intersection Observer API for Scroll-based Animations',
  ];
}
