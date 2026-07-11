/**
 * Domain entity representing a professional certification.
 * Pure data, free of any framework or infrastructure concern.
 */
export interface Certification {
  readonly id: string;
  /** Decorative ordinal shown big in the card corner (01, 02, ...). */
  readonly index: number;
  /** Kind of credential, e.g. 'certificado profesional' or 'curso'. */
  readonly kind: string;
  readonly title: string;
  /** Issuing body and platform, e.g. 'Coursera · IBM & LearnQuest'. */
  readonly issuer: string;
  /** Human-readable completion date, e.g. 'jul. 2026'. */
  readonly date: string;
  readonly description: string;
  /** Courses bundled by the credential (empty for standalone courses). */
  readonly courses: readonly string[];
  /** Public verification URL on the issuing platform. */
  readonly verifyUrl: string;
}
