import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from './presentation/nav/nav.component';
import { HeroComponent } from './presentation/hero/hero.component';
import { AboutComponent } from './presentation/about/about.component';
import { ProjectsComponent } from './presentation/projects/projects.component';
import { ContactComponent } from './presentation/contact/contact.component';
import { FooterComponent } from './presentation/footer/footer.component';

/**
 * Application shell. Composes every section in order; it holds no business
 * logic, delegating data access to the section components and use cases.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class AppComponent {}
