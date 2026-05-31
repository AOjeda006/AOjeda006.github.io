import {
  Directive,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  inject,
  input,
} from '@angular/core';
import { onceInView } from '../utils/intersection.util';

/** Decelerating easing for a satisfying counter finish. */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Animates the host's text content from 0 up to a target value the first
 * time it scrolls into view. Runs outside Angular to avoid triggering
 * change detection on every frame.
 */
@Directive({
  selector: '[appCountUp]',
})
export class CountUpDirective implements OnInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);

  /** Target value to count up to. */
  readonly appCountUp = input.required<number>();
  /** Symbol appended after the number (e.g. "+"). */
  readonly countUpSuffix = input('');
  /** Animation duration in milliseconds. */
  readonly countUpDuration = input(1600);

  private teardown?: () => void;
  private frame?: number;

  ngOnInit(): void {
    this.render(0);
    this.teardown = onceInView(this.host.nativeElement, () => this.animate());
  }

  ngOnDestroy(): void {
    this.teardown?.();
    if (this.frame !== undefined) {
      cancelAnimationFrame(this.frame);
    }
  }

  private animate(): void {
    if (typeof requestAnimationFrame === 'undefined') {
      this.render(this.appCountUp());
      return;
    }

    this.zone.runOutsideAngular(() => {
      const target = this.appCountUp();
      const duration = this.countUpDuration();
      const start = performance.now();

      const step = (now: number): void => {
        const progress = Math.min((now - start) / duration, 1);
        this.render(Math.round(easeOutCubic(progress) * target));
        if (progress < 1) {
          this.frame = requestAnimationFrame(step);
        }
      };

      this.frame = requestAnimationFrame(step);
    });
  }

  private render(value: number): void {
    this.host.nativeElement.textContent = `${value}${this.countUpSuffix()}`;
  }
}
