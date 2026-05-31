/**
 * Invokes `callback` once, the first time `element` enters the viewport,
 * then stops observing. Falls back to calling immediately when
 * IntersectionObserver is unavailable (e.g. non-browser environments).
 *
 * Returns a teardown function to cancel observation early.
 */
export function onceInView(
  element: Element,
  callback: () => void,
  threshold = 0.2,
): () => void {
  if (typeof IntersectionObserver === 'undefined') {
    callback();
    return () => undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
          break;
        }
      }
    },
    { threshold },
  );

  observer.observe(element);
  return () => observer.disconnect();
}
