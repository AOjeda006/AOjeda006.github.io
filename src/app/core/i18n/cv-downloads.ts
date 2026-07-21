import { Locale } from './locale';

/**
 * Descarga de CV disponible. El CV existe siempre en ambos idiomas con
 * independencia del idioma en que se esté viendo la web: el usuario elige
 * en qué idioma quiere el PDF.
 */
export interface CvDownload {
  /** Idioma del documento PDF. */
  readonly locale: Locale;
  /** Ruta del PDF publicado (relativa a la base de la app). */
  readonly url: string;
}

/** CVs publicados, en el orden en que se muestran los botones de descarga. */
export const CV_DOWNLOADS: readonly CvDownload[] = [
  { locale: 'es', url: 'cv-es.pdf' },
  { locale: 'en', url: 'cv-en.pdf' },
];
