import { Project } from '../../domain/models/project.model';

// TODO: Replace these sample projects with your own backend/integration work.
export const PROJECTS: readonly Project[] = [
  {
    id: 'project-1',
    index: 1,
    category: 'middleware',
    title: 'Middleware de interoperabilidad de datos',
    description:
      'Capa de integración que conecta sistemas heterogéneos: transforma, ' +
      'valida y enruta mensajes entre servicios con garantías de entrega.',
    technologies: ['Node.js', 'REST', 'Message Queues', 'Docker'],
    githubUrl: 'https://github.com/AOjeda006',
  },
  {
    id: 'project-2',
    index: 2,
    category: 'api',
    title: 'API REST por capas',
    description:
      'Backend escalable con autenticación JWT y arquitectura limpia, ' +
      'pensado para mantenibilidad y testabilidad a largo plazo.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/AOjeda006',
  },
  {
    id: 'project-3',
    index: 3,
    category: 'integración',
    title: 'Conector de sincronización de datos',
    description:
      'Proceso ETL que sincroniza información entre plataformas dispares, ' +
      'normalizando esquemas y resolviendo conflictos de forma automática.',
    technologies: ['Node.js', 'ETL', 'SQL', 'Cron'],
    githubUrl: 'https://github.com/AOjeda006',
  },
  {
    id: 'project-4',
    index: 4,
    category: 'gateway',
    title: 'Pasarela de integración de servicios',
    description:
      'API Gateway que unifica el acceso a múltiples servicios internos con ' +
      'autenticación centralizada, caché y limitación de tasa.',
    technologies: ['Node.js', 'OAuth2', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/AOjeda006',
  },
];
