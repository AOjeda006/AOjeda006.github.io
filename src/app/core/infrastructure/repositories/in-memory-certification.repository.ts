import { Injectable } from '@angular/core';
import { Certification } from '../../domain/models/certification.model';
import { CertificationRepository } from '../../domain/repositories/certification.repository';
import { Locale } from '../../i18n/locale';
import { CERTIFICATIONS } from '../data/certifications.data';

/**
 * Infrastructure adapter that serves certifications from an in-memory dataset.
 * Swap this for an HTTP/CMS-backed adapter without touching the domain
 * or application layers (Liskov / Dependency Inversion).
 */
@Injectable()
export class InMemoryCertificationRepository implements CertificationRepository {
  getAll(locale: Locale): readonly Certification[] {
    return CERTIFICATIONS[locale];
  }
}
