import { Injectable, Signal, computed, inject } from '@angular/core';
import { Project } from '../../domain/models/project.model';
import { PROJECT_REPOSITORY } from '../../domain/repositories/project.repository';
import { LocaleService } from '../../i18n/locale.service';

/** Application use case: retrieve every project to display for the active locale. */
@Injectable({ providedIn: 'root' })
export class GetProjectsUseCase {
  private readonly repository = inject(PROJECT_REPOSITORY);
  private readonly locale = inject(LocaleService);

  execute(): Signal<readonly Project[]> {
    return computed(() => this.repository.getAll(this.locale.locale()));
  }
}
