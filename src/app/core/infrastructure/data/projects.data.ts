import { Project } from '../../domain/models/project.model';

export const PROJECTS: readonly Project[] = [
  {
    id: 'nexusmq',
    index: 1,
    category: 'sistemas distribuidos',
    title: 'NexusMQ — Broker de mensajería distribuido',
    description:
      'Broker de mensajería de log particionado (estilo Kafka) construido desde ' +
      'cero en C++23. Arquitectura shared-nothing thread-per-core (un reactor por ' +
      'núcleo sobre io_uring) y Raft por partición para replicación CP tolerante a ' +
      'fallos, con protocolo binario propio y un subconjunto compatible con Kafka.',
    technologies: ['C++23', 'io_uring', 'Raft', 'Coroutines', 'Kafka', 'CMake'],
    githubUrl: 'https://github.com/AOjeda006/NexusMQ',
  },
  {
    id: 'plants-app',
    index: 2,
    category: 'full-stack móvil',
    title: 'Plants App — Red social de plantas',
    description:
      'Red social full-stack para el cuidado de plantas: backend NestJS con ' +
      'MongoDB y eventos en tiempo real (Socket.IO), y app multiplataforma en ' +
      'Flutter. Arquitectura limpia y API documentada con OpenAPI.',
    technologies: ['NestJS', 'TypeScript', 'MongoDB', 'Flutter', 'Socket.IO', 'Clean Architecture'],
    githubUrl: 'https://github.com/AOjeda006/Plants_app',
  },
  {
    id: 'erp',
    index: 3,
    category: 'full-stack',
    title: "ERP de gestión de pedidos (Nervion's System)",
    description:
      'ERP de gestión de pedidos a proveedores. Backend ASP.NET Core 8 con ' +
      'EF Core y arquitectura limpia, frontend Angular 18 + Material y ' +
      'autenticación con Firebase sobre SQL Server.',
    technologies: ['ASP.NET Core', 'Angular', 'EF Core', 'SQL Server', 'Firebase Auth', 'Angular Material'],
    githubUrl: 'https://github.com/AOjeda006/ERP',
  },
  {
    id: 'ajedrez-online',
    index: 4,
    category: 'tiempo real',
    title: 'Ajedrez Online multijugador',
    description:
      'Ajedrez multijugador en tiempo real. Servidor .NET con SignalR como ' +
      'fuente de verdad de la partida y cliente móvil en React Native, ambos ' +
      'con arquitectura por capas.',
    technologies: ['ASP.NET Core', 'SignalR', 'React Native', 'TypeScript', 'Clean Architecture'],
    githubUrl: 'https://github.com/AOjeda006/AjedrezOnline',
  },
  {
    id: 'gestion-academica',
    index: 5,
    category: 'api rest',
    title: 'API de gestión académica',
    description:
      'API REST de gestión académica (alumnos, cursos y matrículas). ' +
      'Spring Boot 4 con seguridad JWT por roles, migraciones Flyway, ' +
      'documentación Swagger y despliegue con Docker.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Flyway', 'Docker'],
    githubUrl: 'https://github.com/AOjeda006/ProyectoSpring',
  },
  {
    id: 'jetpack-stay-rooms',
    index: 6,
    category: 'android',
    title: 'JetPack Stay Rooms — Reservas (Android)',
    description:
      'App Android nativa de reserva de habitaciones con roles cliente/' +
      'propietario. Kotlin y Jetpack Compose, persistencia con Room, ' +
      'arquitectura limpia y hashing seguro de contraseñas (PBKDF2).',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Android', 'Clean Architecture'],
    githubUrl: 'https://github.com/AOjeda006/JetPackStayRooms',
  },
];
