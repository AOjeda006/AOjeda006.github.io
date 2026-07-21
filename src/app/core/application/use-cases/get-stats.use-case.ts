import { Injectable, Signal, computed, inject } from '@angular/core';
import { Stat } from '../../domain/models/stat.model';
import { PROFILE_REPOSITORY } from '../../domain/repositories/profile.repository';
import { LocaleService } from '../../i18n/locale.service';

/** Application use case: retrieve the highlighted statistics for the active locale. */
@Injectable({ providedIn: 'root' })
export class GetStatsUseCase {
  private readonly repository = inject(PROFILE_REPOSITORY);
  private readonly locale = inject(LocaleService);

  execute(): Signal<readonly Stat[]> {
    return computed(() => this.repository.getStats(this.locale.locale()));
  }
}
