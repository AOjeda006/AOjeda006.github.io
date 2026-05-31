/**
 * Domain entity representing a portfolio project.
 * Pure data, free of any framework or infrastructure concern.
 */
export interface Project {
  readonly id: string;
  /** Decorative ordinal shown big in the card corner (01, 02, ...). */
  readonly index: number;
  /** Short category tag, rendered in Space Mono. */
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly githubUrl: string;
}
