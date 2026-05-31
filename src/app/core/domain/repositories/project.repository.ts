import { InjectionToken } from '@angular/core';
import { Project } from '../models/project.model';

/**
 * Port (driven side) the application layer depends on to read projects.
 * Concrete adapters live in the infrastructure layer.
 */
export interface ProjectRepository {
  getAll(): readonly Project[];
}

/** DI token enabling the Dependency Inversion Principle for {@link ProjectRepository}. */
export const PROJECT_REPOSITORY = new InjectionToken<ProjectRepository>('ProjectRepository');
