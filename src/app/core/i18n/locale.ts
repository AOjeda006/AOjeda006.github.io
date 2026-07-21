/**
 * Idiomas soportados por el portfolio.
 * El contrato (los literales `'es' | 'en'`) es estable: sirve de clave para
 * los datasets localizados y para el atributo `lang` del documento.
 */
export type Locale = 'es' | 'en';

/** Idiomas disponibles, en el orden en que se ofrecen al usuario. */
export const LOCALES: readonly Locale[] = ['es', 'en'];

/** Idioma por defecto cuando no hay preferencia guardada. */
export const DEFAULT_LOCALE: Locale = 'es';

/** Type guard: comprueba si un valor arbitrario es un {@link Locale} válido. */
export function isLocale(value: unknown): value is Locale {
  return value === 'es' || value === 'en';
}
