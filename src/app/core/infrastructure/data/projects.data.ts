import { Project } from '../../domain/models/project.model';

// TODO: Replace these sample projects with your own work.
export const PROJECTS: readonly Project[] = [
  {
    id: 'project-1',
    index: 1,
    category: 'web app',
    title: 'Plataforma SaaS de analítica',
    description:
      'Dashboard en tiempo real con gráficas interactivas y arquitectura ' +
      'hexagonal. Optimizado para grandes volúmenes de datos.',
    technologies: ['Angular', 'NgRx', 'D3.js', 'WebSockets'],
    githubUrl: 'https://github.com/tu-usuario/proyecto-1',
  },
  {
    id: 'project-2',
    index: 2,
    category: 'mobile',
    title: 'App de fitness multiplataforma',
    description:
      'Aplicación híbrida con seguimiento de rutinas, sincronización offline ' +
      'y notificaciones push.',
    technologies: ['Ionic', 'Capacitor', 'TypeScript'],
    githubUrl: 'https://github.com/tu-usuario/proyecto-2',
  },
  {
    id: 'project-3',
    index: 3,
    category: 'open source',
    title: 'Librería de componentes UI',
    description:
      'Sistema de diseño accesible y temable publicado en npm, con ' +
      'documentación interactiva y tests automatizados.',
    technologies: ['Angular', 'Storybook', 'Jest'],
    githubUrl: 'https://github.com/tu-usuario/proyecto-3',
  },
  {
    id: 'project-4',
    index: 4,
    category: 'api',
    title: 'API REST de e-commerce',
    description:
      'Backend escalable con autenticación JWT, pasarela de pagos y ' +
      'arquitectura limpia por capas.',
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/tu-usuario/proyecto-4',
  },
];
