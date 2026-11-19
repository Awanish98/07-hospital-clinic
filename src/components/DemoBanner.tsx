import { AlertTriangle } from 'lucide-react';

export default function DemoBanner() {
  return (
    <aside className="demo-banner" role="note" aria-label="Important demo notice" id="top">
      <div className="container demo-banner__inner">
        <AlertTriangle size={20} strokeWidth={2.2} aria-hidden="true" />
        <p>
          <strong>Non-operational demo.</strong> CAREWELL MEDICAL CENTRE is a fictional sample website, not a medical
          service. It cannot provide diagnosis, prescriptions, appointments or patient care.{' '}
          <a href="#demo-notice">Read the full notice</a>
        </p>
      </div>
    </aside>
  );
}
