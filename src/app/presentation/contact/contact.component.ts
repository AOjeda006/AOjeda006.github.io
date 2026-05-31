import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { GetProfileUseCase } from '../../core/application/use-cases/get-profile.use-case';
import { GetSocialLinksUseCase } from '../../core/application/use-cases/get-social-links.use-case';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { fadeUp } from '../../shared/animations/reveal.animations';

/** Contact section: headline on the left, links + CV download on the right. */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  animations: [fadeUp],
})
export class ContactComponent {
  protected readonly socialLinks = inject(GetSocialLinksUseCase).execute();
  protected readonly profile = inject(GetProfileUseCase).execute();
  protected readonly revealState = signal<'hidden' | 'visible'>('hidden');

  reveal(): void {
    this.revealState.set('visible');
  }
}
