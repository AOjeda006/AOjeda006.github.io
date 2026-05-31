import { Profile } from '../../domain/models/profile.model';
import { Stat } from '../../domain/models/stat.model';
import { SocialLink } from '../../domain/models/social-link.model';

// TODO: Replace remaining placeholder values (role, bio, cv) with your real info.
export const PROFILE: Profile = {
  fullName: 'Andrés Ojeda Rodríguez',
  // TODO: your role / headline
  role: 'Full-Stack Developer',
  // TODO: your bio paragraph
  bio:
    'Desarrollador apasionado por construir productos digitales con foco en la ' +
    'arquitectura limpia, el rendimiento y el detalle visual. Disfruto convirtiendo ' +
    'ideas complejas en interfaces simples y memorables.',
  // TODO: your tech stack pills
  technologies: [
    'Angular',
    'TypeScript',
    'RxJS',
    'Node.js',
    'Clean Architecture',
    'SCSS',
    'Figma',
  ],
  // TODO: drop your CV in /public and update the file name if needed
  cvUrl: 'cv.pdf',
};

// TODO: tune these numbers to your career
export const STATS: readonly Stat[] = [
  { id: 'experience', value: 5, suffix: '+', label: 'Años de experiencia' },
  { id: 'projects', value: 30, suffix: '+', label: 'Proyectos entregados' },
  { id: 'clients', value: 12, suffix: '', label: 'Clientes satisfechos' },
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
