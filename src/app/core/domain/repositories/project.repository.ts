import { InjectionToken } from '@angular/core';
import { Project } from '../models/project.model';
import { Locale } from '../../i18n/locale';

/**
 * Port (driven side) the application layer depends on to read projects.
 * Concrete adapters live in the infrastructure layer.
 */
export interface ProjectRepository {
  getAll(locale: Locale): readonly Project[];
}

/** DI token enabling the Dependency Inversion Principle for {@link ProjectRepository}. */
export const PROJECT_REPOSITORY = new InjectionToken<ProjectRepository>('ProjectRepository');
