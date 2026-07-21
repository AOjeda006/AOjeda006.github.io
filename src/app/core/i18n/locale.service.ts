import { Injectable, Signal, computed, effect, signal } from '@angular/core';
import { DEFAULT_LOCALE, Locale, isLocale } from './locale';
import { UI_TEXT, UiText } from './ui-text';

/**
 * Estado del idioma activo del portfolio y acceso a sus recursos de texto.
 *
 * REACTOR-LOCAL (una única instancia raíz, sin concurrencia): expone el idioma
 * como señal para que toda la UI reaccione al cambio. Persiste la preferencia
 * del usuario en `localStorage` y sincroniza el atributo `lang` del documento.
 */
@Injectable({ providedIn: 'root' })
export class LocaleService {
  /** Clave de persistencia de la preferencia de idioma. */
  private static readonly storageKey = 'portfolio.locale';

  private readonly locale_ = signal<Locale>(LocaleService.readInitial());

  /** Idioma activo (solo lectura para los consumidores). */
  readonly locale: Signal<Locale> = this.locale_.asReadonly();

  /** Textos de interfaz del idioma activo; recomputa al cambiar de idioma. */
  readonly text: Signal<UiText> = computed(() => UI_TEXT[this.locale_()]);

  constructor() {
    // Efecto de sincronización: refleja el idioma en el documento y lo persiste.
    effect(() => {
      const locale = this.locale_();
      document.documentElement.lang = locale;
      try {
        localStorage.setItem(LocaleService.storageKey, locale);
      } catch {
        /* almacenamiento no disponible: seguimos sin persistir */
      }
    });
  }

  /** Fija el idioma activo. */
  set(locale: Locale): void {
    this.locale_.set(locale);
  }

  /** Alterna entre español e inglés. */
  toggle(): void {
    this.locale_.update((current) => (current === 'es' ? 'en' : 'es'));
  }

  /**
   * Lee la preferencia inicial: la guardada por el usuario si existe y es
   * válida; en caso contrario, el idioma por defecto (español).
   */
  private static readInitial(): Locale {
    try {
      const saved = localStorage.getItem(LocaleService.storageKey);
      if (isLocale(saved)) {
        return saved;
      }
    } catch {
      /* almacenamiento no disponible */
    }
    return DEFAULT_LOCALE;
  }
}
