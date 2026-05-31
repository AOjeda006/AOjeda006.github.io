import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Minimal footer with two mono-spaced texts at each edge. */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();

  // TODO: customise the footer texts.
  protected readonly leftText = 'Diseñado y construido con Angular';
  protected readonly rightText = 'Andrés Ojeda Rodríguez';
}
