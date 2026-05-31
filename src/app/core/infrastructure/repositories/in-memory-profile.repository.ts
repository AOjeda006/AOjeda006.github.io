import { Injectable } from '@angular/core';
import { Profile } from '../../domain/models/profile.model';
import { Stat } from '../../domain/models/stat.model';
import { SocialLink } from '../../domain/models/social-link.model';
import { ProfileRepository } from '../../domain/repositories/profile.repository';
import { PROFILE, SOCIAL_LINKS, STATS } from '../data/profile.data';

/**
 * Infrastructure adapter that serves profile data from an in-memory dataset.
 */
@Injectable()
export class InMemoryProfileRepository implements ProfileRepository {
  getProfile(): Profile {
    return PROFILE;
  }

  getStats(): readonly Stat[] {
    return STATS;
  }

  getSocialLinks(): readonly SocialLink[] {
    return SOCIAL_LINKS;
  }
}
