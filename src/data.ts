import {
  Activity,
  Baby,
  Bone,
  HeartPulse,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react';

export type Department = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export type DoctorProfile = {
  id: string;
  name: string;
  departmentId: string;
  image: string;
  imageAlt: string;
  bio: string;
};

export type Facility = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  caption: string;
  detail: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const departments: Department[] = [
  {
    id: 'primary-care',
    name: 'Primary Care',
    description: 'A sample home for general check-in information and continuity-of-care content.',
    icon: Stethoscope,
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Illustrative layout for heart-related information, with no clinical guidance shown.',
    icon: HeartPulse,
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    description: 'Placeholder section demonstrating how family-friendly content might be presented.',
    icon: Baby,
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Demo area reserved for future client-supplied information about bone and joint care.',
    icon: Bone,
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    description: 'Example department tile. No sample profiles have been added to this category yet.',
    icon: Sparkles,
  },
  {
    id: 'diagnostics',
    name: 'Diagnostics',
    description: 'Demonstration category for test-related information. No results or advice are shown.',
    icon: Activity,
  },
];

/**
 * Every name below is fictional. No degrees, registrations, years of
 * experience, awards or other professional credentials are represented.
 */
export const doctors: DoctorProfile[] = [
  {
    id: 'avery-morgan',
    name: 'Avery Morgan',
    departmentId: 'primary-care',
    image: 'images/doctor-1.jpg',
    imageAlt: 'Illustrative portrait photograph used for a fictional demo profile.',
    bio: 'Placeholder entry showing how a primary-care profile could appear. Replace with a client-approved biography before launch.',
  },
  {
    id: 'priya-raman',
    name: 'Priya Raman',
    departmentId: 'cardiology',
    image: 'images/doctor-2.jpg',
    imageAlt: 'Illustrative portrait photograph used for a fictional demo profile.',
    bio: 'Sample listing demonstrating the cardiology layout. No qualifications or registration details are shown in this demo.',
  },
  {
    id: 'noah-bennett',
    name: 'Noah Bennett',
    departmentId: 'pediatrics',
    image: 'images/doctor-3.jpg',
    imageAlt: 'Illustrative portrait photograph used for a fictional demo profile.',
    bio: 'Fictional profile used to demonstrate the directory grid. All details in this card are sample content.',
  },
  {
    id: 'leila-haddad',
    name: 'Leila Haddad',
    departmentId: 'orthopedics',
    image: 'images/doctor-4.jpg',
    imageAlt: 'Illustrative portrait photograph used for a fictional demo profile.',
    bio: 'This orthopedics entry exists only to show the profile template. Client-supplied content will replace it.',
  },
];

export const facilities: Facility[] = [
  {
    id: 'facility-main',
    title: 'A welcoming arrival',
    image: 'images/facility.jpg',
    imageAlt: 'Illustrative photograph of a healthcare facility used in the demo gallery.',
    caption: 'Illustrative facility photograph — not a real CAREWELL location.',
    detail: 'Demo caption for the larger gallery image. A real client can replace this with a verified location description.',
  },
  {
    id: 'facility-corridor',
    title: 'Calm circulation',
    image: 'images/corridor.jpg',
    imageAlt: 'Illustrative photograph of a healthcare corridor used in the demo gallery.',
    caption: 'Sample image — the space shown is not a real clinic.',
    detail: 'Placeholder caption demonstrating how secondary gallery images can be labelled.',
  },
  {
    id: 'facility-reception',
    title: 'Reception concept',
    image: 'images/clinic.jpg',
    imageAlt: 'Illustrative photograph of a clinic interior used in the demo gallery.',
    caption: 'Sample image — illustrative only.',
    detail: 'Placeholder caption for an interior view in the facilities gallery.',
  },
  {
    id: 'facility-clinical',
    title: 'Clinical setting',
    image: 'images/medical.jpg',
    imageAlt: 'Illustrative photograph of a clinical setting used in the demo gallery.',
    caption: 'Sample image — no real service is represented.',
    detail: 'Placeholder caption for a clinical-environment image in the demo gallery.',
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 'faq-real-clinic',
    question: 'Is CAREWELL MEDICAL CENTRE a real clinic?',
    answer:
      'No. This is a fictional, non-operational website demo created to show how a multi-specialty clinic site could look and behave. There is no real medical centre behind this name.',
  },
  {
    id: 'faq-medical-advice',
    question: 'Can I get medical advice, a diagnosis or a prescription here?',
    answer:
      'No. Nothing on this site provides medical advice, diagnosis, treatment or prescriptions. For a real health concern, contact a licensed healthcare professional or your local emergency service.',
  },
  {
    id: 'faq-appointment',
    question: 'What happens when I submit the appointment request form?',
    answer:
      'Nothing external happens. The form is validated in your browser and shows a demo confirmation message. It does not send, save or book anything, and no data is transmitted to a server.',
  },
  {
    id: 'faq-data',
    question: 'Do you collect health information or have a patient portal?',
    answer:
      'No. There is no patient portal, no patient record system and no sensitive health-data collection. Please do not enter medical details in the demo enquiry form.',
  },
  {
    id: 'faq-profiles',
    question: 'Are the doctors and facilities shown here real?',
    answer:
      'No. The names are fictional, the photography is illustrative and all profiles are labelled as samples. Qualifications, registration details and experience are intentionally omitted.',
  },
  {
    id: 'faq-emergency',
    question: 'What should I do in an emergency?',
    answer:
      'This demo cannot help with an emergency. Call your local emergency number or go to the nearest emergency department. The phone and messaging links on this page are placeholders, not working contact details.',
  },
];

export const departmentName = (id: string): string =>
  departments.find((department) => department.id === id)?.name ?? 'All departments';
