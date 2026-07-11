import { Injectable, inject } from '@angular/core';
import { Certification } from '../../domain/models/certification.model';
import { CERTIFICATION_REPOSITORY } from '../../domain/repositories/certification.repository';

/** Application use case: retrieve every certification to display. */
@Injectable({ providedIn: 'root' })
export class GetCertificationsUseCase {
  private readonly repository = inject(CERTIFICATION_REPOSITORY);

  execute(): readonly Certification[] {
    return this.repository.getAll();
  }
}
