import { Profile } from '../../domain/models/profile.model';
import { Stat } from '../../domain/models/stat.model';
import { SocialLink } from '../../domain/models/social-link.model';

// TODO: Replace every value below with your real information.
export const PROFILE: Profile = {
  // TODO: your full name
  fullName: 'Tu Nombre',
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

// TODO: point these to your real accounts
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'email',
    kind: 'email',
    label: 'Email',
    value: 'tunombre@email.com',
    url: 'mailto:tunombre@email.com',
  },
  {
    id: 'github',
    kind: 'github',
    label: 'GitHub',
    value: '@tu-usuario',
    url: 'https://github.com/tu-usuario',
  },
  {
    id: 'linkedin',
    kind: 'linkedin',
    label: 'LinkedIn',
    value: 'in/tu-usuario',
    url: 'https://www.linkedin.com/in/tu-usuario',
  },
];
