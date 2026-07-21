import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { GetSocialLinksUseCase } from '../../core/application/use-cases/get-social-links.use-case';
import { LocaleService } from '../../core/i18n/locale.service';
import { CV_DOWNLOADS } from '../../core/i18n/cv-downloads';
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
  protected readonly text = inject(LocaleService).text;
  protected readonly cvDownloads = CV_DOWNLOADS;
  protected readonly revealState = signal<'hidden' | 'visible'>('hidden');

  reveal(): void {
    this.revealState.set('visible');
  }
}
