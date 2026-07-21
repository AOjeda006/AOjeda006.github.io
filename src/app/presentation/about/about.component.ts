import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { GetProfileUseCase } from '../../core/application/use-cases/get-profile.use-case';
import { GetStatsUseCase } from '../../core/application/use-cases/get-stats.use-case';
import { LocaleService } from '../../core/i18n/locale.service';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { fadeUp } from '../../shared/animations/reveal.animations';

/** "About me" section: bio + tech pills on the left, animated stats on the right. */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective, CountUpDirective],
  animations: [fadeUp],
})
export class AboutComponent {
  protected readonly profile = inject(GetProfileUseCase).execute();
  protected readonly stats = inject(GetStatsUseCase).execute();
  protected readonly text = inject(LocaleService).text;
  protected readonly revealState = signal<'hidden' | 'visible'>('hidden');

  reveal(): void {
    this.revealState.set('visible');
  }
}
