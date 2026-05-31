import { Injectable } from '@angular/core';
import { Project } from '../../domain/models/project.model';
import { ProjectRepository } from '../../domain/repositories/project.repository';
import { PROJECTS } from '../data/projects.data';

/**
 * Infrastructure adapter that serves projects from an in-memory dataset.
 * Swap this for an HTTP/CMS-backed adapter without touching the domain
 * or application layers (Liskov / Dependency Inversion).
 */
@Injectable()
export class InMemoryProjectRepository implements ProjectRepository {
  getAll(): readonly Project[] {
    return PROJECTS;
  }
}
