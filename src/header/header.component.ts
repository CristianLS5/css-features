import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeaderComponent {
  title = 'Bramus Van Damme';
  role = 'Developer Relations Engineer';
  username = 'bramus';
  pronouns = 'he/him';
  avatarUrl = 'https://brm.us/avatar';
}
