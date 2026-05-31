import { Injectable, inject } from '@angular/core';
import { Stat } from '../../domain/models/stat.model';
import { PROFILE_REPOSITORY } from '../../domain/repositories/profile.repository';

/** Application use case: retrieve the highlighted statistics. */
@Injectable({ providedIn: 'root' })
export class GetStatsUseCase {
  private readonly repository = inject(PROFILE_REPOSITORY);

  execute(): readonly Stat[] {
    return this.repository.getStats();
  }
}
