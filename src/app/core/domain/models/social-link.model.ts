/** Discriminator for the kind of contact link, used to pick an icon. */
export type SocialLinkKind = 'email' | 'github' | 'linkedin';

/**
 * Domain entity representing a contact / social link.
 */
export interface SocialLink {
  readonly id: string;
  readonly kind: SocialLinkKind;
  /** Human label, e.g. "Email". */
  readonly label: string;
  /** Visible value, e.g. "you@mail.com" or "@handle". */
  readonly value: string;
  /** Navigable URL (mailto:, https://, ...). */
  readonly url: string;
}
