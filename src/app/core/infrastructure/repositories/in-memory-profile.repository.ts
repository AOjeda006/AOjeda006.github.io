import { Injectable } from '@angular/core';
import { Profile } from '../../domain/models/profile.model';
import { Stat } from '../../domain/models/stat.model';
import { SocialLink } from '../../domain/models/social-link.model';
import { ProfileRepository } from '../../domain/repositories/profile.repository';
import { Locale } from '../../i18n/locale';
import { PROFILE, SOCIAL_LINKS, STATS } from '../data/profile.data';

/**
 * Infrastructure adapter that serves profile data from an in-memory dataset.
 */
@Injectable()
export class InMemoryProfileRepository implements ProfileRepository {
  getProfile(locale: Locale): Profile {
    return PROFILE[locale];
  }

  getStats(locale: Locale): readonly Stat[] {
    return STATS[locale];
  }

  getSocialLinks(): readonly SocialLink[] {
    return SOCIAL_LINKS;
  }
}
