/**
 * Domain entity for a single highlighted statistic (e.g. "5+ years").
 */
export interface Stat {
  readonly id: string;
  /** Final numeric value the counter animates towards. */
  readonly value: number;
  /** Symbol appended after the number (e.g. "+", "k"). */
  readonly suffix: string;
  readonly label: string;
}
