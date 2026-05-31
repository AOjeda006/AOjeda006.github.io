import { Injectable, inject } from '@angular/core';
import { Project } from '../../domain/models/project.model';
import { PROJECT_REPOSITORY } from '../../domain/repositories/project.repository';

/** Application use case: retrieve every project to display. */
@Injectable({ providedIn: 'root' })
export class GetProjectsUseCase {
  private readonly repository = inject(PROJECT_REPOSITORY);

  execute(): readonly Project[] {
    return this.repository.getAll();
  }
}
