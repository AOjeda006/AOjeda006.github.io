import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { GetProfileUseCase } from '../../core/application/use-cases/get-profile.use-case';
import { ScrollService } from '../../shared/services/scroll.service';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { fadeUp } from '../../shared/animations/reveal.animations';

/** Landing hero with oversized display headline and primary CTAs. */
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  animations: [fadeUp],
})
export class HeroComponent {
  private readonly scrollService = inject(ScrollService);

  protected readonly profile = inject(GetProfileUseCase).execute();
  protected readonly revealState = signal<'hidden' | 'visible'>('hidden');

  // TODO: tweak each line of the giant headline.
  protected readonly headlineLines: readonly string[] = [
    'Construyo',
    'experiencias',
    'digitales.',
  ];

  // TODO: decorative vertical text on the right.
  protected readonly decorativeText = 'scroll ↓ to explore';

  reveal(): void {
    this.revealState.set('visible');
  }

  goToProjects(): void {
    this.scrollService.scrollToSection('projects');
  }

  goToContact(): void {
    this.scrollService.scrollToSection('contact');
  }
}
