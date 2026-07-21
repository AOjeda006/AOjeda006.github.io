import { Locale } from './locale';

/**
 * Textos estáticos de la interfaz (los que no viven en los datasets de
 * dominio). Se resuelven por idioma en {@link UI_TEXT}.
 */
export interface UiText {
  readonly nav: {
    readonly about: string;
    readonly projects: string;
    readonly certifications: string;
    readonly contact: string;
    readonly menuAria: string;
    readonly languageAria: string;
  };
  readonly hero: {
    readonly subtitle: string;
    readonly headlineLines: readonly string[];
    readonly decoration: string;
    readonly ctaProjects: string;
    readonly ctaContact: string;
  };
  readonly about: {
    readonly tag: string;
  };
  readonly projects: {
    readonly tag: string;
    readonly title: string;
    readonly cardLink: string;
  };
  readonly certifications: {
    readonly tag: string;
    readonly title: string;
    readonly cardLink: string;
  };
  readonly contact: {
    readonly tag: string;
    readonly title: string;
    readonly text: string;
    readonly cvSpanish: string;
    readonly cvEnglish: string;
  };
  readonly footer: {
    readonly available: string;
  };
}

/** Diccionario de textos de interfaz por idioma. */
export const UI_TEXT: Record<Locale, UiText> = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      contact: 'Contacto',
      menuAria: 'Alternar menú de navegación',
      languageAria: 'Cambiar idioma',
    },
    hero: {
      subtitle: 'Aplicaciones de extremo a extremo, del backend al front y al móvil.',
      headlineLines: ['Backend que', 'conecta', 'sistemas.'],
      decoration: 'desliza → para explorar',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Hablemos',
    },
    about: {
      tag: '// sobre mí',
    },
    projects: {
      tag: '// proyectos',
      title: 'Proyectos personales',
      cardLink: 'Ver en GitHub →',
    },
    certifications: {
      tag: '// certificaciones',
      title: 'Certificaciones',
      cardLink: 'Verificar credencial →',
    },
    contact: {
      tag: '// contacto',
      title: 'Hagamos que tus sistemas hablen.',
      text:
        '¿Buscas reforzar tu equipo de backend o tienes un proyecto de integración ' +
        'entre sistemas? Estoy abierto a nuevas oportunidades — backend, middleware o ' +
        'full-stack. Escríbeme y respondo en menos de 24 horas.',
      cvSpanish: 'CV en español (PDF)',
      cvEnglish: 'CV en inglés (PDF)',
    },
    footer: {
      available: 'Disponible para nuevas oportunidades',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact',
      menuAria: 'Toggle navigation menu',
      languageAria: 'Switch language',
    },
    hero: {
      subtitle: 'End-to-end applications, from the backend to the web and mobile.',
      headlineLines: ['Backend that', 'connects', 'systems.'],
      decoration: 'scroll → to explore',
      ctaProjects: 'View projects',
      ctaContact: "Let's talk",
    },
    about: {
      tag: '// about me',
    },
    projects: {
      tag: '// projects',
      title: 'Personal projects',
      cardLink: 'View on GitHub →',
    },
    certifications: {
      tag: '// certifications',
      title: 'Certifications',
      cardLink: 'Verify credential →',
    },
    contact: {
      tag: '// contact',
      title: "Let's make your systems talk.",
      text:
        'Looking to strengthen your backend team or have a systems-integration ' +
        "project? I'm open to new opportunities — backend, middleware or full-stack. " +
        "Drop me a line and I'll reply within 24 hours.",
      cvSpanish: 'CV in Spanish (PDF)',
      cvEnglish: 'CV in English (PDF)',
    },
    footer: {
      available: 'Available for new opportunities',
    },
  },
};
