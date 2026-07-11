import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { GetCertificationsUseCase } from '../../core/application/use-cases/get-certifications.use-case';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { fadeUp, listStagger } from '../../shared/animations/reveal.animations';

/** Certifications grid with staggered card entrance and hover lift. */
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  animations: [fadeUp, listStagger],
})
export class CertificationsComponent {
  protected readonly certifications = inject(GetCertificationsUseCase).execute();
  protected readonly revealState = signal<'hidden' | 'visible'>('hidden');

  reveal(): void {
    this.revealState.set('visible');
  }

  /** Two-digit ordinal for the decorative corner number. */
  protected formatIndex(index: number): string {
    return index < 10 ? `0${index}` : `${index}`;
  }
}
