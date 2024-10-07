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
    'Container Queries',
    'Subgrid',
    'Custom Properties (CSS Variables)',
    'Logical Properties',
    'Aspect Ratio',
    'Backdrop Filter',
  ];
}
