/**
 * Domain entity describing the portfolio owner.
 */
export interface Profile {
  readonly fullName: string;
  readonly role: string;
  readonly bio: string;
  /** Technologies rendered as violet-bordered pills. */
  readonly technologies: readonly string[];
  /** Path/URL to the downloadable CV (PDF). */
  readonly cvUrl: string;
}
