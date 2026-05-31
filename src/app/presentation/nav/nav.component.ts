import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';

interface NavLink {
  readonly id: string;
  readonly label: string;
}

/** Fixed top navigation. Gains a blurred background once the page scrolls. */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  private readonly scrollService = inject(ScrollService);

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  // TODO: change these brand initials to your own.
  protected readonly brand = 'TN_';

  protected readonly links: readonly NavLink[] = [
    { id: 'about', label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  navigateTo(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
