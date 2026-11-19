import { ArrowUp, Cross } from 'lucide-react';

const footerLinks = [
  { label: 'Departments', href: '#departments' },
  { label: 'Sample profiles', href: '#doctors' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Patient guide', href: '#guide' },
  { label: 'Demo enquiry', href: '#appointment' },
  { label: 'FAQs', href: '#faq' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand__row">
              <span className="brand__mark brand__mark--footer" aria-hidden="true">
                <Cross size={21} strokeWidth={2.6} />
              </span>
              <span className="footer-brand__name">CAREWELL MEDICAL CENTRE</span>
            </div>
            <p>
              A fictional brand used to demonstrate a calm, accessible website concept for a multi-specialty clinic. No
              real medical service operates behind this name.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="footer-heading">Explore the demo</h2>
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div id="demo-notice">
            <h2 className="footer-heading">Full demo notice</h2>
            <p className="footer-notice">
              Non-operational sample website. All departments, names, biographies, photographs, captions, dates,
              contact links and copy are illustrative. There are no professional credentials, no verified availability,
              no patient portal, no diagnosis or prescriptions, and no sensitive health-data collection. Submitted
              enquiry details stay in your browser and are never transmitted.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 CAREWELL MEDICAL CENTRE · Fictional demo brand</p>
          <a href="#top" className="back-to-top">
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
