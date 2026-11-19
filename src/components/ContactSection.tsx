import { AlertTriangle, ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          eyebrow="06 / Emergency & contact"
          id="contact-title"
          title={
            <>
              Urgent help starts <em>elsewhere.</em>
            </>
          }
          intro="This demo has no clinical team and no live contact details. The links below are clearly marked placeholders for a real client to replace."
          className="section-heading--on-dark"
        />

        <div className="contact__grid">
          <div className="contact__lead">
            <div className="emergency-callout">
              <AlertTriangle size={26} strokeWidth={1.9} aria-hidden="true" />
              <div>
                <h3>If this is a medical emergency</h3>
                <p>
                  Call your local emergency number or go to the nearest emergency department. This website cannot give
                  advice, book care or respond to a health problem.
                </p>
              </div>
            </div>
            <p className="contact__fineprint">
              All contact information on this page is sample content. No phone number, email address or location has been
              invented for a real business.
            </p>
          </div>

          <div className="contact-cards">
            <article className="contact-card">
              <span className="contact-card__icon" aria-hidden="true">
                <Phone size={20} />
              </span>
              <p className="contact-card__label">Call — placeholder</p>
              <a
                href="tel:0000000000"
                aria-label="Demo click-to-call link — replace with client phone number"
              >
                0000 000 000 <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <p className="contact-card__note">Demo number only. Replace before launch.</p>
            </article>

            <article className="contact-card">
              <span className="contact-card__icon" aria-hidden="true">
                <MessageCircle size={20} />
              </span>
              <p className="contact-card__label">Message — placeholder</p>
              <a
                href="https://wa.me/000000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Demo WhatsApp link — replace with client number"
              >
                Open demo WhatsApp <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <p className="contact-card__note">Opens a sample link. Replace with the client's number.</p>
            </article>

            <article className="contact-card">
              <span className="contact-card__icon" aria-hidden="true">
                <Mail size={20} />
              </span>
              <p className="contact-card__label">Email — placeholder</p>
              <a href="mailto:hello@example.invalid" aria-label="Demo email address — replace with client email">
                hello@example.invalid <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <p className="contact-card__note">Reserved .invalid domain — not a working mailbox.</p>
            </article>

            <article className="contact-card">
              <span className="contact-card__icon" aria-hidden="true">
                <MapPin size={20} />
              </span>
              <p className="contact-card__label">Visit — placeholder</p>
              <p className="contact-card__value">Sample address to be supplied</p>
              <p className="contact-card__note">Demo hours · not operational.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
