import { Injectable, Signal, computed, inject } from '@angular/core';
import { Profile } from '../../domain/models/profile.model';
import { PROFILE_REPOSITORY } from '../../domain/repositories/profile.repository';
import { LocaleService } from '../../i18n/locale.service';

/** Application use case: retrieve the portfolio owner's profile for the active locale. */
@Injectable({ providedIn: 'root' })
export class GetProfileUseCase {
  private readonly repository = inject(PROFILE_REPOSITORY);
  private readonly locale = inject(LocaleService);

  execute(): Signal<Profile> {
    return computed(() => this.repository.getProfile(this.locale.locale()));
  }
}
