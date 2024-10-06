import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-showcase.component.html',
  styleUrls: ['./feature-showcase.component.scss'],
})
export class FeatureShowcaseComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() htmlCode: string = '';
  @Input() cssCode: string = '';
  @Input() jsCode: string = '';

  activeTab: 'html' | 'css' | 'js' = 'html';

  setActiveTab(tab: 'html' | 'css' | 'js') {
    this.activeTab = tab;
  }
}
