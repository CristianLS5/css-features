import { Component, ChangeDetectionStrategy } from '@angular/core';
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
export class HeaderComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  title = 'Cristian López Solá';
  role = 'Angular Developer';
  avatarUrl = 'assets/images/avatar.jpg';

  getLinkedInUrl(): string {
    return 'https://www.linkedin.com/in/cristian-l%C3%B3pez-sol%C3%A1-2b6493204/?locale=en_US';
  }

  getGitHubUrl(): string {
    return 'https://github.com/CristianLS5';
  }
}
