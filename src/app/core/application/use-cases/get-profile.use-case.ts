import { Injectable, inject } from '@angular/core';
import { Profile } from '../../domain/models/profile.model';
import { PROFILE_REPOSITORY } from '../../domain/repositories/profile.repository';

/** Application use case: retrieve the portfolio owner's profile. */
@Injectable({ providedIn: 'root' })
export class GetProfileUseCase {
  private readonly repository = inject(PROFILE_REPOSITORY);

  execute(): Profile {
    return this.repository.getProfile();
  }
}
