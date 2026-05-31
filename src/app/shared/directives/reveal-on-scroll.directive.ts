import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  input,
  output,
} from '@angular/core';
import { onceInView } from '../utils/intersection.util';

/**
 * Emits `revealed` the first time the host element scrolls into view.
 * Keeps the IntersectionObserver wiring out of the section components
 * (Single Responsibility) and is reusable across all of them.
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Visible ratio (0-1) required before emitting. */
  readonly revealThreshold = input(0.15);

  /** Fires once when the element enters the viewport. */
  readonly revealed = output<void>();

  private teardown?: () => void;

  ngOnInit(): void {
    this.teardown = onceInView(
      this.host.nativeElement,
      () => this.revealed.emit(),
      this.revealThreshold(),
    );
  }

  ngOnDestroy(): void {
    this.teardown?.();
  }
}
