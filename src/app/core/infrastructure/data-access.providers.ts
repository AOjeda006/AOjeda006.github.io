import { Provider } from '@angular/core';
import { PROJECT_REPOSITORY } from '../domain/repositories/project.repository';
import { PROFILE_REPOSITORY } from '../domain/repositories/profile.repository';
import { InMemoryProjectRepository } from './repositories/in-memory-project.repository';
import { InMemoryProfileRepository } from './repositories/in-memory-profile.repository';

/**
 * Wires the domain ports to their infrastructure adapters.
 * Registered once in the application config; the rest of the app depends
 * only on the abstract tokens (Dependency Inversion Principle).
 */
export const dataAccessProviders: Provider[] = [
  { provide: PROJECT_REPOSITORY, useClass: InMemoryProjectRepository },
  { provide: PROFILE_REPOSITORY, useClass: InMemoryProfileRepository },
];
