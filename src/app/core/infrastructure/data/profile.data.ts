import { Profile } from '../../domain/models/profile.model';
import { Stat } from '../../domain/models/stat.model';
import { SocialLink } from '../../domain/models/social-link.model';

// TODO: Replace remaining placeholder values (role, bio, cv) with your real info.
export const PROFILE: Profile = {
  fullName: 'Andrés Ojeda Rodríguez',
  role: 'Desarrollador Backend · Interoperabilidad de datos',
  bio:
    'Desarrollador backend centrado en la integración e interoperabilidad de datos ' +
    'entre sistemas. Diseño APIs y middlewares robustos que hacen que aplicaciones ' +
    'heterogéneas se comuniquen de forma fiable y mantenible. Vengo del mundo ' +
    'full-stack, así que también me muevo con soltura en el front cuando el proyecto ' +
    'lo pide.',
  // TODO: confirma que esta sea tu stack real de backend/integración.
  technologies: [
    'Java',
    'Spring Boot',
    'Node.js',
    'REST APIs',
    'SQL',
    'Docker',
    'Clean Architecture',
    'Angular',
  ],
  // TODO: drop your CV in /public and update the file name if needed
  cvUrl: 'cv.pdf',
};

// TODO: ajusta estos números a tu trayectoria real.
export const STATS: readonly Stat[] = [
  { id: 'experience', value: 3, suffix: '+', label: 'Años en backend' },
  { id: 'integrations', value: 20, suffix: '+', label: 'APIs e integraciones' },
  { id: 'systems', value: 10, suffix: '+', label: 'Sistemas conectados' },
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
