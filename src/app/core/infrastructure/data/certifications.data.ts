import { Certification } from '../../domain/models/certification.model';
import { Locale } from '../../i18n/locale';

/** Campos estructurales de una certificación, idénticos en todos los idiomas. */
interface CertificationBase {
  readonly id: string;
  readonly index: number;
  readonly issuer: string;
  /** Cursos incluidos (nombres propios, sin traducir). */
  readonly courses: readonly string[];
  readonly verifyUrl: string;
}

/** Campos traducibles de una certificación. */
interface CertificationText {
  readonly kind: string;
  readonly title: string;
  readonly date: string;
  readonly description: string;
}

/** Estructura compartida entre idiomas. */
const CERTIFICATIONS_BASE: readonly CertificationBase[] = [
  {
    id: 'ibm-mainframe-developer',
    index: 1,
    issuer: 'IBM & LearnQuest (Coursera)',
    courses: [
      'Introduction to Enterprise Computing',
      'IBM COBOL Basics',
      'IBM COBOL Core',
      'IBM COBOL Software Development Practices',
      'IBM COBOL Data and File Management',
      'IBM COBOL Basic Testing and Debugging',
      'IBM COBOL Software Development Process',
    ],
    verifyUrl: 'https://coursera.org/verify/professional-cert/6H1WOWBXU124',
  },
  {
    id: 'cobol-programming-vscode',
    index: 2,
    issuer: 'IBM (Coursera)',
    courses: [],
    verifyUrl: 'https://coursera.org/verify/M1PVHYX29Y0R',
  },
];

/** Textos traducibles por idioma, indexados por id de certificación. */
const CERTIFICATIONS_TEXT: Record<Locale, Record<string, CertificationText>> = {
  es: {
    'ibm-mainframe-developer': {
      kind: 'certificado profesional',
      title: 'IBM Mainframe Developer',
      date: 'jul. 2026',
      description:
        'Certificado profesional de desarrollo en mainframe: COBOL de principio a fin ' +
        '(fundamentos, núcleo, gestión de datos y ficheros, pruebas y depuración) junto ' +
        'a computación empresarial y ciclo de vida del software (SDLC) sobre IBM Z.',
    },
    'cobol-programming-vscode': {
      kind: 'curso',
      title: 'COBOL Programming with VSCode',
      date: 'jul. 2026',
      description:
        'Desarrollo COBOL moderno sobre Visual Studio Code con el tooling de IBM Z ' +
        '(IBM Z Open Editor), acercando el mantenimiento de sistemas legados a un ' +
        'entorno de desarrollo actual.',
    },
  },
  en: {
    'ibm-mainframe-developer': {
      kind: 'professional certificate',
      title: 'IBM Mainframe Developer',
      date: 'Jul 2026',
      description:
        'Professional certificate in mainframe development: COBOL end to end ' +
        '(fundamentals, core, data and file management, testing and debugging) ' +
        'alongside enterprise computing and the software development life cycle ' +
        '(SDLC) on IBM Z.',
    },
    'cobol-programming-vscode': {
      kind: 'course',
      title: 'COBOL Programming with VSCode',
      date: 'Jul 2026',
      description:
        'Modern COBOL development on Visual Studio Code with IBM Z tooling ' +
        '(IBM Z Open Editor), bringing legacy-system maintenance to a current ' +
        'development environment.',
    },
  },
};

/** Une la estructura compartida con el texto del idioma indicado. */
function buildCertifications(locale: Locale): readonly Certification[] {
  return CERTIFICATIONS_BASE.map((base) => ({ ...base, ...CERTIFICATIONS_TEXT[locale][base.id] }));
}

/** Certificaciones del portfolio, listas para consumir por idioma. */
export const CERTIFICATIONS: Record<Locale, readonly Certification[]> = {
  es: buildCertifications('es'),
  en: buildCertifications('en'),
};
