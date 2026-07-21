import { Project } from '../../domain/models/project.model';
import { Locale } from '../../i18n/locale';

/** Campos estructurales, idénticos en todos los idiomas. */
interface ProjectBase {
  readonly id: string;
  readonly index: number;
  readonly technologies: readonly string[];
  readonly githubUrl: string;
}

/** Campos traducibles de un proyecto. */
interface ProjectText {
  readonly category: string;
  readonly title: string;
  readonly description: string;
}

/**
 * Estructura compartida entre idiomas. El orden del array es el orden de
 * visualización; `index` es el ordinal decorativo de la tarjeta.
 */
const PROJECTS_BASE: readonly ProjectBase[] = [
  {
    id: 'nexusmq',
    index: 1,
    technologies: ['C++23', 'io_uring', 'Raft', 'Coroutines', 'Kafka', 'CMake'],
    githubUrl: 'https://github.com/AOjeda006/NexusMQ',
  },
  {
    id: 'nexusmq-console',
    index: 2,
    technologies: ['React', 'TypeScript', 'NestJS', 'OpenAPI', 'SSE', 'Docker'],
    githubUrl: 'https://github.com/AOjeda006/NexusMQ-Console',
  },
  {
    id: 'plants-app',
    index: 3,
    technologies: ['NestJS', 'TypeScript', 'MongoDB', 'Flutter', 'Socket.IO', 'Clean Architecture'],
    githubUrl: 'https://github.com/AOjeda006/Plants_app',
  },
  {
    id: 'erp',
    index: 4,
    technologies: ['ASP.NET Core', 'Angular', 'EF Core', 'SQL Server', 'Firebase Auth', 'Angular Material'],
    githubUrl: 'https://github.com/AOjeda006/ERP',
  },
  {
    id: 'ajedrez-online',
    index: 5,
    technologies: ['ASP.NET Core', 'SignalR', 'React Native', 'TypeScript', 'Clean Architecture'],
    githubUrl: 'https://github.com/AOjeda006/AjedrezOnline',
  },
  {
    id: 'gestion-academica',
    index: 6,
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Flyway', 'Docker'],
    githubUrl: 'https://github.com/AOjeda006/ProyectoSpring',
  },
  {
    id: 'jetpack-stay-rooms',
    index: 7,
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Android', 'Clean Architecture'],
    githubUrl: 'https://github.com/AOjeda006/JetPackStayRooms',
  },
];

/** Textos traducibles por idioma, indexados por id de proyecto. */
const PROJECTS_TEXT: Record<Locale, Record<string, ProjectText>> = {
  es: {
    nexusmq: {
      category: 'sistemas distribuidos',
      title: 'NexusMQ — Broker de mensajería distribuido',
      description:
        'Broker de mensajería de log particionado (estilo Kafka) construido desde ' +
        'cero en C++23. Arquitectura shared-nothing thread-per-core (un reactor por ' +
        'núcleo sobre io_uring) y Raft por partición para replicación CP tolerante a ' +
        'fallos, con protocolo binario propio y un subconjunto compatible con Kafka.',
    },
    'nexusmq-console': {
      category: 'observabilidad & admin',
      title: 'NexusMQ Console — Consola de administración',
      description:
        'Consola web de administración y monitorización de NexusMQ. SPA en React + ' +
        'TypeScript sobre un BFF NestJS que confina el JWT en el servidor y termina el ' +
        'SSE de métricas en vivo; el cliente de la API se genera desde el contrato ' +
        'OpenAPI del broker y se empaqueta en una sola imagen Docker.',
    },
    'plants-app': {
      category: 'full-stack móvil',
      title: 'Plants App — Red social de plantas',
      description:
        'Red social full-stack para el cuidado de plantas: backend NestJS con ' +
        'MongoDB y eventos en tiempo real (Socket.IO), y app multiplataforma en ' +
        'Flutter. Arquitectura limpia y API documentada con OpenAPI.',
    },
    erp: {
      category: 'full-stack',
      title: "ERP de gestión de pedidos (Nervion's System)",
      description:
        'ERP de gestión de pedidos a proveedores. Backend ASP.NET Core 8 con ' +
        'EF Core y arquitectura limpia, frontend Angular 18 + Material y ' +
        'autenticación con Firebase sobre SQL Server.',
    },
    'ajedrez-online': {
      category: 'tiempo real',
      title: 'Ajedrez Online multijugador',
      description:
        'Ajedrez multijugador en tiempo real. Servidor .NET con SignalR como ' +
        'fuente de verdad de la partida y cliente móvil en React Native, ambos ' +
        'con arquitectura por capas.',
    },
    'gestion-academica': {
      category: 'api rest',
      title: 'API de gestión académica',
      description:
        'API REST de gestión académica (alumnos, cursos y matrículas). ' +
        'Spring Boot 4 con seguridad JWT por roles, migraciones Flyway, ' +
        'documentación Swagger y despliegue con Docker.',
    },
    'jetpack-stay-rooms': {
      category: 'android',
      title: 'JetPack Stay Rooms — Reservas (Android)',
      description:
        'App Android nativa de reserva de habitaciones con roles cliente/' +
        'propietario. Kotlin y Jetpack Compose, persistencia con Room, ' +
        'arquitectura limpia y hashing seguro de contraseñas (PBKDF2).',
    },
  },
  en: {
    nexusmq: {
      category: 'distributed systems',
      title: 'NexusMQ — Distributed message broker',
      description:
        'Partitioned-log message broker (Kafka-style) built from scratch in C++23. ' +
        'Shared-nothing thread-per-core architecture (one reactor per core on ' +
        'io_uring) and per-partition Raft for fault-tolerant CP replication, with a ' +
        'custom binary protocol and a Kafka-compatible subset.',
    },
    'nexusmq-console': {
      category: 'observability & admin',
      title: 'NexusMQ Console — Admin console',
      description:
        'Web console for administering and monitoring NexusMQ. React + TypeScript ' +
        'SPA over a NestJS BFF that confines the JWT server-side and terminates the ' +
        "live-metrics SSE; the API client is generated from the broker's OpenAPI " +
        'contract and packaged into a single Docker image.',
    },
    'plants-app': {
      category: 'full-stack mobile',
      title: 'Plants App — Plant social network',
      description:
        'Full-stack social network for plant care: NestJS backend with MongoDB and ' +
        'real-time events (Socket.IO), and a cross-platform Flutter app. Clean ' +
        'architecture and an OpenAPI-documented API.',
    },
    erp: {
      category: 'full-stack',
      title: "Order-management ERP (Nervion's System)",
      description:
        'Supplier order-management ERP. ASP.NET Core 8 backend with EF Core and ' +
        'clean architecture, Angular 18 + Material front end and Firebase ' +
        'authentication over SQL Server.',
    },
    'ajedrez-online': {
      category: 'real time',
      title: 'Online multiplayer chess',
      description:
        "Real-time multiplayer chess. A .NET server with SignalR as the game's " +
        'source of truth and a React Native mobile client, both with a layered ' +
        'architecture.',
    },
    'gestion-academica': {
      category: 'rest api',
      title: 'Academic-management API',
      description:
        'Academic-management REST API (students, courses and enrollments). Spring ' +
        'Boot 4 with role-based JWT security, Flyway migrations, Swagger ' +
        'documentation and Docker deployment.',
    },
    'jetpack-stay-rooms': {
      category: 'android',
      title: 'JetPack Stay Rooms — Bookings (Android)',
      description:
        'Native Android room-booking app with client/owner roles. Kotlin and ' +
        'Jetpack Compose, Room persistence, clean architecture and secure password ' +
        'hashing (PBKDF2).',
    },
  },
};

/** Une la estructura compartida con el texto del idioma indicado. */
function buildProjects(locale: Locale): readonly Project[] {
  return PROJECTS_BASE.map((base) => ({ ...base, ...PROJECTS_TEXT[locale][base.id] }));
}

/** Proyectos del portfolio, listos para consumir por idioma. */
export const PROJECTS: Record<Locale, readonly Project[]> = {
  es: buildProjects('es'),
  en: buildProjects('en'),
};
