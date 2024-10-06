import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LongTextComponent } from '../long-text/long-text.component';
import { IntroComponent } from '../intro/intro.component';
import { HorizontalCarouselIndicatorComponent } from '../features/horizontal-carousel-indicator/horizontal-carousel-indicator.component';
import { MarkerCarouselComponent } from '../features/marker-carousel/marker-carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LongTextComponent,
    IntroComponent,
    HorizontalCarouselIndicatorComponent,
    MarkerCarouselComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'css-features';
}
