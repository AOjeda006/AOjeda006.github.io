import { Profile } from '../../domain/models/profile.model';
import { Stat } from '../../domain/models/stat.model';
import { SocialLink } from '../../domain/models/social-link.model';
import { Locale } from '../../i18n/locale';

/** Tecnologías destacadas (pills). Idénticas en todos los idiomas. */
const TECHNOLOGIES: readonly string[] = [
  'Java',
  'Spring',
  'C++23',
  'C# / ASP.NET',
  'Python / FastAPI',
  'Node.js / NestJS',
  'TypeScript',
  'Angular',
  'React',
  'React Native',
  'Kotlin / Jetpack Compose',
  'Flutter',
  'SQL & MongoDB',
  'COBOL / Mainframe',
  'Docker',
  'Clean Architecture',
];

/** Perfil del autor por idioma. */
export const PROFILE: Record<Locale, Profile> = {
  es: {
    fullName: 'Andrés Ojeda Rodríguez',
    role: 'Desarrollador Backend, Full-Stack y Sistemas Distribuidos',
    bio:
      'Desarrollador full-stack especializado en backend, titulado en Desarrollo de ' +
      'Aplicaciones Multiplataforma. Capaz de construir aplicaciones bien estructuradas ' +
      'y mantenibles aplicando SOLID y Clean Architecture, desde la API hasta el front ' +
      'web (Angular) y las apps móviles —Android nativo con Kotlin/Jetpack Compose y ' +
      'multiplataforma con Flutter / React Native—. En Accenture trabajé en ' +
      'interoperabilidad de datos sanitarios (HL7 v2 y FHIR R5), migrando y mapeando ' +
      'información clínica entre ambos estándares con Java, HAPI y Kafka. También ' +
      'construyo sistemas de alto rendimiento en C++ moderno, con concurrencia, I/O ' +
      'asíncrona y consenso distribuido (Raft). Certificado como IBM Mainframe ' +
      'Developer (COBOL e IBM Z), sumo la computación empresarial y el mantenimiento ' +
      'de sistemas legados al perfil.',
    technologies: TECHNOLOGIES,
  },
  en: {
    fullName: 'Andrés Ojeda Rodríguez',
    role: 'Backend, Full-Stack & Distributed Systems Developer',
    bio:
      'Full-stack developer specialized in backend, with a higher degree in ' +
      'Cross-Platform Application Development. I build well-structured, maintainable ' +
      'applications applying SOLID and Clean Architecture — from the API to the web ' +
      'front end (Angular) and mobile apps, both native Android with Kotlin/Jetpack ' +
      'Compose and cross-platform with Flutter / React Native. At Accenture I worked ' +
      'on healthcare data interoperability (HL7 v2 and FHIR R5), migrating and mapping ' +
      'clinical information between both standards with Java, HAPI and Kafka. I also ' +
      'build high-performance systems in modern C++, with concurrency, asynchronous ' +
      'I/O and distributed consensus (Raft). Certified as an IBM Mainframe Developer ' +
      '(COBOL and IBM Z), I add enterprise computing and legacy-system maintenance to ' +
      'the mix.',
    technologies: TECHNOLOGIES,
  },
};

/** Estadísticas destacadas por idioma (los valores no cambian; sí las etiquetas). */
export const STATS: Record<Locale, readonly Stat[]> = {
  es: [
    { id: 'projects', value: 7, suffix: '', label: 'Proyectos públicos' },
    { id: 'languages', value: 9, suffix: '', label: 'Lenguajes de programación' },
    { id: 'stacks', value: 7, suffix: '', label: 'Frameworks y stacks' },
  ],
  en: [
    { id: 'projects', value: 7, suffix: '', label: 'Public projects' },
    { id: 'languages', value: 9, suffix: '', label: 'Programming languages' },
    { id: 'stacks', value: 7, suffix: '', label: 'Frameworks & stacks' },
  ],
};

/** Enlaces de contacto. Independientes del idioma. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'email',
    kind: 'email',
    label: 'Email',
    value: 'andresojedarodriguez@gmail.com',
    url: 'mailto:andresojedarodriguez@gmail.com',
  },
  {
    id: 'github',
    kind: 'github',
    label: 'GitHub',
    value: '@AOjeda006',
    url: 'https://github.com/AOjeda006',
  },
  {
    id: 'linkedin',
    kind: 'linkedin',
    label: 'LinkedIn',
    value: 'Andrés Ojeda Rodríguez',
    url: 'https://www.linkedin.com/in/andr%C3%A9s-ojeda-rodr%C3%ADguez-6570022ab/',
  },
];
