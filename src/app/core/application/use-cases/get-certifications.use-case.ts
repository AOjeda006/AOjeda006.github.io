import { Injectable, Signal, computed, inject } from '@angular/core';
import { Certification } from '../../domain/models/certification.model';
import { CERTIFICATION_REPOSITORY } from '../../domain/repositories/certification.repository';
import { LocaleService } from '../../i18n/locale.service';

/** Application use case: retrieve every certification to display for the active locale. */
@Injectable({ providedIn: 'root' })
export class GetCertificationsUseCase {
  private readonly repository = inject(CERTIFICATION_REPOSITORY);
  private readonly locale = inject(LocaleService);

  execute(): Signal<readonly Certification[]> {
    return computed(() => this.repository.getAll(this.locale.locale()));
  }
}
