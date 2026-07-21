import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { GetProjectsUseCase } from '../../core/application/use-cases/get-projects.use-case';
import { LocaleService } from '../../core/i18n/locale.service';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { fadeUp, listStagger } from '../../shared/animations/reveal.animations';

/** Projects grid with staggered card entrance and hover lift. */
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  animations: [fadeUp, listStagger],
})
export class ProjectsComponent {
  protected readonly projects = inject(GetProjectsUseCase).execute();
  protected readonly text = inject(LocaleService).text;
  protected readonly revealState = signal<'hidden' | 'visible'>('hidden');

  reveal(): void {
    this.revealState.set('visible');
  }

  /** Two-digit ordinal for the decorative corner number. */
  protected formatIndex(index: number): string {
    return index < 10 ? `0${index}` : `${index}`;
  }
}
