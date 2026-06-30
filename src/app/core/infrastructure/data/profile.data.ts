import { Profile } from '../../domain/models/profile.model';
import { Stat } from '../../domain/models/stat.model';
import { SocialLink } from '../../domain/models/social-link.model';

export const PROFILE: Profile = {
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
    'asíncrona y consenso distribuido (Raft).',
  technologies: [
    'Java',
    'Spring',
    'C++23',
    'C# / ASP.NET',
    'Python / FastAPI',
    'Node.js / NestJS',
    'TypeScript',
    'Angular',
    'React Native',
    'Kotlin / Jetpack Compose',
    'Flutter',
    'SQL & MongoDB',
    'Docker',
    'Clean Architecture',
  ],
  cvUrl: 'cv.pdf',
};

export const STATS: readonly Stat[] = [
  { id: 'projects', value: 6, suffix: '', label: 'Proyectos públicos' },
  { id: 'languages', value: 8, suffix: '', label: 'Lenguajes de programación' },
  { id: 'stacks', value: 7, suffix: '', label: 'Frameworks y stacks' },
];

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
