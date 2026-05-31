import { Injectable, inject } from '@angular/core';
import { SocialLink } from '../../domain/models/social-link.model';
import { PROFILE_REPOSITORY } from '../../domain/repositories/profile.repository';

/** Application use case: retrieve the contact / social links. */
@Injectable({ providedIn: 'root' })
export class GetSocialLinksUseCase {
  private readonly repository = inject(PROFILE_REPOSITORY);

  execute(): readonly SocialLink[] {
    return this.repository.getSocialLinks();
  }
}
