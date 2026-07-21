import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LocaleService } from '../../core/i18n/locale.service';

/** Minimal footer with two mono-spaced texts at each edge. */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
  protected readonly text = inject(LocaleService).text;

  protected readonly rightText = 'Andrés Ojeda Rodríguez';
}
