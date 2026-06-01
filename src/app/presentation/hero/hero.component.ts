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

  protected readonly headlineLines: readonly string[] = [
    'Backend que',
    'conecta',
    'sistemas.',
  ];

  // The element is rotated 90deg, so a "→" in source renders as a downward arrow.
  protected readonly decorativeText = 'desliza → para explorar';

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
