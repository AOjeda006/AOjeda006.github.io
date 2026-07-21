import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Signal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ScrollService } from '../../shared/services/scroll.service';
import { LocaleService } from '../../core/i18n/locale.service';
import { LOCALES, Locale } from '../../core/i18n/locale';

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
  imports: [UpperCasePipe],
})
export class NavComponent {
  private readonly scrollService = inject(ScrollService);
  private readonly localeService = inject(LocaleService);

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly brand = 'AOR_';

  /** Textos de interfaz e idioma activo, reactivos al cambio de idioma. */
  protected readonly text = this.localeService.text;
  protected readonly locale = this.localeService.locale;
  protected readonly locales = LOCALES;

  /** Enlaces de navegación, con etiquetas en el idioma activo. */
  protected readonly links: Signal<readonly NavLink[]> = computed(() => {
    const nav = this.text().nav;
    return [
      { id: 'about', label: nav.about },
      { id: 'projects', label: nav.projects },
      { id: 'certifications', label: nav.certifications },
      { id: 'contact', label: nav.contact },
    ];
  });

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

  setLocale(locale: Locale): void {
    this.localeService.set(locale);
  }
}
