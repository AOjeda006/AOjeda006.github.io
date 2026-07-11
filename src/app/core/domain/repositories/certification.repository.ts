import { InjectionToken } from '@angular/core';
import { Certification } from '../models/certification.model';

/**
 * Port (driven side) the application layer depends on to read certifications.
 * Concrete adapters live in the infrastructure layer.
 */
export interface CertificationRepository {
  getAll(): readonly Certification[];
}

/** DI token enabling the Dependency Inversion Principle for {@link CertificationRepository}. */
export const CERTIFICATION_REPOSITORY = new InjectionToken<CertificationRepository>(
  'CertificationRepository',
);
