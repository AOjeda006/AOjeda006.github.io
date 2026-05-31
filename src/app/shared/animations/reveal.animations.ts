import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/** Easing that feels smooth and "creative" (decelerated). */
const EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';

/**
 * Fade + slide-up driven by a 'hidden' | 'visible' state.
 * The state is flipped by an IntersectionObserver when the host enters
 * the viewport, so the animation plays on scroll rather than on insertion.
 */
export const fadeUp = trigger('fadeUp', [
  state('hidden', style({ opacity: 0, transform: 'translateY(32px)' })),
  state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
  transition('hidden => visible', animate(`600ms ${EASING}`)),
]);

/**
 * Staggered entrance for a list of cards. Each child animates 100ms after
 * the previous one. Trigger it by conditionally inserting the list once the
 * section is revealed, so `:enter` fires at the right moment.
 */
export const listStagger = trigger('listStagger', [
  transition(':enter', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(24px)' }),
        stagger(100, [
          animate(`500ms ${EASING}`, style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);
