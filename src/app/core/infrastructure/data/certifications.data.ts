import { Certification } from '../../domain/models/certification.model';

export const CERTIFICATIONS: readonly Certification[] = [
  {
    id: 'ibm-mainframe-developer',
    index: 1,
    kind: 'certificado profesional',
    title: 'IBM Mainframe Developer',
    issuer: 'IBM & LearnQuest (Coursera)',
    date: 'jul. 2026',
    description:
      'Certificado profesional de desarrollo en mainframe: COBOL de principio a fin ' +
      '(fundamentos, núcleo, gestión de datos y ficheros, pruebas y depuración) junto ' +
      'a computación empresarial y ciclo de vida del software (SDLC) sobre IBM Z.',
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
    kind: 'curso',
    title: 'COBOL Programming with VSCode',
    issuer: 'IBM (Coursera)',
    date: 'jul. 2026',
    description:
      'Desarrollo COBOL moderno sobre Visual Studio Code con el tooling de IBM Z ' +
      '(IBM Z Open Editor), acercando el mantenimiento de sistemas legados a un ' +
      'entorno de desarrollo actual.',
    courses: [],
    verifyUrl: 'https://coursera.org/verify/M1PVHYX29Y0R',
  },
];
