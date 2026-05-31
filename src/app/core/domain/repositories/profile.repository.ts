import { InjectionToken } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Stat } from '../models/stat.model';
import { SocialLink } from '../models/social-link.model';

/**
 * Port (driven side) the application layer depends on to read profile data.
 * Concrete adapters live in the infrastructure layer.
 */
export interface ProfileRepository {
  getProfile(): Profile;
  getStats(): readonly Stat[];
  getSocialLinks(): readonly SocialLink[];
}

/** DI token enabling the Dependency Inversion Principle for {@link ProfileRepository}. */
export const PROFILE_REPOSITORY = new InjectionToken<ProfileRepository>('ProfileRepository');
