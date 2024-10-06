import { Component, ViewChild, ElementRef, Input } from '@angular/core';
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

  @ViewChild('htmlTab') htmlTab!: ElementRef;

  showingCode: boolean = false;
  activeTab: 'html' | 'css' | 'js' = 'html';
  focusedTab: 'html' | 'css' | 'js' | null = null;

  toggleView() {
    this.showingCode = !this.showingCode;
    if (this.showingCode) {
      setTimeout(() => {
        this.htmlTab.nativeElement.focus();
      });
    }
  }

  setActiveTab(tab: 'html' | 'css' | 'js') {
    this.activeTab = tab;
  }

  onTabFocus(tab: 'html' | 'css' | 'js') {
    this.focusedTab = tab;
  }

  onTabBlur() {
    this.focusedTab = null;
  }
}
